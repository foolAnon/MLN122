// ========================================
// FORUM DEBATE DATA
// ========================================
const debates = {
    'minimum-wage-increase': {
        title: "Tăng lương tối thiểu 15%: Nên hay không?",
        intro: "Công đoàn đề xuất tăng lương tối thiểu 15% để bù đắp lạm phát và cải thiện đời sống người lao động. Tuy nhiên, Hiệp hội Doanh nghiệp cho rằng mức tăng này quá cao, chỉ nên tăng 6% phù hợp với tăng trưởng kinh tế. Vậy mức nào là hợp lý?",
        viewpoints: [
            {
                avatar: "👷",
                name: "Người lao động (Đại diện Công đoàn)",
                stance: "support",
                stanceText: "Ủng hộ tăng 15%",
                arguments: "Lý lẽ của người lao động",
                points: [
                    "<strong>Lạm phát cao:</strong> 3 năm qua giá cả tăng 15-18%, lương tối thiểu chỉ tăng 6-8%/năm → Thu nhập thực giảm",
                    "<strong>Chi phí sinh hoạt:</strong> Tiền nhà, điện nước, học phí con cái tăng mạnh → Lương hiện tại không đủ sống",
                    "<strong>Năng suất tăng:</strong> NLĐ làm việc chăm chỉ hơn, năng suất lao động tăng 10%/năm → Đáng được hưởng thành quả",
                    "<strong>So sánh khu vực:</strong> Lương tối thiểu VN vẫn thấp hơn Thái Lan, Malaysia → Cần tăng để theo kịp"
                ],
                interest: "Cải thiện đời sống, đảm bảo thu nhập đủ sống và có tiết kiệm"
            },
            {
                avatar: "👔",
                name: "Doanh nghiệp (Đại diện Hiệp hội DN)",
                stance: "oppose",
                stanceText: "Phản đối, chỉ nên tăng 6%",
                arguments: "Lý lẽ của doanh nghiệp",
                points: [
                    "<strong>Chi phí tăng đột biến:</strong> Tăng 15% → Chi phí nhân công tăng 300-500 triệu/DN nhỏ → Nhiều DN không chịu nổi",
                    "<strong>Tăng trưởng chậm:</strong> GDP chỉ tăng 6-7%, nhiều ngành suy giảm → Năng lực DN hạn chế",
                    "<strong>Cạnh tranh quốc tế:</strong> Chi phí lao động tăng → Mất lợi thế cạnh tranh → DN chuyển sang nước khác",
                    "<strong>Rủi ro thất nghiệp:</strong> Nếu tăng 15% → DN phải cắt giảm 20-30% nhân sự → NLĐ mất việc nhiều hơn"
                ],
                interest: "Kiểm soát chi phí, duy trì cạnh tranh và lợi nhuận"
            },
            {
                avatar: "🏛️",
                name: "Nhà nước (Hội đồng Tiền lương Quốc gia)",
                stance: "neutral",
                stanceText: "Đề xuất tăng 8-10%",
                arguments: "Quan điểm điều hòa",
                points: [
                    "<strong>Cân bằng lợi ích:</strong> Tăng 8-10% vừa giúp NLĐ cải thiện đời sống, vừa không quá gánh nặng cho DN",
                    "<strong>Căn cứ khoa học:</strong> Dựa trên lạm phát thực tế (4-5%), tăng trưởng GDP (6-7%) và năng suất lao động",
                    "<strong>Hỗ trợ DN:</strong> Song song với tăng lương, cần giảm thuế, hỗ trợ DN nâng cao năng suất",
                    "<strong>Bảo vệ NLĐ:</strong> Tăng lương phải đi kèm giám sát chặt chẽ để DN không trốn tránh, cắt giảm nhân sự"
                ],
                interest: "Ổn định xã hội, tăng trưởng bền vững, công bằng cho cả hai bên"
            }
        ],
        analysis: `
            <p><strong>Phân tích mâu thuẫn lợi ích:</strong></p>
            <p>
                Đây là mâu thuẫn điển hình giữa <strong>lợi ích người lao động</strong> (muốn tăng thu nhập) 
                và <strong>lợi ích doanh nghiệp</strong> (muốn kiểm soát chi phí). Cả hai bên đều có lý lẽ chính đáng:
            </p>
            <ul>
                <li><strong>NLĐ không sai:</strong> Họ cần lương cao hơn để sống, đặc biệt khi lạm phát tăng</li>
                <li><strong>DN không sai:</strong> Họ cần kiểm soát chi phí để tồn tại, đặc biệt trong bối cảnh kinh tế khó khăn</li>
                <li><strong>Nhà nước:</strong> Phải tìm "điểm vàng" cân bằng, không thể làm hài lòng tất cả nhưng phải công bằng nhất có thể</li>
            </ul>
            <p><strong>Bài học từ lý thuyết Mác:</strong></p>
            <p>
                Đây chính là <strong>mâu thuẫn giữa lao động và tư bản</strong> trong xã hội tư bản chủ nghĩa. 
                Tuy nhiên, trong cơ chế thị trường định hướng XHCN, Nhà nước đóng vai trò <strong>điều tiết</strong> 
                để tránh bóc lột quá đà, đồng thời khuyến khích phát triển kinh tế.
            </p>
            <p><strong>Giải pháp dài hạn:</strong></p>
            <ul>
                <li>Tăng năng suất lao động → Cả DN và NLĐ đều hưởng lợi</li>
                <li>Cải cách thuế, giảm chi phí cho DN → DN có thể tăng lương mà không mất cạnh tranh</li>
                <li>Đầu tư giáo dục, đào tạo → NLĐ có tay nghề cao → Lương tự nhiên tăng</li>
            </ul>
        `
    },
    'electric-price': {
        title: "Tăng giá điện sinh hoạt: Có hợp lý?",
        intro: "EVN liên tục báo lỗ và đề xuất tăng giá điện 8% để bù chi phí sản xuất. Tuy nhiên, người dân và nhiều chuyên gia cho rằng EVN lãng phí, kém hiệu quả và cần cải cách trước khi tăng giá. Vậy tăng giá điện có phải là giải pháp đúng đắn?",
        viewpoints: [
            {
                avatar: "⚡",
                name: "EVN (Tập đoàn Điện lực Việt Nam)",
                stance: "support",
                stanceText: "Cần tăng giá ngay",
                arguments: "Lý do của EVN",
                points: [
                    "<strong>Chi phí tăng:</strong> Giá than, khí đốt nhập khẩu tăng 20-30%, chi phí sản xuất điện tăng mạnh",
                    "<strong>Đầu tư lớn:</strong> Cần hàng chục nghìn tỷ để xây dựng nhà máy điện mới, nâng cấp lưới điện",
                    "<strong>Báo lỗ:</strong> EVN lỗ hàng năm, nợ ngân hàng hàng trăm nghìn tỷ → Không thể duy trì",
                    "<strong>Nguy cơ thiếu điện:</strong> Nếu không tăng giá → Không có vốn đầu tư → Thiếu điện nghiêm trọng"
                ],
                interest: "Đảm bảo tài chính, đủ nguồn lực đầu tư phát triển hệ thống điện"
            },
            {
                avatar: "🏠",
                name: "Người dân",
                stance: "oppose",
                stanceText: "Phản đối tăng giá",
                arguments: "Quan điểm người tiêu dùng",
                points: [
                    "<strong>Chi phí sinh hoạt tăng:</strong> Điện tăng → Tất cả hàng hóa, dịch vụ đều tăng giá → Đời sống khó khăn",
                    "<strong>EVN kém hiệu quả:</strong> Tỷ lệ thất thoát điện cao (8-9%), quản lý lỏng lẻo, lãng phí",
                    "<strong>Thiếu minh bạch:</strong> Cách tính giá điện không rõ ràng, người dân không biết tiền đi đâu",
                    "<strong>Độc quyền:</strong> EVN độc quyền → Không cạnh tranh → Không có động lực cải thiện hiệu quả"
                ],
                interest: "Giữ giá điện ổn định, EVN phải cải cách trước khi tăng giá"
            },
            {
                avatar: "📊",
                name: "Chuyên gia kinh tế",
                stance: "neutral",
                stanceText: "Có thể tăng nhưng có điều kiện",
                arguments: "Phân tích chuyên môn",
                points: [
                    "<strong>Cần cải cách EVN trước:</strong> Giảm thất thoát điện, cắt giảm chi phí lãng phí, tăng hiệu quả quản lý",
                    "<strong>Minh bạch hóa:</strong> Công khai công thức tính giá điện, báo cáo tài chính chi tiết",
                    "<strong>Tăng từng bước:</strong> Nếu tăng, chỉ nên tăng 3-4%/năm, không nên tăng đột biến",
                    "<strong>Phát triển năng lượng tái tạo:</strong> Đầu tư điện mặt trời, gió → Giảm phụ thuộc than, khí → Giảm chi phí dài hạn"
                ],
                interest: "Cải cách hệ thống điện, phát triển bền vững, công bằng cho người dân"
            }
        ],
        analysis: `
            <p><strong>Mâu thuẫn cốt lõi:</strong></p>
            <p>
                Đây là mâu thuẫn giữa <strong>độc quyền nhà nước</strong> (EVN) và <strong>quyền lợi người tiêu dùng</strong>. 
                Vấn đề không đơn thuần là tăng hay không tăng giá, mà là <strong>cơ chế quản lý và hiệu quả</strong> của một doanh nghiệp độc quyền.
            </p>
            <p><strong>Vấn đề nằm ở đâu?</strong></p>
            <ul>
                <li><strong>Thiếu cạnh tranh:</strong> EVN độc quyền → Không có áp lực cải thiện hiệu quả</li>
                <li><strong>Thiếu minh bạch:</strong> Cách tính giá điện phức tạp, người dân không hiểu</li>
                <li><strong>Lợi ích chéo:</strong> Nhà nước vừa là chủ sở hữu EVN, vừa là người điều tiết → Xung đột lợi ích</li>
            </ul>
            <p><strong>Giải pháp từ góc nhìn LIKT:</strong></p>
            <ul>
                <li><strong>Ngắn hạn:</strong> EVN phải công khai tài chính, cắt giảm lãng phí trước khi tăng giá</li>
                <li><strong>Trung hạn:</strong> Cải cách EVN, tách phát điện - truyền tải - phân phối để tạo cạnh tranh</li>
                <li><strong>Dài hạn:</strong> Phát triển năng lượng tái tạo, giảm chi phí sản xuất, ổn định giá điện</li>
            </ul>
        `
    },
    'tax-ecommerce': {
        title: "Đánh thuế shop online: Công bằng hay kìm hãm?",
        intro: "Nhà nước đề xuất bắt buộc các shop online phải đăng ký kinh doanh và nộp thuế như cửa hàng truyền thống. Nhiều người bán online phản đối cho rằng điều này sẽ kìm hãm thương mại điện tử, trong khi cửa hàng truyền thống ủng hộ vì cạnh tranh công bằng.",
        viewpoints: [
            {
                avatar: "🏛️",
                name: "Nhà nước (Cơ quan thuế)",
                stance: "support",
                stanceText: "Ủng hộ đánh thuế",
                arguments: "Lý do của Nhà nước",
                points: [
                    "<strong>Công bằng thuế:</strong> Cửa hàng truyền thống phải nộp thuế 20-25%, shop online trốn thuế → Không công bằng",
                    "<strong>Thất thoát ngân sách:</strong> Hàng năm thất thoát hàng chục nghìn tỷ đồng từ TMĐT → Cần quản lý",
                    "<strong>Bảo vệ người tiêu dùng:</strong> Shop đăng ký kinh doanh → Dễ quản lý, xử lý vi phạm, bảo vệ quyền lợi khách hàng",
                    "<strong>Xu hướng thế giới:</strong> Các nước đều đánh thuế TMĐT → VN cần theo kịp"
                ],
                interest: "Tăng thu ngân sách, đảm bảo công bằng, quản lý thị trường"
            },
            {
                avatar: "🛒",
                name: "Shop online (Người bán cá nhân)",
                stance: "oppose",
                stanceText: "Phản đối",
                arguments: "Lo ngại của shop online",
                points: [
                    "<strong>Chi phí tăng:</strong> Đăng ký kinh doanh, thuế, kế toán → Chi phí tăng 15-20% → Lợi nhuận giảm mạnh",
                    "<strong>Thủ tục phức tạp:</strong> Người bán nhỏ lẻ không có kiến thức thuế, kế toán → Khó thực hiện",
                    "<strong>Mất tính linh hoạt:</strong> Nhiều người bán chỉ kinh doanh nhỏ, phụ → Nếu phải đăng ký chính thức sẽ bỏ",
                    "<strong>Kìm hãm TMĐT:</strong> VN đang phát triển TMĐT → Đánh thuế quá sớm sẽ kìm hãm"
                ],
                interest: "Giảm chi phí, tránh thủ tục rườm rà, tự do kinh doanh"
            },
            {
                avatar: "🏪",
                name: "Cửa hàng truyền thống",
                stance: "support",
                stanceText: "Ủng hộ mạnh mẽ",
                arguments: "Quan điểm CH truyền thống",
                points: [
                    "<strong>Cạnh tranh không công bằng:</strong> CH truyền thống phải thuê mặt bằng, nộp thuế đầy đủ, shop online không → Bất công",
                    "<strong>Đóng cửa hàng loạt:</strong> Nhiều CH truyền thống phải đóng cửa vì thua giá với shop online",
                    "<strong>Yêu cầu công bằng:</strong> Nếu cùng bán hàng, phải cùng nộp thuế → Đúng luật",
                    "<strong>Bảo vệ việc làm:</strong> CH truyền thống tạo việc làm ổn định, đóng BHXH cho nhân viên"
                ],
                interest: "Cạnh tranh công bằng, bảo vệ mô hình kinh doanh truyền thống"
            }
        ],
        analysis: `
            <p><strong>Phân tích xung đột lợi ích:</strong></p>
            <p>
                Đây là cuộc đấu giữa <strong>mô hình kinh doanh mới</strong> (online) và <strong>cũ</strong> (truyền thống), 
                đồng thời là vấn đề <strong>công bằng thuế</strong> và <strong>quản lý nhà nước</strong>.
            </p>
            <ul>
                <li><strong>Shop online:</strong> Hưởng lợi từ chi phí thấp, linh hoạt → Muốn duy trì hiện trạng</li>
                <li><strong>CH truyền thống:</strong> Bị thiệt vì phải nộp thuế đầy đủ → Yêu cầu công bằng</li>
                <li><strong>Nhà nước:</strong> Mất nguồn thu, khó quản lý → Muốn kiểm soát</li>
                <li><strong>Người tiêu dùng:</strong> Hưởng lợi từ giá rẻ của online → Có thể bị ảnh hưởng nếu giá tăng</li>
            </ul>
            <p><strong>Giải pháp cân bằng:</strong></p>
            <ul>
                <li><strong>Phân cấp:</strong> Shop nhỏ (dưới 100 triệu/năm) được miễn, shop lớn phải nộp thuế</li>
                <li><strong>Đơn giản hóa:</strong> Thủ tục đăng ký và kê khai thuế phải đơn giản, online hóa</li>
                <li><strong>Hỗ trợ:</strong> Đào tạo miễn phí về thuế, kế toán cho người bán online</li>
                <li><strong>Công bằng:</strong> Áp dụng mức thuế thấp hơn cho giai đoạn đầu, tăng dần</li>
            </ul>
            <p><strong>Bài học LIKT:</strong> Công nghệ thay đổi cách kinh doanh → Nhà nước phải điều chỉnh luật chơi, 
            nhưng không được kìm hãm sự phát triển, đồng thời phải đảm bảo công bằng.</p>
        `
    },
    'healthcare-insurance': {
        title: "Tăng mức đóng BHYT: Gánh nặng hay đầu tư?",
        intro: "Bộ Y tế đề xuất tăng mức đóng BHYT từ 4.5% lên 6% lương cơ bản để cải thiện chất lượng khám chữa bệnh và mở rộng phúc lợi. Tuy nhiên, đề xuất này gặp phản ứng trái chiều từ người lao động và doanh nghiệp.",
        viewpoints: [
            {
                avatar: "🏥",
                name: "Bộ Y tế",
                stance: "support",
                stanceText: "Cần tăng ngay",
                arguments: "Lý do từ ngành Y tế",
                points: [
                    "<strong>Quỹ BHYT thiếu hụt:</strong> Hàng năm chi vượt thu hàng nghìn tỷ → Không bền vững",
                    "<strong>Cải thiện chất lượng:</strong> Cần nguồn lực để nâng cấp bệnh viện, mua thiết bị hiện đại",
                    "<strong>Mở rộng phúc lợi:</strong> Thêm nhiều dịch vụ vào gói BHYT, giảm chi tiêu túi cho người dân",
                    "<strong>So sánh quốc tế:</strong> Mức đóng 4.5% của VN thấp hơn nhiều nước (8-10%)"
                ],
                interest: "Đảm bảo nguồn lực cho y tế, nâng cao chất lượng khám chữa bệnh"
            },
            {
                avatar: "👷",
                name: "Người lao động",
                stance: "neutral",
                stanceText: "Có điều kiện",
                arguments: "Quan điểm chia rẽ",
                points: [
                    "<strong>Nhóm ủng hộ:</strong> Sẵn sàng đóng nhiều hơn nếu chất lượng khám chữa bệnh được cải thiện rõ rệt",
                    "<strong>Nhóm phản đối:</strong> Thu nhập thấp, tăng 1.5% cũng là gánh nặng, đặc biệt khi lương không tăng",
                    "<strong>Nghi ngờ:</strong> Quỹ BHYT thiếu do lãng phí, quản lý kém, không phải do thiếu tiền",
                    "<strong>Yêu cầu:</strong> Nếu tăng, phải cải thiện chất lượng bệnh viện, giảm quá tải, tăng thuốc trong danh mục"
                ],
                interest: "Chất lượng y tế tốt hơn nhưng chi phí hợp lý"
            },
            {
                avatar: "👔",
                name: "Doanh nghiệp",
                stance: "oppose",
                stanceText: "Phản đối",
                arguments: "Lo ngại của DN",
                points: [
                    "<strong>Chi phí tăng:</strong> DN phải đóng góp 3% (50% mức đóng) → Tăng lên 4% → Chi phí nhân công tăng",
                    "<strong>Gánh nặng kép:</strong> Vừa tăng lương tối thiểu, vừa tăng BHYT → DN nhỏ không chịu nổi",
                    "<strong>Giảm cạnh tranh:</strong> Chi phí lao động tăng → Giá thành sản phẩm tăng → Mất thị trường",
                    "<strong>Đề xuất:</strong> Nhà nước nên tài trợ thêm từ ngân sách thay vì tăng mức đóng"
                ],
                interest: "Kiểm soát chi phí, duy trì cạnh tranh"
            }
        ],
        analysis: `
            <p><strong>Mâu thuẫn lợi ích:</strong></p>
            <p>
                Đây là mâu thuẫn giữa <strong>đầu tư cho y tế công</strong> (lợi ích dài hạn) và 
                <strong>gánh nặng chi phí ngắn hạn</strong> (NLĐ và DN).
            </p>
            <ul>
                <li><strong>Ngành Y tế:</strong> Cần nguồn lực để phát triển, cải thiện dịch vụ</li>
                <li><strong>NLĐ:</strong> Muốn y tế tốt hơn nhưng lo chi phí tăng</li>
                <li><strong>DN:</strong> Không muốn thêm gánh nặng chi phí</li>
                <li><strong>Nhà nước:</strong> Vừa muốn phát triển y tế, vừa lo gánh nặng cho DN và NLĐ</li>
            </ul>
            <p><strong>Phân tích sâu:</strong></p>
            <p>
                Vấn đề không chỉ là tăng hay không tăng, mà là <strong>hiệu quả sử dụng quỹ BHYT</strong>. 
                Nếu quỹ được quản lý tốt, minh bạch, không lãng phí, người dân sẽ sẵn sàng đóng góp nhiều hơn.
            </p>
            <p><strong>Giải pháp từ góc nhìn LIKT:</strong></p>
            <ul>
                <li><strong>Cải cách quản lý:</strong> Minh bạch hóa quỹ BHYT, công khai thu chi, chống lãng phí</li>
                <li><strong>Tăng dần:</strong> Tăng 0.5%/năm thay vì tăng đột biến 1.5%</li>
                <li><strong>Cải thiện song song:</strong> Tăng mức đóng phải đi kèm cải thiện chất lượng khám chữa bệnh rõ rệt</li>
                <li><strong>Hỗ trợ DN nhỏ:</strong> Giảm thuế hoặc hỗ trợ khác để bù chi phí BHYT tăng</li>
            </ul>
        `
    }
};

// ========================================
// OPEN DEBATE
// ========================================
function openTopic(topicId) {
    const debate = debates[topicId];
    if (!debate) return;
    
    const modal = document.getElementById('debateModal');
    const debateBody = document.getElementById('debateBody');
    
    // Generate viewpoints HTML
    const viewpointsHTML = debate.viewpoints.map(vp => `
        <div class="viewpoint-card ${vp.stance}">
            <div class="viewpoint-header">
                <div class="viewpoint-avatar">${vp.avatar}</div>
                <div class="viewpoint-info">
                    <h4>${vp.name}</h4>
                    <span class="viewpoint-stance ${vp.stance}">${vp.stanceText}</span>
                </div>
            </div>
            <div class="viewpoint-content">
                <h5>${vp.arguments}</h5>
                <ul>
                    ${vp.points.map(point => `<li>${point}</li>`).join('')}
                </ul>
                <p style="margin-top: 1rem;"><strong>Lợi ích đằng sau:</strong> ${vp.interest}</p>
            </div>
        </div>
    `).join('');
    
    // Populate modal
    debateBody.innerHTML = `
        <div class="debate-header">
            <h2 class="debate-title">${debate.title}</h2>
            <p class="debate-intro">${debate.intro}</p>
        </div>
        
        <div class="viewpoints-section">
            <h3>🗣️ Các quan điểm tranh luận</h3>
            <div class="viewpoints-grid">
                ${viewpointsHTML}
            </div>
        </div>
        
        <div class="interest-analysis">
            <h3>🔍 Phân tích lợi ích từ góc nhìn Kinh tế Chính trị</h3>
            ${debate.analysis}
        </div>
    `;
    
    // Show modal
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// ========================================
// CLOSE DEBATE
// ========================================
function closeDebate() {
    const modal = document.getElementById('debateModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('debateModal');
    if (event.target === modal) {
        closeDebate();
    }
}

// Close modal with ESC key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeDebate();
    }
});
