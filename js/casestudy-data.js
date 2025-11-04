// ========================================
// CASE STUDY DATA - 7 TÌNH HUỐNG THỰC TIỄN
// ========================================

const caseStudiesData = {
    'van-thinh-phat': {
        id: 'van-thinh-phat',
        title: "Vạn Thịnh Phát & SCB",
        fullTitle: "⚖️ Đại án Vạn Thịnh Phát & SCB",
        location: "TP. Hồ Chí Minh",
        time: "2022 - 2024",
        icon: "⚖️",
        conflictLevel: "severe", // Mâu thuẫn gay gắt
        keywords: ["Mâu thuẫn LIKT", "Địa vị chủ thể", "Can thiệp Nhà nước (Pháp lý)"],
        position: { top: '78%', left: '52%' }, // Điều chỉnh để tránh dính
        summary: "Bà Trương Mỹ Lan (Chủ tịch Vạn Thịnh Phát) bị cáo buộc thao túng, lũng đoạn Ngân hàng TMCP Sài Gòn (SCB). Bằng cách nắm giữ trái phép trên 91% cổ phần, bà Lan đã biến SCB thành \"công cụ tài chính\" cá nhân, chỉ đạo lập khống hồ sơ vay để chiếm đoạt số tiền đặc biệt lớn (hơn 304.000 tỉ đồng).",
        interests: {
            employer: { title: "📈 LIKT (Cá nhân/Nhóm lợi ích)", impact: "Tối đa hóa lợi ích vật chất (chiếm đoạt) của cá nhân bà Trương Mỹ Lan và đồng phạm." },
            worker: { title: "📉 LIKT (Xã hội/Người gửi tiền)", impact: "Bị xâm phạm nghiêm trọng. Hàng chục ngàn nhà đầu tư, người gửi tiền có nguy cơ mất toàn bộ tài sản." },
            state: { title: "📉 LIKT (Nhà nước)", impact: "Bị tổn hại (mất an toàn hệ thống tài chính, lung lay niềm tin xã hội)." }
        },
        conclusion: "Đây là biểu hiện của <strong>Mâu thuẫn Lợi ích Gay gắt</strong>, nơi LIKT cá nhân đã được thực hiện bằng cách <em>phá hủy</em> LIKT xã hội.",
        theory: {
            factor: "<strong>\"Địa vị của chủ thể\":</strong> Bà Lan lợi dụng việc nắm giữ trái phép hơn 91% cổ phần (địa vị chủ sở hữu) để biến SCB thành công cụ tài chính riêng.",
            method: "<strong>\"Phương thức 2 (Can thiệp Nhà nước)\":</strong> Khi mâu thuẫn lên đến đỉnh điểm, Nhà nước đã can thiệp bằng công cụ pháp lý (khởi tố, xét xử) và công cụ tài chính (kiểm soát đặc biệt SCB)."
        }
    },
    'trai-phieu': {
        id: 'trai-phieu',
        title: "Khủng hoảng Trái phiếu DN",
        fullTitle: "💰 Khủng hoảng Trái phiếu Doanh nghiệp",
        location: "Hà Nội & TP.HCM",
        time: "2022 - 2023",
        icon: "💰",
        conflictLevel: "moderate", // Mâu thuẫn vừa phải
        keywords: ["Mâu thuẫn LIKT", "Hài hòa lợi ích", "Can thiệp Nhà nước"],
        position: { top: '28%', left: '50%' }, // Điều chỉnh để tránh dính
        summary: "Sau các vụ án lớn (Tân Hoàng Minh, Vạn Thịnh Phát), niềm tin vào thị trường Trái phiếu Doanh nghiệp sụp đổ. Hàng loạt doanh nghiệp (chủ yếu BĐS) mất khả năng thanh toán nợ trái phiếu đến hạn, đẩy hàng chục ngàn nhà đầu tư cá nhân vào nguy cơ mất vốn.",
        interests: {
            employer: { title: "📈 LIKT (Doanh nghiệp BĐS)", impact: "Cần vốn nhanh, dễ dàng để đầu tư, sẵn sàng trả lãi cao. Lợi dụng lòng tin nhà đầu tư." },
            worker: { title: "📊 LIKT (Nhà đầu tư cá nhân)", impact: "Muốn hưởng lợi tức cao hơn lãi suất ngân hàng. Kết quả: nguy cơ mất vốn." },
            state: { title: "⚖️ LIKT (Nhà nước)", impact: "Muốn thị trường vốn phát triển nhưng phải an toàn, minh bạch." }
        },
        conclusion: "Ban đầu là <strong>Thống nhất</strong> (DN cần vốn, NĐT cần lãi). Nhưng khi DN lạm dụng → <strong>Mâu thuẫn</strong> phát sinh.",
        theory: {
            factor: "<strong>\"Chính sách Nhà nước\":</strong> Ban đầu nới lỏng để thị trường phát triển, sau đó siết chặt khi thấy rủi ro.",
            method: "<strong>\"Phương thức 2 (Can thiệp Nhà nước)\":</strong> Nhà nước ban hành Nghị định 08/2023 cho phép DN đàm phán để \"giãn, hoãn\" nợ."
        }
    },
    'thieu-dien': {
        id: 'thieu-dien',
        title: "Thiếu điện Miền Bắc",
        fullTitle: "⚡ Thiếu điện Miền Bắc (Hè 2023)",
        location: "Miền Bắc",
        time: "Tháng 5 - 6 / 2023",
        icon: "⚡",
        conflictLevel: "severe", // Mâu thuẫn gay gắt
        keywords: ["Mâu thuẫn LIKT", "Độc quyền", "Trình độ LLSX"],
        position: { top: '20%', left: '50%' }, // Điều chỉnh để tránh dính
        summary: "Vào cao điểm nắng nóng Hè 2023, miền Bắc thiếu điện nghiêm trọng. EVN phải cắt điện luân phiên trên diện rộng, kể cả các KCN, gây thiệt hại hàng tỷ USD cho sản xuất và đảo lộn đời sống người dân.",
        interests: {
            employer: { title: "⚡ LIKT (EVN - DN Nhà nước)", impact: "Độc quyền cung ứng, nhưng gặp khó khăn (thủy điện cạn nước, nhiệt điện thiếu than)." },
            worker: { title: "🏭 LIKT (DN FDI/Sản xuất)", impact: "Bị thiệt hại nặng nề do phải dừng dây chuyền, giảm năng lực cạnh tranh." },
            state: { title: "👥 LIKT (Người dân)", impact: "Bị ảnh hưởng trực tiếp đến sinh hoạt, sức khỏe trong thời tiết nắng nóng." }
        },
        conclusion: "<strong>Mâu thuẫn</strong> gay gắt giữa LIKT của nhà cung cấp độc quyền (EVN) và LIKT của toàn bộ xã hội.",
        theory: {
            factor: "<strong>1. \"Địa vị chủ thể\":</strong> Vị thế độc quyền của EVN.<br><strong>2. \"Trình độ LLSX\":</strong> Cơ sở hạ tầng không đáp ứng kịp nhu cầu.",
            method: "<strong>\"Phương thức 2 (Can thiệp Nhà nước)\":</strong> Chính phủ can thiệp, yêu cầu EVN \"bằng mọi giá\" đảm bảo điện."
        }
    },
    'sot-gia-gao': {
        id: 'sot-gia-gao',
        title: "Sốt giá gạo",
        fullTitle: "🍚 Sốt giá gạo (Tác động từ Ấn Độ)",
        location: "Đồng bằng Sông Cửu Long",
        time: "Tháng 7 / 2023 - 2024",
        icon: "🍚",
        conflictLevel: "moderate", // Mâu thuẫn vừa phải
        keywords: ["Thống nhất & Mâu thuẫn LIKT", "Hội nhập quốc tế"],
        position: { top: '88%', left: '42%' }, // Điều chỉnh để tránh dính
        summary: "Tháng 7/2023, Ấn Độ cấm xuất khẩu gạo. Nguồn cung toàn cầu thiếu hụt, đẩy giá gạo xuất khẩu của Việt Nam tăng vọt lên mức cao nhất trong 15 năm. Nông dân và doanh nghiệp xuất khẩu trúng đậm.",
        interests: {
            employer: { title: "🌾 LIKT (Nông dân & DN XK)", impact: "Tăng cao (bán được lúa giá cao, lợi nhuận xuất khẩu lớn)." },
            worker: { title: "👨‍👩‍👧‍👦 LIKT (Người tiêu dùng)", impact: "Bị ảnh hưởng (giá gạo nội địa tăng theo giá xuất khẩu, chi phí sinh hoạt tăng)." },
            state: { title: "🇻🇳 LIKT (Quốc gia)", impact: "Tăng cao (tăng kim ngạch xuất khẩu, thu ngoại tệ). Nhưng phải cân bằng với an ninh lương thực." }
        },
        conclusion: "<strong>Thống nhất (Bên ngoài):</strong> Nông dân, DN XK và Quốc gia cùng hưởng lợi.<br><strong>Mâu thuẫn (Bên trong):</strong> Nhóm XK mâu thuẫn với người tiêu dùng nội địa.",
        theory: {
            factor: "<strong>\"Hội nhập quốc tế\":</strong> Một chính sách từ Ấn Độ đã tác động trực tiếp đến toàn bộ QH LIKT ngành lúa gạo Việt Nam.",
            method: "<strong>\"Phương thức 2 (Can thiệp Nhà nước)\":</strong> Chính phủ phải hài hòa: Vừa đẩy mạnh xuất khẩu, vừa đảm bảo an ninh lương thực trong nước."
        }
    },
    'formosa': {
        id: 'formosa',
        title: "Formosa",
        fullTitle: "🏭 Formosa (Thảm họa Môi trường 2016)",
        location: "Hà Tĩnh",
        time: "Tháng 4 / 2016",
        icon: "🏭",
        conflictLevel: "severe", // Mâu thuẫn gay gắt
        keywords: ["Mâu thuẫn gay gắt", "Lợi ích Xã hội", "Can thiệp Nhà nước"],
        position: { top: '48%', left: '54%' }, // Điều chỉnh để tránh dính
        summary: "Công ty Formosa Hà Tĩnh xả thải trái phép chất độc ra biển, gây thảm họa cá chết hàng loạt trên 4 tỉnh miền Trung. Hàng chục nghìn ngư dân mất nguồn sống, ngành du lịch biển sụp đổ.",
        interests: {
            employer: { title: "🏭 LIKT (Doanh nghiệp)", impact: "Tối đa hóa lợi nhuận bằng cách cắt giảm chi phí xử lý chất thải." },
            worker: { title: "🎣 LIKT (Xã hội/Người dân)", impact: "Bị hủy hoại. Ngư dân mất ngư trường, sức khỏe cộng đồng bị đe dọa." },
            state: { title: "🏛️ LIKT (Nhà nước)", impact: "Bị tổn hại (mất an ninh xã hội, chi phí xử lý thảm họa)." }
        },
        conclusion: "<strong>Mâu thuẫn GAY GẮT</strong> giữa LIKT (DN) và LIKT (Xã hội). Lợi ích kinh tế cá biệt đã phá hủy lợi ích kinh tế chung.",
        theory: {
            factor: "<strong>\"Hội nhập quốc tế\":</strong> Mặt trái của việc thu hút FDI bằng mọi giá, xem nhẹ tiêu chuẩn môi trường.",
            method: "<strong>\"Phương thức 2 (Can thiệp Nhà nước)\":</strong> Nhà nước dùng quyền lực pháp lý, buộc Formosa bồi thường 500 triệu USD."
        }
    },
    'thu-thiem': {
        id: 'thu-thiem',
        title: "BĐS Thủ Thiêm",
        fullTitle: "🏘️ Bất động sản Thủ Thiêm (Vụ đấu giá 2021)",
        location: "TP. Hồ Chí Minh",
        time: "12/2021 - 01/2022",
        icon: "🏘️",
        conflictLevel: "moderate", // Mâu thuẫn vừa phải
        keywords: ["Mâu thuẫn LIKT", "Địa vị chủ thể", "Quy luật giá trị"],
        position: { top: '80%', left: '56%' }, // Điều chỉnh để tránh dính
        summary: "Tân Hoàng Minh trúng đấu giá lô đất Thủ Thiêm với mức giá kỷ lục 2,4 tỷ/m². Sau 1 tháng, THM bỏ cọc, đẩy thị trường BĐS vào khủng hoảng, phanh phui nhiều sai phạm.",
        interests: {
            employer: { title: "🏢 LIKT (DN - THM & BĐS)", impact: "Thao túng, đẩy giá trị ảo của các dự án BĐS khác. DN BĐS khác hưởng lợi (giá đất chung tăng)." },
            worker: { title: "🏠 LIKT (Người mua thực)", impact: "Bị tổn hại (chi phí mua nhà tăng vọt, vượt xa giá trị thực)." },
            state: { title: "💰 LIKT (Nhà nước)", impact: "Tối đa hóa nguồn thu ngân sách từ quỹ đất công. Nhưng bị DN lợi dụng." }
        },
        conclusion: "<strong>Mâu thuẫn</strong> giữa LIKT (DN đầu cơ) và LIKT (Xã hội). LIKT (Nhà nước) ban đầu có vẻ thống nhất với DN, nhưng thực chất bị lợi dụng.",
        theory: {
            factor: "<strong>\"Địa vị chủ thể\":</strong> Vấn đề sở hữu đất đai và quyền quản lý, khai thác quỹ đất công của Nhà nước.",
            method: "<strong>\"Phương thức 2 (Can thiệp Nhà nước)\":</strong> Sau sự kiện, Nhà nước điều tra và siết chặt tín dụng BĐS, siết chặt phát hành trái phiếu."
        }
    },
    'grab-taxi': {
        id: 'grab-taxi',
        title: "Grab vs. Taxi",
        fullTitle: "🚕 Grab vs. Taxi Truyền thống",
        location: "Hà Nội, TP.HCM",
        time: "2017 - 2019",
        icon: "🚕",
        conflictLevel: "low", // Thống nhất (lợi ích người tiêu dùng)
        keywords: ["Trình độ LLSX", "Cạnh tranh", "Mâu thuẫn & Thống nhất"],
        position: { top: '35%', left: '53%' }, // Điều chỉnh để tránh dính
        summary: "Grab gia nhập thị trường Việt Nam, sử dụng công nghệ app để kết nối tài xế và hành khách. Cuộc chiến khốc liệt với taxi truyền thống (Vinasun, Mai Linh) đã thay đổi hoàn toàn ngành vận tải.",
        interests: {
            employer: { title: "🚗 LIKT (Taxi công nghệ)", impact: "Tối đa hóa lợi nhuận bằng cách chiếm lĩnh thị phần. Đốt tiền khuyến mãi để giành khách." },
            worker: { title: "🚕 LIKT (Taxi truyền thống)", impact: "Lợi ích bị đe dọa nghiêm trọng, mất thị phần, giảm lợi nhuận." },
            state: { title: "👥 LIKT (Người tiêu dùng)", impact: "Hưởng lợi lớn (giá rẻ hơn, tiện lợi, minh bạch). Nhóm được lợi nhiều nhất." }
        },
        conclusion: "<strong>Mâu thuẫn:</strong> Giữa LIKT (Taxi công nghệ) và LIKT (Taxi truyền thống).<br><strong>Thống nhất:</strong> Giữa LIKT (Taxi công nghệ) và LIKT (Người tiêu dùng).",
        theory: {
            factor: "<strong>\"Trình độ LLSX\":</strong> Công nghệ 4.0 (LLSX mới) đã phá vỡ các quan hệ sản xuất cũ, tạo ra QH LIKT mới, hiệu quả hơn.",
            method: "<strong>\"Phương thức 1 (Thị trường)\":</strong> Cạnh tranh khốc liệt. <strong>\"Phương thức 2 (Nhà nước)\":</strong> Ban hành Nghị định 10/2020/NĐ-CP để hài hòa lợi ích."
        }
    }
};
