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

// 🇻🇳 Function thêm markers cho Hoàng Sa và Trường Sa (Lãnh thổ Việt Nam)
function addVietnamTerritoryMarkers() {
    // Hoàng Sa (Paracel Islands) - Tọa độ chính giữa quần đảo
    const hoangSaCoords = [16.5, 112.0];
    
    // Trường Sa (Spratly Islands) - Tọa độ đại diện
    const truongSaCoords = [8.65, 111.92];
    
    // 🚫 CHE CHỮ TRUNG QUỐC - Thêm white overlay rectangles
    // Che label "Xisha Qundao" (西沙群島) ở Hoàng Sa
    const hoangSaOverlay1 = L.rectangle(
        [[16.3, 111.5], [16.8, 112.5]], 
        {
            color: 'rgba(255, 255, 255, 0)',
            fillColor: 'white',
            fillOpacity: 0.95,
            weight: 0,
            interactive: false,
            pane: 'overlayPane'
        }
    ).addTo(map);
    
    // Che label "Nansha Qundao" (南沙群島) ở Trường Sa
    const truongSaOverlay1 = L.rectangle(
        [[8.3, 111.0], [9.0, 112.8]], 
        {
            color: 'rgba(255, 255, 255, 0)',
            fillColor: 'white',
            fillOpacity: 0.95,
            weight: 0,
            interactive: false,
            pane: 'overlayPane'
        }
    ).addTo(map);
    
    // Overlay thứ 2 cho Hoàng Sa (phủ rộng hơn)
    const hoangSaOverlay2 = L.rectangle(
        [[16.0, 111.3], [17.2, 112.8]], 
        {
            color: 'rgba(255, 255, 255, 0)',
            fillColor: 'white',
            fillOpacity: 0.85,
            weight: 0,
            interactive: false,
            pane: 'overlayPane'
        }
    ).addTo(map);
    
    // Overlay thứ 2 cho Trường Sa (phủ rộng hơn)
    const truongSaOverlay2 = L.rectangle(
        [[7.8, 110.5], [9.5, 113.0]], 
        {
            color: 'rgba(255, 255, 255, 0)',
            fillColor: 'white',
            fillOpacity: 0.85,
            weight: 0,
            interactive: false,
            pane: 'overlayPane'
        }
    ).addTo(map);
    
    // Custom icon cho Hoàng Sa và Trường Sa
    const territoryIcon = L.divIcon({
        className: 'territory-marker',
        html: '<div class="territory-pin">' +
              '<div class="territory-flag">🇻🇳</div>' +
              '</div>',
        iconSize: [30, 40],
        iconAnchor: [15, 40],
        popupAnchor: [0, -40]
    });
    
    // Marker Hoàng Sa
    L.marker(hoangSaCoords, { icon: territoryIcon })
        .addTo(map)
        .bindPopup(
            '<div class="territory-popup">' +
            '<h4 style="margin: 0 0 8px 0; color: #dc2626; font-size: 1.1rem;">🏝️ Quần đảo Hoàng Sa</h4>' +
            '<p style="margin: 0; font-weight: 600; color: #059669;">Lãnh thổ Việt Nam 🇻🇳</p>' +
            '<p style="margin: 8px 0 0 0; font-size: 0.9rem; color: #64748b;">' +
            'Paracel Islands - Thuộc chủ quyền Việt Nam từ thời Nguyễn, hiện bị Trung Quốc chiếm đóng trái phép.</p>' +
            '</div>',
            { 
                maxWidth: 300,
                className: 'custom-popup'
            }
        )
        .bindTooltip('🇻🇳 Hoàng Sa (Việt Nam)', {
            permanent: false,
            direction: 'top',
            className: 'territory-tooltip'
        });
    
    // Marker Trường Sa
    L.marker(truongSaCoords, { icon: territoryIcon })
        .addTo(map)
        .bindPopup(
            '<div class="territory-popup">' +
            '<h4 style="margin: 0 0 8px 0; color: #dc2626; font-size: 1.1rem;">🏝️ Quần đảo Trường Sa</h4>' +
            '<p style="margin: 0; font-weight: 600; color: #059669;">Lãnh thổ Việt Nam 🇻🇳</p>' +
            '<p style="margin: 8px 0 0 0; font-size: 0.9rem; color: #64748b;">' +
            'Spratly Islands - Lãnh thổ Việt Nam từ thời xưa. Việt Nam đang kiểm soát 29 đảo và bãi đá.</p>' +
            '</div>',
            { 
                maxWidth: 300,
                className: 'custom-popup'
            }
        )
        .bindTooltip('🇻🇳 Trường Sa (Việt Nam)', {
            permanent: false,
            direction: 'top',
            className: 'territory-tooltip'
        });
}

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
    
    // Thêm markers cho Hoàng Sa và Trường Sa
    addVietnamTerritoryMarkers();
    
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
    
    // Ưu tiên ảnh local, fallback sang Unsplash nếu không có
    var imageUrl = caseData.imageUrl 
        ? caseData.imageUrl  // Local image
        : (caseData.imageQuery 
            ? 'https://source.unsplash.com/1600x900/?' + encodeURIComponent(caseData.imageQuery)
            : '');
    
    // Xác định nguồn ảnh để hiển thị credit
    var imageCredit = caseData.imageUrl ? '📸 Ảnh minh họa' : '📸 Ảnh từ Unsplash';
    
    var imageHTML = imageUrl 
        ? '<div class="case-image"><img src="' + imageUrl + '" alt="' + caseData.title + '" loading="lazy" onerror="this.parentElement.innerHTML=\'<div class=&quot;image-icon&quot; style=&quot;font-size: 8rem;&quot;>' + caseData.icon + '</div><div class=&quot;image-label&quot;>Không thể tải ảnh</div>\';"><div class="image-overlay"><span class="image-credit">' + imageCredit + '</span></div></div>'
        : '<div class="case-image-placeholder"><div class="image-icon" style="font-size: 8rem;">' + caseData.icon + '</div><div class="image-label">' + caseData.title + '</div></div>';
    
    analysisContent.innerHTML = '<h2 class="analysis-title">' + caseData.fullTitle + '</h2>' +
        '<div class="quick-info-box">' +
        '<div class="quick-info-item"><strong>📍 Địa điểm:</strong> ' + caseData.location + '</div>' +
        '<div class="quick-info-item"><strong>📅 Thời gian:</strong> ' + caseData.time + '</div>' +
        '<div class="quick-info-item keywords"><strong>🔑 Từ khóa lý thuyết:</strong><br>' + keywordTags + '</div>' +
        '</div>' +
        imageHTML +
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
