// ========================================
// SANDBOX: NGƯỜI CÂN BẰNG LỢI ÍCH - 12 THÁNG
// ========================================

// Game State
let gameState = {
    // Core Stats
    business: 50,      // LIKT Doanh nghiệp
    worker: 50,        // LIKT Người Lao động
    society: 50,       // LIKT Xã hội
    
    // Policy Sliders
    tax: 15,           // Thuế TNDN (%)
    wage: 50,          // Lương tối thiểu (0-100)
    environment: 50,   // Tiêu chuẩn môi trường (0-100)
    welfare: 50,       // Chi phúc lợi xã hội (0-100)
    
    // Game Progress
    currentMonth: 1,   // Tháng hiện tại (1-12)
    gameOver: false,
    eventHistory: []   // Lịch sử sự kiện đã xảy ra
};

// Ending Triggered Flag
let endingTriggered = false;

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
// PASSIVE EFFECTS (Monthly Impact)
// ========================================
function calculatePassiveEffects() {
    if (gameState.gameOver) return;
    
    let businessChange = 0;
    let workerChange = 0;
    let societyChange = 0;
    
    // ==========================================
    // 1. TAX EFFECTS (Thuế TNDN)
    // ==========================================
    // Base: 15% (neutral)
    // Low (5-14%): DN +, XH -
    // High (16-30%): DN -, XH +
    
    const taxDiff = gameState.tax - 15;
    businessChange -= taxDiff * 1.5;      // DN giảm khi thuế cao
    societyChange += taxDiff * 1.2;       // XH tăng khi thuế cao (ngân sách)
    
    // ==========================================
    // 2. WAGE EFFECTS (Lương tối thiểu)
    // ==========================================
    // Base: 50 (neutral)
    // Low (0-40): NLĐ -, DN +
    // High (60-100): NLĐ +, DN -
    
    const wageDiff = (gameState.wage - 50) / 10; // Chia 10 để điều chỉnh tốc độ
    workerChange += wageDiff * 0.6;       // NLĐ tăng khi lương cao
    businessChange -= wageDiff * 0.4;     // DN giảm khi lương cao
    
    // ==========================================
    // 3. ENVIRONMENT EFFECTS (Tiêu chuẩn MT)
    // ==========================================
    // Base: 50 (neutral)
    // Low (0-40): DN +, XH -
    // High (60-100): XH +, DN -
    
    const envDiff = (gameState.environment - 50) / 10;
    societyChange += envDiff * 0.5;       // XH tăng khi MT tốt
    businessChange -= envDiff * 0.3;      // DN giảm (chi phí xử lý)
    workerChange += envDiff * 0.15;       // NLĐ tăng nhẹ (môi trường an toàn)
    
    // ==========================================
    // 4. WELFARE EFFECTS (Phúc lợi XH)
    // ==========================================
    // Base: 50 (neutral)
    // Low (0-40): NLĐ -, XH -
    // High (60-100): NLĐ +, XH +, DN -
    
    const welfareDiff = (gameState.welfare - 50) / 10;
    workerChange += welfareDiff * 0.5;    // NLĐ tăng (y tế, giáo dục)
    societyChange += welfareDiff * 0.4;   // XH tăng (an sinh)
    businessChange -= welfareDiff * 0.2;  // DN giảm nhẹ (gián tiếp qua thuế)
    
    // ==========================================
    // 5. APPLY CHANGES
    // ==========================================
    gameState.business += businessChange;
    gameState.worker += workerChange;
    gameState.society += societyChange;
    
    // Clamp values (0-100)
    gameState.business = Math.max(0, Math.min(100, gameState.business));
    gameState.worker = Math.max(0, Math.min(100, gameState.worker));
    gameState.society = Math.max(0, Math.min(100, gameState.society));
    
    // Return changes for display
    return {
        business: businessChange,
        worker: workerChange,
        society: societyChange
    };
}

// ========================================
// ADVANCE TO NEXT MONTH (Main Game Loop)
// ========================================
function advanceMonth() {
    if (gameState.gameOver || endingTriggered) return;
    
    // 1. Apply Passive Effects
    const changes = calculatePassiveEffects();
    updateAllDisplays();
    
    // Show changes notification
    showMonthlyChanges(changes);
    
    // 2. Check Game Over
    if (checkGameOver()) {
        return; // Game đã kết thúc
    }
    
    // 3. Advance Month Counter
    gameState.currentMonth++;
    updateMonthDisplay();
    
    // 4. Check for Events (Even months: 2, 4, 6, 8, 10, 12)
    if (gameState.currentMonth % 2 === 0 && gameState.currentMonth <= 12) {
        setTimeout(() => {
            triggerEvent();
        }, 1500); // Delay 1.5s để người chơi thấy thay đổi
    }
    
    // 5. Check if Month 12 (Final Check)
    if (gameState.currentMonth > 12) {
        setTimeout(() => {
            checkFinalEnding();
        }, 1000);
    }
}

// ========================================
// GAME OVER CHECK
// ========================================
function checkGameOver() {
    // Nếu BẤT KỲ chỉ số nào < 10 → Game Over
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
// MONTH DISPLAY UPDATE
// ========================================
function updateMonthDisplay() {
    const monthElement = document.getElementById('currentMonth');
    if (monthElement) {
        monthElement.textContent = `Tháng ${gameState.currentMonth}/12`;
    }
}

// ========================================
// SHOW MONTHLY CHANGES
// ========================================
function showMonthlyChanges(changes) {
    const notification = document.getElementById('monthlyNotification');
    if (!notification) return;
    
    let html = `<div class="monthly-changes">`;
    html += `<h4>📊 Thay đổi tháng ${gameState.currentMonth}:</h4>`;
    
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
    
    // Auto hide after 3s
    setTimeout(() => {
        notification.style.display = 'none';
    }, 3000);
}

// ========================================
// CHECK ALL ENDINGS (PLACEHOLDER - Sẽ được thay thế)
// ========================================
function checkAllEndings() {
    if (endingTriggered) return; // Đã có ending được kích hoạt
    
    // Priority order: Chaos > Secret > Inflation > Capitalist/Socialist > Green
    
    // 1. CHAOS ENDING (Ưu tiên cao nhất - tình huống tồi tệ nhất)
    const isChaos = gameState.business <= 30 && 
                    gameState.worker <= 30 && 
                    gameState.society <= 30;
    
    if (isChaos) {
        startEndingTimer('chaos');
        return;
    } else {
        stopEndingTimer('chaos');
    }
    
    // 2. SECRET ENDING (Mục tiêu chính)
    const allGreen = gameState.business > 60 && 
                     gameState.worker > 60 && 
                     gameState.society > 60;
    
    if (allGreen && !isInGreenZone) {
        isInGreenZone = true;
        secretCountdown = 10;
        document.getElementById('secretTimer').style.display = 'flex';
        startSecretTimer();
    } else if (!allGreen && isInGreenZone) {
        isInGreenZone = false;
        stopSecretTimer();
        document.getElementById('secretTimer').style.display = 'none';
    }
    
    // 3. INFLATION ENDING (Lạm phát)
    const highPolicyCount = [
        gameState.tax >= 25,
        gameState.wage >= 80,
        gameState.environment >= 80,
        gameState.welfare >= 80
    ].filter(Boolean).length;
    
    const isInflation = highPolicyCount >= 3;
    
    if (isInflation) {
        startEndingTimer('inflation');
    } else {
        stopEndingTimer('inflation');
    }
    
    // 4. CAPITALIST ENDING (Thiên đường DN)
    const isCapitalist = gameState.business >= 80 && gameState.worker <= 30;
    
    if (isCapitalist) {
        startEndingTimer('capitalist');
    } else {
        stopEndingTimer('capitalist');
    }
    
    // 5. SOCIALIST ENDING (Thiên đường NLĐ)
    const isSocialist = gameState.worker >= 80 && gameState.business <= 30;
    
    if (isSocialist) {
        startEndingTimer('socialist');
    } else {
        stopEndingTimer('socialist');
    }
    
    // 6. GREEN ENDING (Phát triển bền vững)
    const isGreen = gameState.society >= 80 && gameState.environment >= 70;
    
    if (isGreen) {
        startEndingTimer('green');
    } else {
        stopEndingTimer('green');
    }
}

// ========================================
// ENDING TIMER MANAGEMENT
// ========================================
function startEndingTimer(endingType) {
    const ending = endingTimers[endingType];
    
    if (ending.active) return; // Đã đang đếm ngược
    
    ending.active = true;
    ending.countdown = endingType === 'capitalist' || endingType === 'socialist' || endingType === 'chaos' ? 3 : 5;
    
    ending.timer = setInterval(function() {
        ending.countdown--;
        
        if (ending.countdown <= 0) {
            clearInterval(ending.timer);
            ending.timer = null;
            ending.active = false;
            showEnding(endingType);
        }
    }, 1000);
}

function stopEndingTimer(endingType) {
    const ending = endingTimers[endingType];
    
    if (ending.timer) {
        clearInterval(ending.timer);
        ending.timer = null;
    }
    
    ending.active = false;
    ending.countdown = endingType === 'capitalist' || endingType === 'socialist' || endingType === 'chaos' ? 3 : 5;
}

// ========================================
// SECRET ENDING (Original)
// ========================================
function startSecretTimer() {
    if (secretTimer) clearInterval(secretTimer);
    
    secretTimer = setInterval(function() {
        secretCountdown--;
        document.getElementById('timerCount').textContent = secretCountdown;

        if (secretCountdown <= 0) {
            stopSecretTimer();
            showEnding('secret');
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
// SHOW ENDING MODAL
// ========================================
function showEnding(endingType) {
    endingTriggered = true;
    
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
    
    // Update modal theme
    const modalContent = modal.querySelector('.modal-content');
    modalContent.className = 'modal-content ending-content ' + endingType + '-ending';
    
    // Show modal
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
    
    // Create confetti for positive endings
    if (['secret', 'green'].includes(endingType)) {
        createConfetti();
    }
    
    // Hide timer
    document.getElementById('secretTimer').style.display = 'none';
}

function getEndingData(endingType) {
    const endings = {
        secret: {
            icon: '🏆',
            title: 'CHÚC MỪNG!',
            subtitle: 'BẠN ĐÃ ĐẠT ĐƯỢC SỰ HÀI HÒA!',
            message: `
                <p class="ending-intro"><strong>Bạn đã khám phá ra bí mật của người quản lý vĩ mô!</strong></p>
                <div class="theory-box-ending">
                    <p>Trong <strong>Kinh tế Chính trị Mác-Lênin</strong>, <em>mâu thuẫn lợi ích</em> 
                    là <strong>tất yếu, khách quan</strong>. Không thể có một xã hội mà LIKT Doanh nghiệp 
                    (Lợi nhuận) và LIKT Người Lao động (Thu nhập) cùng đạt 100 điểm, vì chúng 
                    <strong>mâu thuẫn trong phân phối</strong>.</p>
                    <p>Vai trò của <strong>Nhà nước</strong> (Phương thức 2) không phải là "xóa bỏ" mâu thuẫn, 
                    mà là <strong class="highlight">"HÀI HÒA"</strong> chúng.</p>
                    <p>Bạn đã thành công giữ các lợi ích ở trạng thái <strong>cân bằng động</strong>, 
                    nơi không ai bị bỏ lại, không ai phá vỡ hệ thống.</p>
                    <p class="final-message">🎯 Bạn chính là một <strong>Nhà Cân bằng Lợi ích</strong>!</p>
                </div>
            `
        },
        capitalist: {
            icon: '💰',
            title: 'THIÊN ĐƯỜNG DOANH NGHIỆP',
            subtitle: 'Bạn đã tạo ra một nền kinh tế tư bản chủ nghĩa thuần túy',
            message: `
                <p class="ending-intro"><strong>Doanh nghiệp thịnh vượng, nhưng người lao động đói khổ...</strong></p>
                <div class="theory-box-ending warning">
                    <p>Bạn đã ưu tiên <strong>lợi ích Doanh nghiệp</strong> quá mức, dẫn đến:</p>
                    <ul>
                        <li>💸 <strong>Bóc lột giá trị thặng dư:</strong> NLĐ làm việc nhưng không được hưởng thành quả</li>
                        <li>⚔️ <strong>Mâu thuẫn giai cấp gay gắt:</strong> Khoảng cách giàu - nghèo tăng vọt</li>
                        <li>💥 <strong>Nguy cơ bất ổn:</strong> Đình công, biểu tình, bạo loạn xã hội</li>
                        <li>📉 <strong>Khủng hoảng dài hạn:</strong> NLĐ không có sức mua → DN cũng suy thoái</li>
                    </ul>
                    <p class="final-message">⚠️ <strong>Bài học:</strong> Không thể phát triển bền vững khi chỉ một bên được hưởng lợi!</p>
                </div>
            `
        },
        socialist: {
            icon: '⚒️',
            title: 'THIÊN ĐƯỜNG NGƯỜI LAO ĐỘNG',
            subtitle: 'Bạn đã bảo vệ NLĐ quá mức, làm DN sụp đổ',
            message: `
                <p class="ending-intro"><strong>Người lao động được bảo vệ tốt, nhưng nền kinh tế đình trệ...</strong></p>
                <div class="theory-box-ending warning">
                    <p>Bạn đã ưu tiên <strong>lợi ích Người lao động</strong> quá mức, dẫn đến:</p>
                    <ul>
                        <li>📉 <strong>Doanh nghiệp phá sản hàng loạt:</strong> Chi phí quá cao, không thể cạnh tranh</li>
                        <li>🏭 <strong>Sản xuất đình trệ:</strong> Không có DN → Không có việc làm</li>
                        <li>💼 <strong>Thất nghiệp gia tăng:</strong> Nghịch lý: Bảo vệ NLĐ nhưng NLĐ mất việc</li>
                        <li>🌍 <strong>Đầu tư nước ngoài rút lui:</strong> Môi trường kinh doanh không hấp dẫn</li>
                    </ul>
                    <p class="final-message">⚠️ <strong>Bài học:</strong> Phải có DN phát triển thì mới có việc làm cho NLĐ!</p>
                </div>
            `
        },
        chaos: {
            icon: '💥',
            title: 'SỤP ĐỔ TOÀN DIỆN',
            subtitle: 'Khủng hoảng kinh tế - xã hội',
            message: `
                <p class="ending-intro"><strong>Chính sách thảm họa đã phá hủy toàn bộ nền kinh tế!</strong></p>
                <div class="theory-box-ending danger">
                    <p>Cả 3 nhóm lợi ích đều ở mức nguy hiểm. Hậu quả:</p>
                    <ul>
                        <li>🏭 <strong>DN phá sản hàng loạt:</strong> Không còn sản xuất, không còn thuế</li>
                        <li>💔 <strong>NLĐ thất nghiệp, đói nghèo:</strong> Không có thu nhập, không có tương lai</li>
                        <li>🔥 <strong>Xã hội hỗn loạn:</strong> Biểu tình, bạo loạn, mất trật tự</li>
                        <li>💸 <strong>Nhà nước phá sản:</strong> Không có ngân sách, không thể điều hành</li>
                    </ul>
                    <p class="final-message">💀 <strong>Bài học:</strong> Đây là thảm họa khi Nhà nước thất bại trong vai trò điều tiết!</p>
                </div>
            `
        },
        inflation: {
            icon: '📉',
            title: 'LẠM PHÁT SIÊU CẤP',
            subtitle: 'Chi tiêu vượt thu → Tiền mất giá',
            message: `
                <p class="ending-intro"><strong>Bạn đã cố gắng làm hài lòng tất cả, nhưng...</strong></p>
                <div class="theory-box-ending warning">
                    <p>Khi <strong>tất cả chính sách đều cao</strong> (Thuế cao + Lương cao + Phúc lợi cao), dẫn đến:</p>
                    <ul>
                        <li>💸 <strong>Chi phí vượt ngân sách:</strong> Nhà nước phải in tiền để bù đắp</li>
                        <li>📈 <strong>Lạm phát tăng vọt:</strong> Tiền mất giá, giá cả tăng phi mã</li>
                        <li>💔 <strong>Cả 3 bên đều thiệt:</strong> DN lỗ, NLĐ nghèo (dù lương cao), XH hỗn loạn</li>
                        <li>🌍 <strong>Khủng hoảng kinh tế:</strong> Tương tự Venezuela, Zimbabwe</li>
                    </ul>
                    <p class="final-message">⚠️ <strong>Bài học:</strong> Không thể có bữa trưa miễn phí! Phải cân bằng giữa chi và thu.</p>
                </div>
            `
        },
        green: {
            icon: '🌍',
            title: 'NHÀ NƯỚC XANH',
            subtitle: 'Phát triển bền vững & An sinh xã hội',
            message: `
                <p class="ending-intro"><strong>Bạn đã tạo ra một xã hội bền vững, thân thiện với môi trường!</strong></p>
                <div class="theory-box-ending success">
                    <p>Bằng cách ưu tiên <strong>Xã hội & Môi trường</strong>, bạn đã đạt được:</p>
                    <ul>
                        <li>🌱 <strong>Môi trường trong lành:</strong> Không khí sạch, nước sạch, đất tốt</li>
                        <li>🏥 <strong>An sinh xã hội cao:</strong> Y tế, giáo dục, phúc lợi đầy đủ</li>
                        <li>📈 <strong>Phát triển dài hạn:</strong> Không hy sinh tương lai vì hiện tại</li>
                        <li>🌏 <strong>Gương mẫu quốc tế:</strong> Tương tự Bắc Âu, New Zealand</li>
                    </ul>
                    <p class="final-message">✅ <strong>Bài học:</strong> Phát triển bền vững là con đường đúng đắn cho tương lai!</p>
                </div>
            `
        }
    };
    
    return endings[endingType];
}

// ========================================
// CLOSE ENDING MODAL
// ========================================
function closeEndingModal() {
    const modal = document.getElementById('endingModal');
    modal.classList.remove('show');
    document.body.style.overflow = 'auto';
    
    // Reset ending state
    endingTriggered = false;
    isInGreenZone = false;
    secretCountdown = 10;
    
    // Stop all timers
    Object.keys(endingTimers).forEach(key => {
        stopEndingTimer(key);
    });
}

// ========================================
// CONFETTI ANIMATION
// ========================================
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

    // Reset secret timer and ending states
    endingTriggered = false;
    isInGreenZone = false;
    stopSecretTimer();
    document.getElementById('secretTimer').style.display = 'none';
    
    // Stop all ending timers
    Object.keys(endingTimers).forEach(key => {
        stopEndingTimer(key);
    });

    // Update displays
    updateAllDisplays();
}
