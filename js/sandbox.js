// ========================================
// SANDBOX: NGƯỜI CÂN BẰNG LỢI ÍCH - LOGIC
// ========================================

// Game State
let gameState = {
    business: 50,      // LIKT Doanh nghiệp
    worker: 50,        // LIKT Người Lao động
    society: 50,       // LIKT Xã hội
    tax: 15,           // Thuế TNDN (%)
    wage: 50,          // Lương tối thiểu (0-100)
    environment: 50,   // Tiêu chuẩn môi trường (0-100)
    welfare: 50        // Chi phúc lợi xã hội (0-100)
};

// Secret Ending State
let secretTimer = null;
let secretCountdown = 10;
let isInGreenZone = false;

// ========================================
// INITIALIZATION
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    initializeSliders();
    updateAllDisplays();
});

// ========================================
// SLIDER INITIALIZATION
// ========================================
function initializeSliders() {
    // Tax Slider
    const taxSlider = document.getElementById('taxSlider');
    taxSlider.addEventListener('input', function() {
        gameState.tax = parseInt(this.value);
        document.getElementById('taxValue').textContent = this.value;
        calculateImpacts();
    });

    // Wage Slider
    const wageSlider = document.getElementById('wageSlider');
    wageSlider.addEventListener('input', function() {
        gameState.wage = parseInt(this.value);
        updateWageLabel(this.value);
        calculateImpacts();
    });

    // Environment Slider
    const envSlider = document.getElementById('envSlider');
    envSlider.addEventListener('input', function() {
        gameState.environment = parseInt(this.value);
        updateEnvLabel(this.value);
        calculateImpacts();
    });

    // Welfare Slider
    const welfareSlider = document.getElementById('welfareSlider');
    welfareSlider.addEventListener('input', function() {
        gameState.welfare = parseInt(this.value);
        updateWelfareLabel(this.value);
        calculateImpacts();
    });
}

// ========================================
// LABEL UPDATES
// ========================================
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

// ========================================
// IMPACT CALCULATION (CORE LOGIC)
// ========================================
function calculateImpacts() {
    // Reset to base values
    let business = 50;
    let worker = 50;
    let society = 50;

    // ==========================================
    // 1. DIRECT IMPACTS FROM EACH SLIDER
    // ==========================================
    
    // Tax Impact
    // Tăng thuế → DN giảm mạnh, XH tăng mạnh
    business -= (gameState.tax - 15) * 2;        // Mỗi % thuế tăng → DN -2đ
    society += (gameState.tax - 15) * 1.5;       // Mỗi % thuế tăng → XH +1.5đ

    // Wage Impact
    // Tăng lương → NLĐ tăng mạnh, DN giảm mạnh
    worker += (gameState.wage - 50) * 0.8;       // Lương tăng → NLĐ +0.8đ
    business -= (gameState.wage - 50) * 0.6;     // Lương tăng → DN -0.6đ

    // Environment Impact
    // Tăng tiêu chuẩn → XH tăng mạnh, DN giảm mạnh, NLĐ tăng nhẹ
    society += (gameState.environment - 50) * 0.7;   // Môi trường tốt → XH +0.7đ
    business -= (gameState.environment - 50) * 0.5;  // Chi phí xử lý → DN -0.5đ
    worker += (gameState.environment - 50) * 0.2;    // Môi trường an toàn → NLĐ +0.2đ

    // Welfare Impact
    // Tăng phúc lợi → NLĐ tăng mạnh, XH tăng mạnh, DN giảm nhẹ
    worker += (gameState.welfare - 50) * 0.6;        // Y tế giáo dục → NLĐ +0.6đ
    society += (gameState.welfare - 50) * 0.5;       // An sinh → XH +0.5đ
    business -= (gameState.welfare - 50) * 0.3;      // Gián tiếp qua thuế → DN -0.3đ

    // ==========================================
    // 2. CROSS IMPACTS (BẪY)
    // ==========================================
    
    // TRAP 1: "Triệt tiêu Động lực"
    // Nếu Thuế quá cao VÀ Lương quá cao → DN phá sản
    if (gameState.tax >= 25 && gameState.wage >= 70) {
        business = 0;  // DN phá sản
        worker -= 40;  // NLĐ mất việc
        society -= 30; // Bất ổn kinh tế
    }

    // TRAP 2: "Bất ổn Xã hội"
    // Nếu Lương thấp VÀ Phúc lợi thấp → NLĐ bất mãn
    if (gameState.wage <= 30 && gameState.welfare <= 30) {
        worker = Math.min(worker, 25);  // NLĐ bất mãn tối đa
        society -= 35;                  // Đình công, bất ổn
        business -= 15;                 // Năng suất giảm
    }

    // TRAP 3: "Hiệu ứng Lạm phát" (Bẫy 100 điểm)
    // Nếu TẤT CẢ chính sách đều cao → Lạm phát
    const highPolicyCount = [
        gameState.tax >= 25,
        gameState.wage >= 80,
        gameState.environment >= 80,
        gameState.welfare >= 80
    ].filter(Boolean).length;

    if (highPolicyCount >= 3) {
        // Chi phí vận hành > Thu ngân sách → Lạm phát
        business = Math.min(business, 55);  // Cả 3 bên đều giảm về vàng
        worker = Math.min(worker, 55);
        society = Math.min(society, 55);
    }

    // ==========================================
    // 3. SYNERGY BONUSES (Thưởng khi cân bằng)
    // ==========================================
    
    // Bonus: Nếu cả 3 chính sách ở mức trung bình (40-60)
    const moderatePolicies = [
        gameState.tax >= 12 && gameState.tax <= 20,
        gameState.wage >= 40 && gameState.wage <= 60,
        gameState.environment >= 40 && gameState.environment <= 60,
        gameState.welfare >= 40 && gameState.welfare <= 60
    ].filter(Boolean).length;

    if (moderatePolicies >= 3) {
        // Thưởng sự cân bằng
        business += 10;
        worker += 10;
        society += 10;
    }

    // ==========================================
    // 4. CLAMP VALUES (0-100)
    // ==========================================
    gameState.business = Math.max(0, Math.min(100, business));
    gameState.worker = Math.max(0, Math.min(100, worker));
    gameState.society = Math.max(0, Math.min(100, society));

    // ==========================================
    // 5. UPDATE UI
    // ==========================================
    updateAllDisplays();
    checkSecretEnding();
}

// ========================================
// UPDATE DISPLAYS
// ========================================
function updateAllDisplays() {
    // Update values
    document.getElementById('businessValue').textContent = Math.round(gameState.business);
    document.getElementById('workerValue').textContent = Math.round(gameState.worker);
    document.getElementById('societyValue').textContent = Math.round(gameState.society);

    // Update bars with smooth transition
    updateBar('businessBar', gameState.business);
    updateBar('workerBar', gameState.worker);
    updateBar('societyBar', gameState.society);

    // Update harmony score
    const harmonyScore = Math.round((gameState.business + gameState.worker + gameState.society) / 3);
    document.getElementById('harmonyScore').textContent = harmonyScore;
}

function updateBar(barId, value) {
    const bar = document.getElementById(barId);
    bar.style.width = value + '%';

    // Update color zone
    let zone = 'red';
    if (value > 60) zone = 'green';
    else if (value > 30) zone = 'yellow';
    
    bar.setAttribute('data-zone', zone);
}

// ========================================
// SECRET ENDING CHECK
// ========================================
function checkSecretEnding() {
    const allGreen = gameState.business > 60 && 
                     gameState.worker > 60 && 
                     gameState.society > 60;

    if (allGreen && !isInGreenZone) {
        // Bắt đầu đếm ngược
        isInGreenZone = true;
        secretCountdown = 10;
        document.getElementById('secretTimer').style.display = 'flex';
        startSecretTimer();
    } else if (!allGreen && isInGreenZone) {
        // Rời khỏi vùng xanh → Reset
        isInGreenZone = false;
        stopSecretTimer();
        document.getElementById('secretTimer').style.display = 'none';
    }
}

function startSecretTimer() {
    if (secretTimer) clearInterval(secretTimer);
    
    secretTimer = setInterval(function() {
        secretCountdown--;
        document.getElementById('timerCount').textContent = secretCountdown;

        if (secretCountdown <= 0) {
            stopSecretTimer();
            showSecretEnding();
        }
    }, 1000);
}

function stopSecretTimer() {
    if (secretTimer) {
        clearInterval(secretTimer);
        secretTimer = null;
    }
    secretCountdown = 10;
    document.getElementById('timerCount').textContent = '10';
}

// ========================================
// SECRET ENDING MODAL
// ========================================
function showSecretEnding() {
    const modal = document.getElementById('secretModal');
    
    // Update final stats
    document.getElementById('finalBusiness').textContent = Math.round(gameState.business);
    document.getElementById('finalWorker').textContent = Math.round(gameState.worker);
    document.getElementById('finalSociety').textContent = Math.round(gameState.society);

    // Show modal with animation
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';

    // Create confetti
    createConfetti();

    // Hide timer
    document.getElementById('secretTimer').style.display = 'none';
}

function closeSecretModal() {
    const modal = document.getElementById('secretModal');
    modal.classList.remove('show');
    document.body.style.overflow = 'auto';
    
    // Reset secret state
    isInGreenZone = false;
    secretCountdown = 10;
}

function createConfetti() {
    const container = document.getElementById('confetti');
    container.innerHTML = ''; // Clear old confetti

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
        
        const duration = 2 + Math.random() * 3;
        const delay = Math.random() * 2;
        
        confetti.style.animation = `fall ${duration}s linear ${delay}s infinite`;
        
        container.appendChild(confetti);
    }
}

// Add falling animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fall {
        to {
            transform: translateY(100vh) rotate(720deg);
        }
    }
`;
document.head.appendChild(style);

// ========================================
// SHARE ACHIEVEMENT
// ========================================
function shareAchievement() {
    const text = `🏆 Tôi đã đạt được sự Hài hòa trong Sandbox: Người Cân bằng Lợi ích!\n\n` +
                 `📊 Điểm số:\n` +
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
        // Fallback: Copy to clipboard
        navigator.clipboard.writeText(text).then(() => {
            alert('✅ Đã copy thành tích vào clipboard! Hãy chia sẻ với bạn bè!');
        });
    }
}

// ========================================
// RESET GAME
// ========================================
function resetGame() {
    // Reset state
    gameState = {
        business: 50,
        worker: 50,
        society: 50,
        tax: 15,
        wage: 50,
        environment: 50,
        welfare: 50
    };

    // Reset sliders
    document.getElementById('taxSlider').value = 15;
    document.getElementById('wageSlider').value = 50;
    document.getElementById('envSlider').value = 50;
    document.getElementById('welfareSlider').value = 50;

    // Reset labels
    document.getElementById('taxValue').textContent = '15';
    updateWageLabel(50);
    updateEnvLabel(50);
    updateWelfareLabel(50);

    // Reset secret timer
    isInGreenZone = false;
    stopSecretTimer();
    document.getElementById('secretTimer').style.display = 'none';

    // Update displays
    updateAllDisplays();
}
