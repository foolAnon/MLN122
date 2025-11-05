// ========================================
// SANDBOX: 12 THÁNG - NGƯỜI CÂN BẰNG LỢI ÍCH
// ========================================

// ==========================================
// GAME STATE
// ==========================================
let gameState = {
    // Core Stats (0-100)
    business: 50,      // LIKT Doanh nghiệp
    worker: 50,        // LIKT Người Lao động
    society: 50,       // LIKT Xã hội
    
    // Policy Sliders
    tax: 15,           // Thuế TNDN (5-30%)
    wage: 50,          // Lương tối thiểu (0-100)
    environment: 50,   // Tiêu chuẩn môi trường (0-100)
    welfare: 50,       // Chi phúc lợi xã hội (0-100)
    
    // Game Progress
    currentMonth: 1,   // Tháng hiện tại (1-12)
    gameOver: false,
    endingTriggered: false,
    eventHistory: [],  // Lịch sử sự kiện
    lastEventMonth: 0  // Tháng của event cuối
};

// ==========================================
// EVENTS POOL
// ==========================================
const eventsPool = [
    // NEGATIVE EVENTS (Trigger when LIKT low)
    {
        id: 'strike',
        condition: (state) => state.worker < 35 && state.business > 50,
        type: 'negative',
        title: '⚠️ Đình công Lao động',
        description: 'Công nhân phản đối điều kiện làm việc kém và lương thấp. Họ yêu cầu cải thiện ngay lập tức.',
        choices: [
            {
                text: 'Đàm phán và tăng lương khẩn cấp',
                impact: { business: -5, worker: +8, society: +3 }
            },
            {
                text: 'Trấn áp và duy trì chính sách hiện tại',
                impact: { business: +2, worker: -8, society: -6 }
            }
        ]
    },
    {
        id: 'pollution',
        condition: (state) => state.society < 35 && state.environment < 40 && state.business > 55,
        type: 'negative',
        title: '🏭 Ô nhiễm Môi trường',
        description: 'Các nhà máy xả thải gây ô nhiễm nghiêm trọng. Người dân biểu tình yêu cầu siết chặt quy định.',
        choices: [
            {
                text: 'Đóng cửa các nhà máy vi phạm',
                impact: { business: -6, worker: -3, society: +8 }
            },
            {
                text: 'Cho phép hoạt động với điều kiện cải thiện dần',
                impact: { business: +3, worker: 0, society: -5 }
            }
        ]
    },
    {
        id: 'bankruptcy',
        condition: (state) => state.business < 35 && (state.worker < 50 || state.society < 50),
        type: 'negative',
        title: '📉 Doanh nghiệp Phá sản Hàng loạt',
        description: 'Chi phí kinh doanh quá cao khiến nhiều DN phải đóng cửa. Thất nghiệp gia tăng.',
        choices: [
            {
                text: 'Hỗ trợ khẩn cấp và giảm thuế tạm thời',
                impact: { business: +7, worker: +2, society: -3 }
            },
            {
                text: 'Để thị trường tự điều chỉnh',
                impact: { business: -3, worker: -5, society: -5 }
            }
        ]
    },
    {
        id: 'healthcare-crisis',
        condition: (state) => state.society < 40 && state.welfare < 35 && state.worker < 50,
        type: 'negative',
        title: '🏥 Khủng hoảng Y tế',
        description: 'Hệ thống y tế quá tải, người dân không được chăm sóc đầy đủ. Căng thẳng xã hội tăng cao.',
        choices: [
            {
                text: 'Đầu tư khẩn cấp vào y tế công',
                impact: { business: -3, worker: +5, society: +7 }
            },
            {
                text: 'Kêu gọi khu vực tư nhân hỗ trợ',
                impact: { business: +2, worker: -2, society: +3 }
            }
        ]
    },
    
    // POSITIVE EVENTS (Trigger when LIKT high - REQUIRE MULTIPLE CONDITIONS)
    {
        id: 'fdi',
        condition: (state) => state.business > 65 && state.worker > 45 && state.society > 40,
        type: 'positive',
        title: '🌟 Thu hút Đầu tư Nước ngoài (FDI)',
        description: 'Môi trường kinh doanh thuận lợi và lực lượng lao động ổn định thu hút các tập đoàn đa quốc gia. Nhưng nếu NLĐ quá thấp, họ sẽ e dè.',
        choices: [
            {
                text: 'Chấp nhận với ưu đãi thuế',
                impact: { business: +8, worker: +5, society: -2 }
            },
            {
                text: 'Đàm phán với điều kiện bảo vệ môi trường',
                impact: { business: +5, worker: +3, society: +6 }
            }
        ]
    },
    {
        id: 'innovation',
        condition: (state) => state.worker > 60 && state.society > 55 && state.business > 50,
        type: 'positive',
        title: '💡 Bùng nổ Đổi mới Sáng tạo',
        description: 'Nguồn nhân lực chất lượng cao, môi trường thuận lợi và DN phát triển tạo điều kiện cho startup đổi mới.',
        choices: [
            {
                text: 'Đầu tư mạnh vào hệ sinh thái startup',
                impact: { business: +6, worker: +6, society: +5 }
            },
            {
                text: 'Để phát triển tự nhiên, không can thiệp',
                impact: { business: +3, worker: +3, society: +2 }
            }
        ]
    },
    {
        id: 'export-boom',
        condition: (state) => state.business > 60 && state.worker > 50 && state.society > 45,
        type: 'positive',
        title: '📈 Xuất khẩu Tăng trưởng Mạnh',
        description: 'Sản phẩm chất lượng cao và môi trường ổn định được thị trường quốc tế đánh giá cao. Đơn hàng tăng vọt.',
        choices: [
            {
                text: 'Mở rộng sản xuất và tuyển thêm lao động',
                impact: { business: +7, worker: +6, society: +3 }
            },
            {
                text: 'Giữ quy mô ổn định, tập trung chất lượng',
                impact: { business: +5, worker: +2, society: +5 }
            }
        ]
    },
    {
        id: 'green-award',
        condition: (state) => state.society > 65 && state.environment > 60 && state.business > 50,
        type: 'positive',
        title: '🌍 Nhận Giải thưởng Quốc tế về Môi trường',
        description: 'Nỗ lực phát triển bền vững được công nhận. Du lịch và đầu tư xanh tăng, nhưng cần DN phát triển để duy trì.',
        choices: [
            {
                text: 'Tăng cường tiêu chuẩn môi trường',
                impact: { business: -3, worker: +3, society: +8 }
            },
            {
                text: 'Duy trì hiện trạng, quảng bá hình ảnh',
                impact: { business: +5, worker: +2, society: +6 }
            }
        ]
    },
    
    // NEUTRAL EVENTS (Fallback - Always available)
    {
        id: 'natural-disaster',
        condition: (state) => true,
        type: 'neutral',
        title: '🌊 Thiên tai Bất ngờ',
        description: 'Lũ lụt nghiêm trọng gây thiệt hại lớn cho cơ sở hạ tầng và nông nghiệp.',
        choices: [
            {
                text: 'Huy động nguồn lực cứu trợ ngay lập tức',
                impact: { business: -6, worker: +3, society: +7 }
            },
            {
                text: 'Chờ hỗ trợ quốc tế, tiết kiệm ngân sách',
                impact: { business: -2, worker: -3, society: -5 }
            }
        ]
    },
    {
        id: 'global-recession',
        condition: (state) => true,
        type: 'neutral',
        title: '🌐 Suy thoái Kinh tế Toàn cầu',
        description: 'Khủng hoảng tài chính lan rộng. Xuất khẩu giảm, đầu tư rút lui.',
        choices: [
            {
                text: 'Chi tiêu công kích thích nội địa',
                impact: { business: +3, worker: +5, society: -3 }
            },
            {
                text: 'Thắt chặt chi tiêu, chờ bão qua',
                impact: { business: -5, worker: -6, society: -3 }
            }
        ]
    },
    {
        id: 'policy-review',
        condition: (state) => true,
        type: 'neutral',
        title: '📋 Rà soát Chính sách',
        description: 'Đến kỳ rà soát chính sách vĩ mô. Cần điều chỉnh để phù hợp với tình hình hiện tại.',
        choices: [
            {
                text: 'Điều chỉnh nhẹ theo hướng cân bằng',
                impact: { business: +2, worker: +2, society: +2 }
            },
            {
                text: 'Giữ nguyên chính sách hiện tại',
                impact: { business: 0, worker: 0, society: 0 }
            }
        ]
    },
    
    // NEW NEGATIVE EVENTS (Require multiple conditions)
    {
        id: 'corruption-scandal',
        condition: (state) => state.society < 40 && state.business > 65 && state.worker < 50,
        type: 'negative',
        title: '💰 Bê bối Tham nhũng',
        description: 'Phát hiện tham nhũng trong các dự án công. Người dân mất niềm tin, DN bị ảnh hưởng.',
        choices: [
            {
                text: 'Điều tra nghiêm minh và xử lý công khai',
                impact: { business: -3, worker: 0, society: +6 }
            },
            {
                text: 'Che giấu và ổn định tạm thời',
                impact: { business: +2, worker: -2, society: -7 }
            }
        ]
    },
    {
        id: 'housing-crisis',
        condition: (state) => state.worker < 40 && state.business > 60 && state.society < 50,
        type: 'negative',
        title: '🏠 Khủng hoảng Nhà ở',
        description: 'Giá nhà tăng vọt, người lao động không thể mua nhà. Căng thẳng xã hội gia tăng.',
        choices: [
            {
                text: 'Đầu tư nhà ở xã hội và kiểm soát giá',
                impact: { business: -5, worker: +7, society: +5 }
            },
            {
                text: 'Để thị trường tự điều chỉnh',
                impact: { business: +3, worker: -6, society: -5 }
            }
        ]
    },
    {
        id: 'trade-war',
        condition: (state) => state.business > 60 && (state.worker < 50 || state.society < 50),
        type: 'negative',
        title: '⚔️ Chiến tranh Thương mại',
        description: 'Đối tác thương mại lớn áp thuế quan. Xuất khẩu bị ảnh hưởng. Môi trường không ổn định làm tình hình tồi tệ hơn.',
        choices: [
            {
                text: 'Đàm phán và đa dạng hóa thị trường',
                impact: { business: -3, worker: -2, society: +1 }
            },
            {
                text: 'Trả đũa và bảo hộ nội địa',
                impact: { business: -7, worker: -5, society: -3 }
            }
        ]
    },
    {
        id: 'education-crisis',
        condition: (state) => state.society < 45 && state.welfare < 40 && state.worker < 50,
        type: 'negative',
        title: '📚 Khủng hoảng Giáo dục',
        description: 'Hệ thống giáo dục thiếu đầu tư. Chất lượng đào tạo giảm, lao động thiếu kỹ năng.',
        choices: [
            {
                text: 'Đầu tư mạnh vào giáo dục công',
                impact: { business: -3, worker: +6, society: +7 }
            },
            {
                text: 'Khuyến khích giáo dục tư nhân',
                impact: { business: +2, worker: -3, society: +2 }
            }
        ]
    },
    
    // NEW POSITIVE EVENTS (Require multiple conditions)
    {
        id: 'tech-innovation',
        condition: (state) => state.business > 60 && state.worker > 55 && state.society > 45,
        type: 'positive',
        title: '🚀 Cách mạng Công nghệ',
        description: 'Các startup công nghệ đột phá, tạo ra nhiều việc làm mới. Cần cả DN phát triển, lao động chất lượng và môi trường ổn định.',
        choices: [
            {
                text: 'Hỗ trợ hệ sinh thái khởi nghiệp',
                impact: { business: +7, worker: +6, society: +3 }
            },
            {
                text: 'Điều chỉnh quy định để bảo vệ lao động truyền thống',
                impact: { business: +3, worker: +2, society: +5 }
            }
        ]
    },
    {
        id: 'tourism-boom',
        condition: (state) => state.society > 65 && state.environment > 60 && state.business > 50,
        type: 'positive',
        title: '✈️ Bùng nổ Du lịch',
        description: 'Môi trường sạch, an toàn và cơ sở hạ tầng tốt thu hút du khách quốc tế. Kinh tế dịch vụ phát triển.',
        choices: [
            {
                text: 'Mở rộng cơ sở hạ tầng du lịch',
                impact: { business: +8, worker: +7, society: +5 }
            },
            {
                text: 'Phát triển bền vững, giữ nguyên quy mô',
                impact: { business: +5, worker: +3, society: +8 }
            }
        ]
    },
    {
        id: 'health-improvement',
        condition: (state) => state.welfare > 60 && state.society > 60 && state.worker > 50,
        type: 'positive',
        title: '💊 Cải thiện Sức khỏe Công cộng',
        description: 'Đầu tư vào y tế phát huy hiệu quả. Tuổi thọ tăng, năng suất lao động tăng. Cần lao động khỏe mạnh để duy trì.',
        choices: [
            {
                text: 'Mở rộng chương trình y tế phòng ngừa',
                impact: { business: +5, worker: +7, society: +6 }
            },
            {
                text: 'Tập trung vào điều trị chuyên sâu',
                impact: { business: +3, worker: +5, society: +5 }
            }
        ]
    },
    {
        id: 'infrastructure-upgrade',
        condition: (state) => state.business > 55 && state.tax > 12 && state.society > 45,
        type: 'positive',
        title: '🏗️ Nâng cấp Hạ tầng',
        description: 'Đầu tư vào đường sá, cảng biển, mạng lưới viễn thông tạo động lực tăng trưởng. Cần ngân sách và môi trường ổn định.',
        choices: [
            {
                text: 'Đầu tư lớn, vay nợ quốc tế',
                impact: { business: +10, worker: +6, society: +3 }
            },
            {
                text: 'Đầu tư vừa phải, cân đối ngân sách',
                impact: { business: +6, worker: +5, society: +6 }
            }
        ]
    },
    
    // NEW NEUTRAL/COMPLEX EVENTS (Time-based with conditions)
    {
        id: 'aging-population',
        condition: (state) => state.currentMonth > 6 && state.society < 60,
        type: 'neutral',
        title: '👴 Dân số Già hóa',
        description: 'Tỷ lệ người cao tuổi tăng. Áp lực lên hệ thống hưu trí và y tế.',
        choices: [
            {
                text: 'Tăng tuổi nghỉ hưu và khuyến khích lao động',
                impact: { business: +3, worker: -3, society: -2 }
            },
            {
                text: 'Tăng chi phúc lợi cho người già',
                impact: { business: -5, worker: +2, society: +6 }
            }
        ]
    },
    {
        id: 'climate-change',
        condition: (state) => state.currentMonth > 4 && state.environment < 60,
        type: 'neutral',
        title: '🌡️ Biến đổi Khí hậu',
        description: 'Thời tiết cực đoan ảnh hưởng đến nông nghiệp và cơ sở hạ tầng.',
        choices: [
            {
                text: 'Đầu tư vào năng lượng tái tạo và thích ứng',
                impact: { business: -3, worker: +3, society: +7 }
            },
            {
                text: 'Tập trung vào phục hồi sau thiên tai',
                impact: { business: -5, worker: -2, society: +3 }
            }
        ]
    },
    {
        id: 'digital-transformation',
        condition: (state) => state.business > 50 && state.worker > 45 && state.currentMonth > 3,
        type: 'neutral',
        title: '💻 Chuyển đổi Số',
        description: 'Xu hướng số hóa tạo cơ hội và thách thức. Cần DN phát triển và lao động có kỹ năng.',
        choices: [
            {
                text: 'Hỗ trợ đào tạo lại lao động',
                impact: { business: +5, worker: +3, society: +5 }
            },
            {
                text: 'Bảo vệ các ngành truyền thống',
                impact: { business: -2, worker: +2, society: +3 }
            }
        ]
    },
    {
        id: 'currency-fluctuation',
        condition: (state) => (state.business > 60 || state.business < 40) && state.society < 60,
        type: 'neutral',
        title: '💱 Biến động Tỷ giá',
        description: 'Đồng tiền biến động mạnh do tình trạng kinh tế không ổn định. Ảnh hưởng đến xuất nhập khẩu và đầu tư.',
        choices: [
            {
                text: 'Can thiệp để ổn định tỷ giá',
                impact: { business: +3, worker: 0, society: -2 }
            },
            {
                text: 'Để thị trường tự điều chỉnh',
                impact: { business: -3, worker: -2, society: 0 }
            }
        ]
    }
];

// ==========================================
// INITIALIZATION
// ==========================================
document.addEventListener('DOMContentLoaded', function() {
    initializeSliders();
    updateAllDisplays();
    updateMonthDisplay();
    updateAdvanceButton();
});

// ==========================================
// SLIDER INITIALIZATION
// ==========================================
function initializeSliders() {
    // Tax Slider
    const taxSlider = document.getElementById('taxSlider');
    taxSlider.addEventListener('input', function() {
        gameState.tax = parseInt(this.value);
        document.getElementById('taxValue').textContent = this.value;
    });

    // Wage Slider
    const wageSlider = document.getElementById('wageSlider');
    wageSlider.addEventListener('input', function() {
        gameState.wage = parseInt(this.value);
        updateWageLabel(this.value);
    });

    // Environment Slider
    const envSlider = document.getElementById('envSlider');
    envSlider.addEventListener('input', function() {
        gameState.environment = parseInt(this.value);
        updateEnvLabel(this.value);
    });

    // Welfare Slider
    const welfareSlider = document.getElementById('welfareSlider');
    welfareSlider.addEventListener('input', function() {
        gameState.welfare = parseInt(this.value);
        updateWelfareLabel(this.value);
    });
}

// ==========================================
// LABEL UPDATES
// ==========================================
function updateWageLabel(value) {
    const labels = ['Rất thấp', 'Thấp', 'Thấp', 'Thấp', 'Trung bình', 
                    'Trung bình', 'Khá cao', 'Cao', 'Cao', 'Rất cao', 'Rất cao'];
    const index = Math.floor(value / 10);
    document.getElementById('wageLabel').textContent = labels[index];
}

function updateEnvLabel(value) {
    const labels = ['Rất lỏng lẻo', 'Lỏng lẻo', 'Lỏng lẻo', 'Lỏng lẻo', 'Trung bình', 
                    'Trung bình', 'Khá nghiêm', 'Nghiêm ngặt', 'Nghiêm ngặt', 'Rất nghiêm', 'Rất nghiêm'];
    const index = Math.floor(value / 10);
    document.getElementById('envLabel').textContent = labels[index];
}

function updateWelfareLabel(value) {
    const labels = ['Rất thấp', 'Thấp', 'Thấp', 'Thấp', 'Trung bình', 
                    'Trung bình', 'Khá cao', 'Cao', 'Cao', 'Rất cao', 'Rất cao'];
    const index = Math.floor(value / 10);
    document.getElementById('welfareLabel').textContent = labels[index];
}

// ==========================================
// PASSIVE EFFECTS (Monthly Impact) - BALANCED
// ==========================================
function calculatePassiveEffects() {
    let businessChange = 0;
    let workerChange = 0;
    let societyChange = 0;
    
    // TAX EFFECTS (Base: 15%) - Giảm hệ số để cân bằng hơn
    const taxDiff = gameState.tax - 15;
    businessChange -= taxDiff * 0.7;      // DN giảm khi thuế cao (giảm từ 1.0)
    societyChange += taxDiff * 0.6;       // XH tăng khi thuế cao (giảm từ 0.8)
    // Thuế vừa phải có thể giúp đầu tư công, tăng nhẹ NLĐ
    if (taxDiff > 0 && taxDiff < 10) {
        workerChange += taxDiff * 0.15;   // Thuế vừa phải → đầu tư công → NLĐ tăng nhẹ
    }
    
    // WAGE EFFECTS (Base: 50) - Cân bằng hơn
    const wageDiff = (gameState.wage - 50) / 10;
    workerChange += wageDiff * 0.6;       // NLĐ tăng khi lương cao (giảm từ 0.8)
    businessChange -= wageDiff * 0.4;     // DN giảm khi lương cao (giảm từ 0.5)
    // Lương cao → tiêu dùng tăng → DN có thể tăng nhẹ
    if (wageDiff > 0 && wageDiff < 3) {
        businessChange += wageDiff * 0.1; // Lương vừa phải → tiêu dùng tăng → DN tăng nhẹ
    }
    
    // ENVIRONMENT EFFECTS (Base: 50) - Cân bằng hơn
    const envDiff = (gameState.environment - 50) / 10;
    societyChange += envDiff * 0.5;       // XH tăng khi MT tốt (giảm từ 0.6)
    businessChange -= envDiff * 0.3;      // DN giảm (chi phí xử lý) (giảm từ 0.4)
    workerChange += envDiff * 0.2;        // NLĐ tăng nhẹ (giữ nguyên)
    // Môi trường tốt → du lịch tăng → DN dịch vụ tăng
    if (envDiff > 2) {
        businessChange += envDiff * 0.1;  // MT tốt → du lịch → DN tăng nhẹ
    }
    
    // WELFARE EFFECTS (Base: 50) - Cân bằng hơn
    const welfareDiff = (gameState.welfare - 50) / 10;
    workerChange += welfareDiff * 0.5;    // NLĐ tăng (giảm từ 0.7)
    societyChange += welfareDiff * 0.4;   // XH tăng (giảm từ 0.5)
    businessChange -= welfareDiff * 0.2;  // DN giảm nhẹ (giảm từ 0.25)
    // Phúc lợi → sức khỏe tốt → năng suất tăng → DN tăng nhẹ
    if (welfareDiff > 0 && welfareDiff < 3) {
        businessChange += welfareDiff * 0.1; // Phúc lợi vừa phải → năng suất tăng
    }
    
    // POSITIVE FEEDBACK LOOP: Khi cả 3 LIKT ở vùng xanh (61-90)
    if (gameState.business >= 61 && gameState.business <= 90 &&
        gameState.worker >= 61 && gameState.worker <= 90 &&
        gameState.society >= 61 && gameState.society <= 90) {
        // Bonus nhỏ khi đã cân bằng
        businessChange += 0.3;
        workerChange += 0.3;
        societyChange += 0.3;
    }
    
    // NEGATIVE FEEDBACK LOOP: Khi LIKT quá thấp (< 30) hoặc quá cao (> 90)
    if (gameState.business < 30) {
        businessChange -= 0.5; // Tự động giảm thêm khi quá thấp
    }
    if (gameState.worker < 30) {
        workerChange -= 0.5;
    }
    if (gameState.society < 30) {
        societyChange -= 0.5;
    }
    
    // Quá cao cũng không tốt (có thể gây bất ổn)
    if (gameState.business > 90) {
        businessChange -= 0.3; // Tự điều chỉnh khi quá cao
    }
    if (gameState.worker > 90 || gameState.society > 90) {
        // Xã hội quá "bao cấp" có thể gây áp lực ngân sách
        if (gameState.tax < 10) {
            businessChange -= 0.5; // Ngân sách thiếu → DN bị ảnh hưởng
        }
    }
    
    // APPLY CHANGES
    gameState.business += businessChange;
    gameState.worker += workerChange;
    gameState.society += societyChange;
    
    // Clamp values (0-100)
    gameState.business = Math.max(0, Math.min(100, gameState.business));
    gameState.worker = Math.max(0, Math.min(100, gameState.worker));
    gameState.society = Math.max(0, Math.min(100, gameState.society));
    
    return {
        business: businessChange,
        worker: workerChange,
        society: societyChange
    };
}

// ==========================================
// ADVANCE MONTH (Main Game Loop)
// ==========================================
function advanceMonth() {
    console.log('🚀 advanceMonth called, current month:', gameState.currentMonth);
    
    if (gameState.gameOver || gameState.endingTriggered) {
        console.log('⚠️ Game already over, returning');
        return;
    }
    
    // DISABLE button immediately to prevent spam clicking
    const advanceBtn = document.getElementById('advanceBtn');
    if (advanceBtn) {
        advanceBtn.disabled = true;
        advanceBtn.style.opacity = '0.5';
    }
    
    // 1. Apply Passive Effects FIRST (for current month ending)
    const changes = calculatePassiveEffects();
    console.log('📊 Passive effects for month', gameState.currentMonth, ':', changes);
    updateAllDisplays();
    showMonthlyChanges(changes);
    
    // 2. Advance Month Counter AFTER applying effects
    gameState.currentMonth++;
    console.log('📅 Month advanced to:', gameState.currentMonth);
    
    // 3. Check if game ended (month > 12)
    if (gameState.currentMonth > 12) {
        console.log('🏁 Month > 12, checking final ending');
        setTimeout(() => {
            checkFinalEnding();
        }, 500);
        return;
    }
    
    // 4. Update UI
    updateMonthDisplay();
    updateAdvanceButton();
    
    // 5. Check Game Over after passive effects
    setTimeout(() => {
        if (checkGameOver()) {
            console.log('💀 Game Over triggered');
            return;
        }
        
        // 6. Show warnings if LIKT is low
        checkAndShowWarnings();
        
        // 7. Check for Events (Improved logic)
        // - Guaranteed events on even months (2, 4, 6, 8, 10, 12)
        // - Random chance on odd months (30% chance)
        // - Higher chance if LIKT is extreme (low or high)
        let shouldTriggerEvent = false;
        
        if (gameState.currentMonth <= 12) {
            if (gameState.currentMonth % 2 === 0) {
                // Even months: guaranteed event
                shouldTriggerEvent = true;
                console.log('🎲 Event month detected (even month), triggering event check');
            } else {
                // Odd months: 30% base chance
                let eventChance = 0.3;
                
                // Increase chance if LIKT is extreme
                if (gameState.business < 30 || gameState.worker < 30 || gameState.society < 30) {
                    eventChance = 0.6; // Higher chance for negative events
                } else if (gameState.business > 80 || gameState.worker > 80 || gameState.society > 80) {
                    eventChance = 0.5; // Higher chance for positive events
                }
                
                if (Math.random() < eventChance) {
                    shouldTriggerEvent = true;
                    console.log('🎲 Random event triggered on odd month (chance:', eventChance, ')');
                } else {
                    console.log('⏭️ No event this month (odd month, chance:', eventChance, ')');
                }
            }
        }
        
        if (shouldTriggerEvent) {
            triggerEvent();
        } else {
            // Re-enable button if no event
            enableAdvanceButton();
        }
    }, 1500); // Wait 1.5s for monthly notification
}

// ==========================================
// CHECK AND SHOW WARNINGS
// ==========================================
function checkAndShowWarnings() {
    const warnings = [];
    
    // Check each LIKT for warnings
    if (gameState.business < 30) {
        warnings.push({
            icon: '👔',
            text: 'LIKT Doanh nghiệp đang ở mức NGUY HIỂM! (< 30)',
            color: '#ef4444'
        });
    } else if (gameState.business < 40) {
        warnings.push({
            icon: '👔',
            text: 'LIKT Doanh nghiệp đang ở mức BẤT ỔN (< 40)',
            color: '#f59e0b'
        });
    }
    
    if (gameState.worker < 30) {
        warnings.push({
            icon: '👷',
            text: 'LIKT Người Lao động đang ở mức NGUY HIỂM! (< 30)',
            color: '#ef4444'
        });
    } else if (gameState.worker < 40) {
        warnings.push({
            icon: '👷',
            text: 'LIKT Người Lao động đang ở mức BẤT ỔN (< 40)',
            color: '#f59e0b'
        });
    }
    
    if (gameState.society < 30) {
        warnings.push({
            icon: '🏛️',
            text: 'LIKT Xã hội đang ở mức NGUY HIỂM! (< 30)',
            color: '#ef4444'
        });
    } else if (gameState.society < 40) {
        warnings.push({
            icon: '🏛️',
            text: 'LIKT Xã hội đang ở mức BẤT ỔN (< 40)',
            color: '#f59e0b'
        });
    }
    
    // Show warnings if any
    if (warnings.length > 0) {
        showWarningNotification(warnings);
    }
}

// ==========================================
// SHOW WARNING NOTIFICATION
// ==========================================
function showWarningNotification(warnings) {
    const notification = document.getElementById('monthlyNotification');
    if (!notification) return;
    
    let html = '<div class="warning-notification"><h4>⚠️ CẢNH BÁO:</h4>';
    warnings.forEach(warning => {
        html += '<div style="color: ' + warning.color + '; font-weight: 600; margin: 0.5rem 0;">' +
            warning.icon + ' ' + warning.text +
        '</div>';
    });
    html += '<div style="font-size: 0.9rem; color: #64748b; margin-top: 0.5rem;">' +
        '💡 Hãy điều chỉnh chính sách để tránh Game Over!' +
    '</div></div>';
    
    notification.innerHTML = html;
    notification.style.display = 'block';
    notification.style.borderLeft = '5px solid #ef4444';
    
    // Keep warning visible longer
    setTimeout(() => {
        if (notification.innerHTML.includes('CẢNH BÁO')) {
            notification.style.display = 'none';
        }
    }, 5000);
}

// ==========================================
// TRIGGER EVENT
// ==========================================
function triggerEvent() {
    console.log('🎲 Checking for events at month', gameState.currentMonth);
    console.log('Current state:', {
        business: gameState.business,
        worker: gameState.worker,
        society: gameState.society,
        environment: gameState.environment,
        welfare: gameState.welfare
    });
    
    // Find applicable events (not in history)
    const applicableEvents = eventsPool.filter(event => 
        event.condition(gameState) && 
        !gameState.eventHistory.includes(event.id)
    );
    
    console.log('Applicable events:', applicableEvents.length);
    
    // If no applicable events, try to find any event not in history
    let eventsToChooseFrom = applicableEvents;
    
    // GUARANTEE EVENT: If we're on an even month (2, 4, 6, 8, 10, 12), we MUST have an event
    if (eventsToChooseFrom.length === 0 && gameState.currentMonth % 2 === 0) {
        console.log('⚠️ No applicable events on even month, using fallback...');
        
        // Reset event history if all events have been used (keep last 3 events to avoid immediate repeat)
        if (gameState.eventHistory.length > 8) {
            gameState.eventHistory = gameState.eventHistory.slice(-3);
            eventsToChooseFrom = eventsPool.filter(event => 
                event.condition(gameState) && 
                !gameState.eventHistory.includes(event.id)
            );
        }
        
        // If still no events, use neutral fallback events that ALWAYS trigger
        if (eventsToChooseFrom.length === 0) {
            const fallbackEvents = eventsPool.filter(event => {
                try {
                    return event.type === 'neutral' && 
                           event.condition(gameState) && // Check if condition passes
                           !gameState.eventHistory.includes(event.id);
                } catch (e) {
                    return false;
                }
            });
            
            if (fallbackEvents.length > 0) {
                eventsToChooseFrom = fallbackEvents;
                console.log('✅ Using fallback neutral events:', fallbackEvents.length);
            } else {
                // Last resort: use any neutral event that can trigger (reset history for this event only)
                const allNeutral = eventsPool.filter(e => {
                    try {
                        return e.type === 'neutral' && e.condition(gameState);
                    } catch (e) {
                        return false;
                    }
                });
                
                if (allNeutral.length > 0) {
                    // Remove this event from history if it's there
                    const eventToUse = allNeutral[0];
                    gameState.eventHistory = gameState.eventHistory.filter(id => id !== eventToUse.id);
                    eventsToChooseFrom = [eventToUse];
                    console.log('✅ Using last resort fallback:', eventToUse.title);
                }
            }
        }
    }
    
    // For odd months, we can skip if no events (already handled in advanceMonth)
    if (eventsToChooseFrom.length === 0) {
        console.log('❌ No events available this month');
        // No event - re-enable button
        enableAdvanceButton();
        return;
    }
    
    // Prioritize events based on type and current state
    // Negative events have higher weight when LIKT is low
    // Positive events have higher weight when LIKT is high
    const weightedEvents = eventsToChooseFrom.map(event => {
        let weight = 1;
        
        if (event.type === 'negative') {
            // Higher weight if any LIKT is low
            if (gameState.business < 40 || gameState.worker < 40 || gameState.society < 40) {
                weight = 2;
            }
        } else if (event.type === 'positive') {
            // Higher weight if LIKT is high
            if (gameState.business > 65 || gameState.worker > 65 || gameState.society > 65) {
                weight = 2;
            }
        }
        
        return { event, weight };
    });
    
    // Select event based on weights
    const totalWeight = weightedEvents.reduce((sum, item) => sum + item.weight, 0);
    let random = Math.random() * totalWeight;
    
    let selectedEvent = weightedEvents[0].event; // fallback
    for (const item of weightedEvents) {
        random -= item.weight;
        if (random <= 0) {
            selectedEvent = item.event;
            break;
        }
    }
    
    console.log('✅ Event triggered:', selectedEvent.title, 'Type:', selectedEvent.type);
    gameState.lastEventMonth = gameState.currentMonth;
    
    // Show event modal (button stays disabled until user makes choice)
    showEventModal(selectedEvent);
}

// ==========================================
// SHOW EVENT MODAL
// ==========================================
function showEventModal(event) {
    const modal = document.getElementById('eventModal');
    const eventIcon = document.getElementById('eventIcon');
    const eventTitle = document.getElementById('eventTitle');
    const eventDesc = document.getElementById('eventDescription');
    const choicesContainer = document.getElementById('eventChoices');
    
    // Button already disabled in advanceMonth(), just keep it disabled
    console.log('📢 Event modal opening, button already disabled');
    
    // Set event type icon
    const icons = {
        'positive': '✨',
        'negative': '⚠️',
        'neutral': '📢'
    };
    eventIcon.textContent = icons[event.type] || '📢';
    
    // Set content
    eventTitle.textContent = event.title;
    eventDesc.textContent = event.description;
    
    // Create choice buttons
    choicesContainer.innerHTML = event.choices.map((choice, index) => `
        <button class="event-choice-btn" onclick="handleEventChoice('${event.id}', ${index})">
            <div class="choice-text">${choice.text}</div>
            <div class="choice-impact">
                ${formatImpact(choice.impact)}
            </div>
        </button>
    `).join('');
    
    // Show modal
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

// ==========================================
// FORMAT IMPACT
// ==========================================
function formatImpact(impact) {
    let html = '';
    if (impact.business !== 0) {
        const sign = impact.business > 0 ? '+' : '';
        html += `<span style="color: ${impact.business > 0 ? '#10b981' : '#ef4444'}">👔 ${sign}${impact.business}</span> `;
    }
    if (impact.worker !== 0) {
        const sign = impact.worker > 0 ? '+' : '';
        html += `<span style="color: ${impact.worker > 0 ? '#10b981' : '#ef4444'}">👷 ${sign}${impact.worker}</span> `;
    }
    if (impact.society !== 0) {
        const sign = impact.society > 0 ? '+' : '';
        html += `<span style="color: ${impact.society > 0 ? '#10b981' : '#ef4444'}">🏛️ ${sign}${impact.society}</span>`;
    }
    return html;
}

// ==========================================
// HANDLE EVENT CHOICE
// ==========================================
function handleEventChoice(eventId, choiceIndex) {
    const event = eventsPool.find(e => e.id === eventId);
    const choice = event.choices[choiceIndex];
    
    console.log('👆 User selected choice:', choiceIndex, choice.text);
    
    // Apply impact
    gameState.business += choice.impact.business;
    gameState.worker += choice.impact.worker;
    gameState.society += choice.impact.society;
    
    // Clamp values
    gameState.business = Math.max(0, Math.min(100, gameState.business));
    gameState.worker = Math.max(0, Math.min(100, gameState.worker));
    gameState.society = Math.max(0, Math.min(100, gameState.society));
    
    // Add to history
    gameState.eventHistory.push(eventId);
    
    // Update displays
    updateAllDisplays();
    
    // Close modal and RE-ENABLE advance button
    closeEventModal();
    
    // Check game over after event
    setTimeout(() => {
        checkGameOver();
    }, 500);
}

// ==========================================
// CLOSE EVENT MODAL
// ==========================================
function closeEventModal() {
    const modal = document.getElementById('eventModal');
    modal.classList.remove('show');
    document.body.style.overflow = 'auto';
    
    // RE-ENABLE ADVANCE BUTTON
    enableAdvanceButton();
    
    console.log('✅ Event modal closed, advance button re-enabled');
}

// ==========================================
// ENABLE ADVANCE BUTTON
// ==========================================
function enableAdvanceButton() {
    const advanceBtn = document.getElementById('advanceBtn');
    if (advanceBtn && !gameState.gameOver && !gameState.endingTriggered && gameState.currentMonth <= 12) {
        advanceBtn.disabled = false;
        advanceBtn.style.opacity = '1';
        advanceBtn.style.cursor = 'pointer';
        console.log('✅ Advance button enabled');
    }
}

// ==========================================
// GAME OVER CHECK
// ==========================================
function checkGameOver() {
    if (gameState.business < 10) {
        showEnding('bankruptcy');
        gameState.gameOver = true;
        return true;
    }
    
    if (gameState.worker < 10 || gameState.society < 10) {
        showEnding('social-unrest');
        gameState.gameOver = true;
        return true;
    }
    
    return false;
}

// ==========================================
// CHECK FINAL ENDING (Month 12)
// ==========================================
function checkFinalEnding() {
    // Secret Ending: All in green zone (61-90)
    if (gameState.business >= 61 && gameState.business <= 90 &&
        gameState.worker >= 61 && gameState.worker <= 90 &&
        gameState.society >= 61 && gameState.society <= 90) {
        showEnding('secret');
        return;
    }
    
    // Ending A: Capitalist (DN > 90, others < 50)
    if (gameState.business > 90 && 
        (gameState.worker < 50 || gameState.society < 50)) {
        showEnding('capitalist-wild');
        return;
    }
    
    // Ending B: Socialist (Worker/Society > 90, Business < 50)
    if ((gameState.worker > 90 || gameState.society > 90) && 
        gameState.business < 50) {
        showEnding('socialist-stagnant');
        return;
    }
    
    // Default Ending: Survived but not balanced
    showEnding('survived');
}

// ==========================================
// SHOW ENDING
// ==========================================
function showEnding(endingType) {
    gameState.endingTriggered = true;
    
    const modal = document.getElementById('endingModal');
    const endingData = getEndingData(endingType);
    
    // Update modal content
    document.getElementById('endingIcon').textContent = endingData.icon;
    document.getElementById('endingTitle').textContent = endingData.title;
    document.getElementById('endingSubtitle').textContent = endingData.subtitle;
    document.getElementById('endingMessage').innerHTML = endingData.message;
    
    // Update stats
    document.getElementById('finalBusiness').textContent = Math.round(gameState.business);
    document.getElementById('finalWorker').textContent = Math.round(gameState.worker);
    document.getElementById('finalSociety').textContent = Math.round(gameState.society);
    document.getElementById('finalMonth').textContent = gameState.currentMonth;
    
    // Update modal theme
    const modalContent = modal.querySelector('.modal-content');
    modalContent.className = 'modal-content ending-content ' + endingType + '-ending';
    
    // Show modal
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
    
    // Create confetti for positive endings
    if (['secret', 'survived'].includes(endingType)) {
        createConfetti();
    }
}

// ==========================================
// GET ENDING DATA
// ==========================================
function getEndingData(endingType) {
    const endings = {
        'secret': {
            icon: '🏆',
            title: 'CHÚC MỪNG!',
            subtitle: 'ĐIỂM HÀI HÒA BỀN VỮNG',
            message: `
                <p class="ending-intro"><strong>Bạn đã đạt được sự cân bằng hoàn hảo!</strong></p>
                <div class="theory-box-ending success">
                    <p>Trong 12 tháng điều hành, bạn đã thành công giữ cả 3 chỉ số LIKT trong vùng Xanh (61-90 điểm).</p>
                    <p>Theo <strong>Kinh tế Chính trị Mác-Lênin</strong>, vai trò của Nhà nước là <strong>HÀI HÒA</strong> các mâu thuẫn lợi ích, chứ không phải xóa bỏ chúng.</p>
                    <p>Bạn đã chứng minh rằng có thể tạo ra một nền kinh tế mà:</p>
                    <ul>
                        <li>💼 Doanh nghiệp phát triển bền vững</li>
                        <li>👷 Người lao động được đảm bảo quyền lợi</li>
                        <li>🏛️ Xã hội ổn định và tiến bộ</li>
                    </ul>
                    <p class="final-message">🎯 Bạn chính là <strong>Nhà Cân bằng Lợi ích Xuất sắc</strong>!</p>
                </div>
            `
        },
        'bankruptcy': {
            icon: '💔',
            title: 'GAME OVER',
            subtitle: 'Nền kinh tế Sụp đổ',
            message: `
                <p class="ending-intro"><strong>Doanh nghiệp phá sản hàng loạt!</strong></p>
                <div class="theory-box-ending danger">
                    <p>LIKT Doanh nghiệp < 10 điểm. Kết quả:</p>
                    <ul>
                        <li>🏭 Hầu hết DN đóng cửa</li>
                        <li>💼 Thất nghiệp gia tăng</li>
                        <li>📉 Không còn thu thuế</li>
                        <li>💸 Nhà nước không có ngân sách</li>
                    </ul>
                    <p class="final-message">💀 <strong>Bài học:</strong> Không có DN phát triển thì không có nền kinh tế!</p>
                </div>
            `
        },
        'social-unrest': {
            icon: '🔥',
            title: 'GAME OVER',
            subtitle: 'Bất ổn Xã hội',
            message: `
                <p class="ending-intro"><strong>Xã hội rơi vào hỗn loạn!</strong></p>
                <div class="theory-box-ending danger">
                    <p>LIKT Người Lao động hoặc Xã hội < 10 điểm. Hậu quả:</p>
                    <ul>
                        <li>⚔️ Biểu tình, đình công lan rộng</li>
                        <li>💔 Người dân mất niềm tin</li>
                        <li>🔥 Bạo loạn xã hội</li>
                        <li>📉 Nền kinh tế tê liệt</li>
                    </ul>
                    <p class="final-message">💀 <strong>Bài học:</strong> Bỏ mặc người dân sẽ dẫn đến thảm họa!</p>
                </div>
            `
        },
        'capitalist-wild': {
            icon: '💰',
            title: 'TƯ BẢN HOANG DÃ',
            subtitle: 'Ending A - Bóc lột Người lao động',
            message: `
                <p class="ending-intro"><strong>Doanh nghiệp thịnh vượng, nhưng với cái giá đắt...</strong></p>
                <div class="theory-box-ending warning">
                    <p>LIKT DN > 90 nhưng NLĐ/XH < 50. Đây là xã hội tư bản chủ nghĩa thuần túy:</p>
                    <ul>
                        <li>💸 Khoảng cách giàu nghèo cực lớn</li>
                        <li>⚔️ Mâu thuẫn giai cấp gay gắt</li>
                        <li>💔 Người lao động bị bóc lột</li>
                        <li>⚠️ Nguy cơ cách mạng xã hội</li>
                    </ul>
                    <p class="final-message">⚠️ <strong>Bài học Marx:</strong> Không thể phát triển bền vững khi chỉ một bên hưởng lợi!</p>
                </div>
            `
        },
        'socialist-stagnant': {
            icon: '⚒️',
            title: 'BAO CẤP TRÌ TRỆ',
            subtitle: 'Ending B - Doanh nghiệp Sụp đổ',
            message: `
                <p class="ending-intro"><strong>Người lao động được bảo vệ, nhưng nền kinh tế đình trệ...</strong></p>
                <div class="theory-box-ending warning">
                    <p>LIKT NLĐ/XH > 90 nhưng DN < 50. Hậu quả:</p>
                    <ul>
                        <li>🏭 Doanh nghiệp không thể cạnh tranh</li>
                        <li>📉 Sản xuất giảm sút</li>
                        <li>💼 Thất nghiệp gia tăng dài hạn</li>
                        <li>🌍 Đầu tư nước ngoài rút lui</li>
                    </ul>
                    <p class="final-message">⚠️ <strong>Bài học:</strong> Phải có DN phát triển mới có việc làm cho NLĐ!</p>
                </div>
            `
        },
        'survived': {
            icon: '✅',
            title: 'SỐ... SỐNG SÓT',
            subtitle: 'Kết thúc Mặc định',
            message: `
                <p class="ending-intro"><strong>Bạn đã sống sót qua 12 tháng, nhưng chưa đạt sự cân bằng...</strong></p>
                <div class="theory-box-ending">
                    <p>Các chỉ số LIKT chưa đạt trạng thái hài hòa (61-90 điểm cho cả 3).</p>
                    <p>Đây không phải là kết quả tồi, nhưng vẫn còn nhiều điều cần cải thiện:</p>
                    <ul>
                        <li>⚖️ Cần cân bằng lợi ích tốt hơn</li>
                        <li>📊 Một số chỉ số quá cao hoặc quá thấp</li>
                        <li>🎯 Hãy thử lại để đạt Secret Ending!</li>
                    </ul>
                    <p class="final-message">💡 <strong>Mẹo:</strong> Giữ cả 3 chỉ số trong khoảng 61-90 điểm!</p>
                </div>
            `
        }
    };
    
    return endings[endingType] || endings['survived'];
}

// ==========================================
// UPDATE DISPLAYS
// ==========================================
function updateAllDisplays() {
    document.getElementById('businessValue').textContent = Math.round(gameState.business);
    document.getElementById('workerValue').textContent = Math.round(gameState.worker);
    document.getElementById('societyValue').textContent = Math.round(gameState.society);
    
    updateBar('businessBar', gameState.business);
    updateBar('workerBar', gameState.worker);
    updateBar('societyBar', gameState.society);
    
    const harmonyScore = Math.round((gameState.business + gameState.worker + gameState.society) / 3);
    document.getElementById('harmonyScore').textContent = harmonyScore;
}

function updateBar(barId, value) {
    const bar = document.getElementById(barId);
    bar.style.width = value + '%';
    
    let zone = 'red';
    if (value > 60) zone = 'green';
    else if (value > 30) zone = 'yellow';
    
    bar.setAttribute('data-zone', zone);
}

function updateMonthDisplay() {
    const monthElement = document.getElementById('currentMonth');
    if (monthElement) {
        monthElement.textContent = `Tháng ${gameState.currentMonth}/12`;
    }
}

function updateAdvanceButton() {
    const btn = document.getElementById('advanceBtn');
    if (btn) {
        if (gameState.currentMonth > 12) {
            btn.textContent = '🏁 Kết thúc';
            btn.disabled = true;
        } else {
            btn.textContent = `➡️ Tiến qua Tháng ${gameState.currentMonth + 1}`;
        }
    }
}

// ==========================================
// SHOW MONTHLY CHANGES
// ==========================================
function showMonthlyChanges(changes) {
    const notification = document.getElementById('monthlyNotification');
    if (!notification) return;
    
    let html = `<div class="monthly-changes"><h4>📊 Thay đổi Tháng ${gameState.currentMonth}:</h4>`;
    
    if (changes.business !== 0) {
        const sign = changes.business > 0 ? '+' : '';
        const color = changes.business > 0 ? '#10b981' : '#ef4444';
        html += `<div style="color: ${color}">👔 DN: ${sign}${changes.business.toFixed(1)}đ</div>`;
    }
    
    if (changes.worker !== 0) {
        const sign = changes.worker > 0 ? '+' : '';
        const color = changes.worker > 0 ? '#10b981' : '#ef4444';
        html += `<div style="color: ${color}">👷 NLĐ: ${sign}${changes.worker.toFixed(1)}đ</div>`;
    }
    
    if (changes.society !== 0) {
        const sign = changes.society > 0 ? '+' : '';
        const color = changes.society > 0 ? '#10b981' : '#ef4444';
        html += `<div style="color: ${color}">🏛️ XH: ${sign}${changes.society.toFixed(1)}đ</div>`;
    }
    
    html += `</div>`;
    notification.innerHTML = html;
    notification.style.display = 'block';
    
    setTimeout(() => {
        notification.style.display = 'none';
    }, 3000);
}

// ==========================================
// CLOSE ENDING MODAL
// ==========================================
function closeEndingModal() {
    const modal = document.getElementById('endingModal');
    modal.classList.remove('show');
    document.body.style.overflow = 'auto';
}

// ==========================================
// RESET GAME
// ==========================================
function resetGame() {
    gameState = {
        business: 50,
        worker: 50,
        society: 50,
        tax: 15,
        wage: 50,
        environment: 50,
        welfare: 50,
        currentMonth: 1,
        gameOver: false,
        endingTriggered: false,
        eventHistory: [],
        lastEventMonth: 0
    };
    
    document.getElementById('taxSlider').value = 15;
    document.getElementById('wageSlider').value = 50;
    document.getElementById('envSlider').value = 50;
    document.getElementById('welfareSlider').value = 50;
    
    document.getElementById('taxValue').textContent = '15';
    updateWageLabel(50);
    updateEnvLabel(50);
    updateWelfareLabel(50);
    
    updateAllDisplays();
    updateMonthDisplay();
    updateAdvanceButton();
    
    closeEndingModal();
}

// ==========================================
// SHARE ACHIEVEMENT
// ==========================================
function shareAchievement() {
    const text = `🏆 Tôi đã hoàn thành 12 tháng trong Sandbox: Người Cân bằng Lợi ích!\n\n` +
                 `📊 Điểm số cuối cùng:\n` +
                 `👔 DN: ${Math.round(gameState.business)}đ\n` +
                 `👷 NLĐ: ${Math.round(gameState.worker)}đ\n` +
                 `🏛️ XH: ${Math.round(gameState.society)}đ\n\n` +
                 `Bạn có thể làm được không? 🎮`;

    if (navigator.share) {
        navigator.share({
            title: 'Người Cân bằng Lợi ích',
            text: text
        }).catch(err => console.log('Share cancelled'));
    } else {
        navigator.clipboard.writeText(text).then(() => {
            alert('✅ Đã copy thành tích vào clipboard!');
        });
    }
}

// ==========================================
// CONFETTI ANIMATION
// ==========================================
function createConfetti() {
    const container = document.getElementById('confetti');
    if (!container) return;
    
    container.innerHTML = '';
    const colors = ['#667eea', '#764ba2', '#10b981', '#f59e0b', '#ef4444'];
    
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'absolute';
        confetti.style.width = '10px';
        confetti.style.height = '10px';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.top = '-10px';
        confetti.style.opacity = Math.random();
        confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
        confetti.style.animation = `fall ${2 + Math.random() * 3}s linear ${Math.random() * 2}s infinite`;
        container.appendChild(confetti);
    }
}

// Add animation style
const style = document.createElement('style');
style.textContent = `
    @keyframes fall {
        to {
            transform: translateY(100vh) rotate(720deg);
        }
    }
`;
document.head.appendChild(style);
