// Case Study Interactive Map Logic
let currentCase = null;
let map = null;
let markers = {};

// Tọa độ địa lý thực tế của Việt Nam (latitude, longitude)
var locationCoords = {
    'van-thinh-phat': [10.7769, 106.7009],    // TP.HCM
    'trai-phieu': [21.0285, 105.8542],        // Hà Nội
    'thieu-dien': [21.5, 106.0],              // Miền Bắc (vùng rộng)
    'sot-gia-gao': [10.0, 105.5],             // Đồng bằng Sông Cửu Long
    'formosa': [18.3333, 105.9000],           // Hà Tĩnh
    'thu-thiem': [10.7950, 106.7350],         // Thủ Thiêm, TP.HCM
    'grab-taxi': [21.0285, 105.8542]          // Hà Nội (đại diện cho Hà Nội + HCM)
};

function initializeMap() {
    // Tạo Leaflet map tập trung vào Việt Nam
    map = L.map('leafletMap', {
        center: [16.0, 107.0],
        zoom: 6,
        minZoom: 5,
        maxZoom: 10,
        zoomControl: true
    });
    
    // Thêm tile layer (OpenStreetMap)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        maxZoom: 19
    }).addTo(map);
    
    // Tạo custom icon cho mỗi case
    Object.values(caseStudiesData).forEach(function(caseData) {
        var coords = locationCoords[caseData.id];
        if (!coords) return;
        
        // Xác định màu theo conflict level
        var iconColor = '#667eea';
        if (caseData.conflictLevel === 'severe') iconColor = '#dc2626';
        else if (caseData.conflictLevel === 'moderate') iconColor = '#f59e0b';
        else if (caseData.conflictLevel === 'low') iconColor = '#10b981';
        
        // Tạo custom HTML icon
        var customIcon = L.divIcon({
            className: 'custom-marker',
            html: '<div class="marker-pin" style="background-color: ' + iconColor + ';">' +
                  '<div class="marker-icon">' + caseData.icon + '</div>' +
                  '</div>',
            iconSize: [40, 50],
            iconAnchor: [20, 50],
            popupAnchor: [0, -50]
        });
        
        // Tạo marker
        var marker = L.marker(coords, { icon: customIcon })
            .addTo(map)
            .bindTooltip(caseData.title, {
                permanent: false,
                direction: 'top',
                className: 'custom-tooltip'
            });
        
        // Click event - zoom sẽ được xử lý trong openCaseAnalysis
        marker.on('click', function() {
            openCaseAnalysis(caseData.id);
        });
        
        markers[caseData.id] = marker;
    });
}

function populateSidebarNav() {
    const navList = document.getElementById('caseNavList');
    if (!navList) return;
    
    navList.innerHTML = Object.values(caseStudiesData).map(function(caseData) {
        return '<div class="case-nav-item" onclick="openCaseAnalysis(\'' + caseData.id + '\')"><div class="case-nav-icon">' + caseData.icon + '</div><div class="case-nav-info"><div class="case-nav-title">' + caseData.title + '</div><div class="case-nav-location">' + caseData.location + ' | ' + caseData.time + '</div></div></div>';
    }).join('');
}

function openCaseAnalysis(caseId) {
    const caseData = caseStudiesData[caseId];
    if (!caseData) return;
    currentCase = caseId;
    
    const sidebarNav = document.getElementById('sidebarNav');
    const analysisSidebar = document.getElementById('sidebarAnalysis');
    const analysisContent = document.getElementById('analysisContent');
    
    // Get coordinates for this case
    const coords = locationCoords[caseId];
    
    // Zoom to location với mức zoom phù hợp
    if (map && coords) {
        // Xác định zoom level dựa trên loại case
        let zoomLevel = 8; // Default zoom
        
        // Các case khu vực rộng (miền Bắc, ĐBSCL) zoom xa hơn
        if (caseId === 'thieu-dien' || caseId === 'sot-gia-gao' || caseId === 'grab-taxi') {
            zoomLevel = 7;
        }
        // Các case cụ thể tại một địa điểm zoom gần hơn
        else if (caseId === 'formosa' || caseId === 'thu-thiem' || caseId === 'van-thinh-phat') {
            zoomLevel = 9;
        }
        
        // Tính toán offset để zoom vào giữa màn hình (tính đến sidebar 400px)
        const sidebarWidth = 400; // Width của sidebar
        const mapContainer = document.getElementById('mapContainer');
        const containerWidth = mapContainer ? mapContainer.offsetWidth : window.innerWidth;
        
        // Offset x (dịch sang phải để căn giữa phần bản đồ còn lại)
        const offsetX = sidebarWidth / 2;
        
        // Convert pixel offset to latlng offset
        const targetPoint = map.project(coords, zoomLevel);
        const targetLatLng = map.unproject([targetPoint.x - offsetX, targetPoint.y], zoomLevel);
        
        // Smooth fly animation đến vị trí đã offset
        map.flyTo(targetLatLng, zoomLevel, {
            duration: 1.2,
            easeLinearity: 0.25
        });
        
        // Highlight marker sau khi zoom
        setTimeout(function() {
            const marker = markers[caseId];
            if (marker) {
                marker.openTooltip();
            }
        }, 600);
    }
    
    // Highlight active marker
    Object.keys(markers).forEach(function(id) {
        var markerEl = markers[id].getElement();
        if (markerEl) {
            if (id === caseId) {
                markerEl.classList.add('active');
            } else {
                markerEl.classList.remove('active');
            }
        }
    });
    
    // Hide navigation sidebar with animation
    if (sidebarNav) {
        sidebarNav.style.transform = 'translateX(-100%)';
        sidebarNav.style.opacity = '0';
        setTimeout(function() {
            sidebarNav.style.display = 'none';
        }, 400);
    }
    if (!analysisSidebar || !analysisContent) return;
    
    var keywordTags = caseData.keywords.map(function(kw) { return '<span class="keyword-tag">' + kw + '</span>'; }).join('');
    
    // Emoji lớn thay cho ảnh thật
    var emojiSize = '8rem';
    
    analysisContent.innerHTML = '<h2 class="analysis-title">' + caseData.fullTitle + '</h2>' +
        '<div class="quick-info-box">' +
        '<div class="quick-info-item"><strong>📍 Địa điểm:</strong> ' + caseData.location + '</div>' +
        '<div class="quick-info-item"><strong>📅 Thời gian:</strong> ' + caseData.time + '</div>' +
        '<div class="quick-info-item keywords"><strong>🔑 Từ khóa lý thuyết:</strong><br>' + keywordTags + '</div>' +
        '</div>' +
        '<div class="case-image-placeholder"><div class="image-icon" style="font-size: ' + emojiSize + ';">' + caseData.icon + '</div><div class="image-label">' + caseData.title + '</div></div>' +
        '<div class="analysis-section"><h3>📋 Tóm tắt sự kiện</h3><p>' + caseData.summary + '</p></div>' +
        '<div class="divider"></div>' +
        '<div class="analysis-section"><h3>🔍 Phân tích Lăng kính LIKT</h3><h4 class="subsection-title">Các bên liên quan & Lợi ích (LIKT):</h4>' +
        '<div class="interest-card employer-card"><h5>' + caseData.interests.employer.title + '</h5><p>' + caseData.interests.employer.impact + '</p></div>' +
        '<div class="interest-card worker-card"><h5>' + caseData.interests.worker.title + '</h5><p>' + caseData.interests.worker.impact + '</p></div>' +
        '<div class="interest-card state-card"><h5>' + caseData.interests.state.title + '</h5><p>' + caseData.interests.state.impact + '</p></div>' +
        '<div class="conclusion-card"><h5>📊 Kết luận Lợi ích:</h5><p>' + caseData.conclusion + '</p></div>' +
        '</div>' +
        '<div class="analysis-section"><h3>📚 Lý thuyết Áp dụng</h3>' +
        '<div class="theory-box"><h5>🔹 Nhân tố ảnh hưởng:</h5><p>' + caseData.theory.factor + '</p></div>' +
        '<div class="theory-box"><h5>🔹 Phương thức thực hiện:</h5><p>' + caseData.theory.method + '</p></div>' +
        '</div>';
    
    analysisSidebar.classList.add('active');
    
    document.querySelectorAll('.map-hotspot').forEach(function(hotspot) {
        hotspot.classList.remove('active');
        if (hotspot.getAttribute('data-case-id') === caseId) {
            hotspot.classList.add('active');
        }
    });
}

function closeCaseAnalysis() {
    currentCase = null;
    const analysisSidebar = document.getElementById('sidebarAnalysis');
    const sidebarNav = document.getElementById('sidebarNav');
    
    // Reset map view
    if (map) {
        map.flyTo([16.0, 107.0], 6, { duration: 1 });
    }
    
    // Hide analysis sidebar
    if (analysisSidebar) analysisSidebar.classList.remove('active');
    
    // Show navigation sidebar with animation
    if (sidebarNav) {
        sidebarNav.style.display = 'block';
        setTimeout(function() {
            sidebarNav.style.transform = 'translateX(0)';
            sidebarNav.style.opacity = '1';
        }, 50);
    }
    
    // Reset marker styles
    Object.keys(markers).forEach(function(id) {
        var markerEl = markers[id].getElement();
        if (markerEl) markerEl.classList.remove('active');
    });
}

document.addEventListener('DOMContentLoaded', function() {
    initializeMap();
    populateSidebarNav();
});
