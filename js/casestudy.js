// ========================================
// CASE STUDY DATA
// ========================================
const caseStudies = {
    formosa: {
        title: "Vụ Formosa xả thải biển miền Trung (2016)",
        category: "Môi trường",
        date: "Tháng 4/2016",
        tags: ["Doanh nghiệp", "Ngư dân", "Nhà nước", "Môi trường"],
        content: {
            background: `
                <p>Tháng 4/2016, hàng trăm tấn cá chết dạt vào bờ biển 4 tỉnh miền Trung (Hà Tĩnh, Quảng Bình, Quảng Trị, Thừa Thiên Huế). Sau điều tra, nguyên nhân được xác định là do Công ty TNHH Gang thép Hưng Nghiệp Formosa Hà Tĩnh xả thải chưa qua xử lý ra biển.</p>
                <p>Đây là một trong những thảm họa môi trường nghiêm trọng nhất lịch sử Việt Nam, ảnh hưởng trực tiếp đến sinh kế của hàng chục nghìn ngư dân và cộng đồng ven biển.</p>
            `,
            interests: [
                {
                    title: "👔 Lợi ích của Formosa (Doanh nghiệp)",
                    type: "employer",
                    points: [
                        "<strong>Mục tiêu:</strong> Tối thiểu hóa chi phí sản xuất, tối đa hóa lợi nhuận",
                        "<strong>Hành vi:</strong> Xả thải chưa qua xử lý để tiết kiệm chi phí xử lý môi trường",
                        "<strong>Kết quả:</strong> Tiết kiệm được hàng chục tỷ đồng chi phí ngắn hạn",
                        "<strong>Hậu quả:</strong> Phải bồi thường 500 triệu USD, uy tín sụp đổ, hoạt động bị đình chỉ"
                    ]
                },
                {
                    title: "🎣 Lợi ích của Ngư dân (Người lao động)",
                    type: "worker",
                    points: [
                        "<strong>Mục tiêu:</strong> Sinh kế từ đánh bắt hải sản, môi trường biển trong sạch",
                        "<strong>Tổn thất:</strong> Mất nguồn thu nhập chính, hải sản chết hàng loạt",
                        "<strong>Thiệt hại:</strong> Hàng chục nghìn hộ ngư dân mất việc làm trong nhiều năm",
                        "<strong>Đền bù:</strong> Nhận bồi thường nhưng không đủ bù đắp thiệt hại dài hạn"
                    ]
                },
                {
                    title: "🏛️ Lợi ích của Nhà nước",
                    type: "state",
                    points: [
                        "<strong>Mục tiêu:</strong> Thu hút đầu tư FDI, phát triển kinh tế địa phương vs Bảo vệ môi trường, quyền lợi người dân",
                        "<strong>Mâu thuẫn:</strong> Formosa là dự án FDI lớn (10,6 tỷ USD), tạo việc làm cho hàng nghìn người",
                        "<strong>Áp lực:</strong> Xử lý nghiêm để bảo vệ môi trường nhưng không muốn mất nhà đầu tư",
                        "<strong>Giải pháp:</strong> Phạt nặng 500 triệu USD, yêu cầu khắc phục, tăng cường giám sát"
                    ]
                }
            ],
            analysis: `
                <p><strong>Mâu thuẫn cốt lõi:</strong> Giữa lợi ích kinh tế trước mắt (lợi nhuận DN, thu hút đầu tư) với lợi ích lâu dài (môi trường, sinh kế cộng đồng).</p>
                <p><strong>Nguyên nhân sâu xa:</strong></p>
                <ul>
                    <li>Cơ chế giám sát môi trường lỏng lẻo, thiếu răn đe</li>
                    <li>DN tính toán lợi ích ngắn hạn, coi thường hậu quả môi trường</li>
                    <li>Chính quyền địa phương ưu tiên GDP, việc làm hơn bảo vệ môi trường</li>
                    <li>Ngư dân là nhóm yếu thế, thiếu tiếng nói trong quyết định phát triển</li>
                </ul>
            `,
            conclusion: `
                Vụ Formosa là minh chứng rõ nét cho xung đột giữa các lợi ích kinh tế trong xã hội. 
                Khi doanh nghiệp chỉ quan tâm đến lợi nhuận, bỏ qua trách nhiệm xã hội và môi trường, 
                hậu quả là toàn xã hội phải gánh chịu. Bài học: <strong>Cần cơ chế cân bằng lợi ích, 
                giám sát chặt chẽ, và đặt lợi ích cộng đồng, môi trường lên trên lợi nhuận của DN.</strong>
            `
        }
    },
    grab: {
        title: "Grab vs Taxi truyền thống: Cuộc chiến công nghệ",
        category: "Thị trường",
        date: "2014 - nay",
        tags: ["Tài xế", "Khách hàng", "Công nghệ"],
        content: {
            background: `
                <p>Sự xuất hiện của Grab và các ứng dụng gọi xe công nghệ đã tạo ra cuộc cách mạng trong ngành vận tải hành khách tại Việt Nam. Mô hình kinh doanh mới này đã thay đổi hoàn toàn cách thức di chuyển của người dân, đồng thời tạo ra những xung đột gay gắt với taxi truyền thống.</p>
                <p>Cuộc đối đầu này không chỉ là cạnh tranh kinh doanh mà còn phản ánh sự va chạm giữa công nghệ mới và mô hình cũ, giữa các nhóm lợi ích khác nhau trong xã hội.</p>
            `,
            interests: [
                {
                    title: "🚗 Lợi ích của Tài xế Grab",
                    type: "worker",
                    points: [
                        "<strong>Ưu điểm:</strong> Linh hoạt thời gian, tự chủ công việc, dễ tham gia",
                        "<strong>Thu nhập:</strong> Ban đầu cao do ưu đãi, sau đó giảm khi cạnh tranh tăng",
                        "<strong>Vấn đề:</strong> Không có BHXH, hợp đồng lao động, phụ thuộc vào thuật toán",
                        "<strong>Rủi ro:</strong> Có thể bị 'đá' khỏi ứng dụng bất cứ lúc nào"
                    ]
                },
                {
                    title: "🚕 Lợi ích của Tài xế Taxi truyền thống",
                    type: "worker",
                    points: [
                        "<strong>Ưu điểm:</strong> Có hợp đồng lao động, BHXH, thu nhập ổn định hơn",
                        "<strong>Bất lợi:</strong> Phải nộp tiền ca, ít linh hoạt, áp lực doanh thu",
                        "<strong>Tổn thất:</strong> Mất khách, giảm thu nhập 30-50% khi Grab phát triển",
                        "<strong>Phản ứng:</strong> Biểu tình, đình công, yêu cầu Nhà nước can thiệp"
                    ]
                },
                {
                    title: "👥 Lợi ích của Khách hàng",
                    type: "worker",
                    points: [
                        "<strong>Lợi ích:</strong> Giá rẻ hơn 20-30%, tiện lợi, minh bạch, an toàn hơn",
                        "<strong>Trải nghiệm:</strong> Đặt xe dễ, biết giá trước, đánh giá tài xế",
                        "<strong>Khuyến mãi:</strong> Nhiều ưu đãi, tích điểm, giảm giá",
                        "<strong>Kết quả:</strong> Khách hàng là nhóm hưởng lợi nhiều nhất từ cạnh tranh"
                    ]
                },
                {
                    title: "🏛️ Vai trò của Nhà nước",
                    type: "state",
                    points: [
                        "<strong>Thách thức:</strong> Cân bằng giữa khuyến khích công nghệ mới và bảo vệ ngành cũ",
                        "<strong>Quy định:</strong> Ban hành Nghị định 86 quản lý taxi công nghệ (2024)",
                        "<strong>Mâu thuẫn:</strong> Taxi truyền thống đóng thuế nhiều hơn, Grab tối ưu thuế",
                        "<strong>Giải pháp:</strong> Yêu cầu Grab đăng ký kinh doanh vận tải, đóng thuế đầy đủ"
                    ]
                }
            ],
            analysis: `
                <p><strong>Mâu thuẫn cốt lõi:</strong> Giữa mô hình kinh doanh mới (nền tảng số) và cũ (taxi truyền thống), giữa linh hoạt và ổn định việc làm.</p>
                <p><strong>Bài học về lợi ích kinh tế:</strong></p>
                <ul>
                    <li><strong>Công nghệ tạo giá trị:</strong> Grab tạo giá trị cho khách hàng qua tiện ích và giá cả</li>
                    <li><strong>Phân phối lợi ích:</strong> Lợi ích chủ yếu về nền tảng và khách hàng, tài xế nhận ít hơn</li>
                    <li><strong>Chuyển đổi nghề nghiệp:</strong> Taxi truyền thống buộc phải thay đổi hoặc bị đào thải</li>
                    <li><strong>Vai trò Nhà nước:</strong> Cần quy định để bảo vệ quyền lợi tài xế, công bằng thuế</li>
                </ul>
            `,
            conclusion: `
                Cuộc cạnh tranh Grab - Taxi truyền thống cho thấy: <strong>Công nghệ tạo ra lợi ích mới nhưng cũng phân phối lại lợi ích cũ.</strong> 
                Khách hàng và nền tảng hưởng lợi nhiều nhất, trong khi tài xế và DN taxi truyền thống chịu thiệt. 
                Bài học: Cần có chính sách hỗ trợ chuyển đổi, bảo vệ quyền lợi người lao động trong nền kinh tế số.
            `
        }
    },
    gas: {
        title: "Điều hành giá xăng dầu: Bài toán khó",
        category: "Chính sách",
        date: "2008 - nay",
        tags: ["Người tiêu dùng", "DN xăng dầu", "Ngân sách"],
        content: {
            background: `
                <p>Giá xăng dầu là vấn đề nhạy cảm, ảnh hưởng trực tiếp đến đời sống người dân và hoạt động sản xuất kinh doanh. Việt Nam áp dụng cơ chế điều hành giá xăng dầu theo thị trường thế giới, nhưng có sử dụng Quỹ bình ổn giá để điều tiết.</p>
                <p>Tuy nhiên, cơ chế này luôn tạo ra những mâu thuẫn về lợi ích giữa người tiêu dùng, doanh nghiệp kinh doanh xăng dầu và ngân sách nhà nước.</p>
            `,
            interests: [
                {
                    title: "⛽ Lợi ích của Người tiêu dùng",
                    type: "worker",
                    points: [
                        "<strong>Mong muốn:</strong> Giá xăng thấp, ổn định, không tăng đột biến",
                        "<strong>Ảnh hưởng:</strong> Giá xăng tăng → Chi phí sinh hoạt tăng → Thu nhập thực giảm",
                        "<strong>Phản ứng:</strong> Phản đối mạnh mẽ khi giá tăng cao, đặc biệt nhóm thu nhập thấp",
                        "<strong>Áp lực:</strong> Yêu cầu Nhà nước can thiệp, trợ giá khi giá thế giới tăng"
                    ]
                },
                {
                    title: "🏭 Lợi ích của DN kinh doanh xăng dầu",
                    type: "employer",
                    points: [
                        "<strong>Mục tiêu:</strong> Lợi nhuận từ chênh lệch giá mua-bán, khối lượng tiêu thụ",
                        "<strong>Rủi ro:</strong> Giá thế giới biến động → Khó dự trữ, tồn kho → Lỗ nặng",
                        "<strong>Quỹ bình ổn:</strong> Khi giá tăng cao, phải trích quỹ → Giảm lợi nhuận",
                        "<strong>Yêu cầu:</strong> Muốn giá thả nổi hoàn toàn, giảm can thiệp Nhà nước"
                    ]
                },
                {
                    title: "💰 Lợi ích của Ngân sách Nhà nước",
                    type: "state",
                    points: [
                        "<strong>Thu nhập:</strong> Thuế tiêu thụ đặc biệt, thuế VAT, thuế nhập khẩu từ xăng dầu",
                        "<strong>Chi phí:</strong> Khi trợ giá → Ngân sách thiếu hụt → Phải cắt giảm chi khác",
                        "<strong>Quỹ bình ổn:</strong> Cần dự trữ lớn, nhưng nguồn lực hạn chế",
                        "<strong>Mâu thuẫn:</strong> Tăng giá → Lạm phát tăng vs Trợ giá → Thâm hụt ngân sách"
                    ]
                }
            ],
            analysis: `
                <p><strong>Mâu thuẫn cốt lõi:</strong> Ba bên có lợi ích đối nghịch, khó tìm điểm cân bằng:</p>
                <ul>
                    <li><strong>Người dân muốn:</strong> Giá thấp, ổn định</li>
                    <li><strong>DN muốn:</strong> Giá thả nổi, lợi nhuận hợp lý</li>
                    <li><strong>Nhà nước cần:</strong> Thu ngân sách, kiểm soát lạm phát, ổn định xã hội</li>
                </ul>
                <p><strong>Giải pháp hiện tại:</strong> Điều hành giá theo chu kỳ 10 ngày, sử dụng Quỹ bình ổn giá</p>
                <p><strong>Hạn chế:</strong> Quỹ bình ổn thường xuyên thiếu hụt, chậm phản ứng với biến động thế giới</p>
            `,
            conclusion: `
                Vấn đề giá xăng dầu cho thấy: <strong>Không thể làm hài lòng tất cả các bên cùng lúc.</strong> 
                Nhà nước phải liên tục cân đối giữa ổn định xã hội, hiệu quả kinh tế và nguồn lực ngân sách. 
                Bài học: Cần cơ chế minh bạch, dự báo tốt, và đầu tư vào năng lượng tái tạo để giảm phụ thuộc xăng dầu.
            `
        }
    },
    'minimum-wage': {
        title: "Tăng lương tối thiểu vùng: Ai được, ai mất?",
        category: "Lao động",
        date: "Hàng năm",
        tags: ["Người lao động", "SME", "Công đoàn"],
        content: {
            background: `
                <p>Lương tối thiểu vùng là mức lương thấp nhất mà người sử dụng lao động được phép trả cho người lao động. 
                Việt Nam điều chỉnh lương tối thiểu vùng hàng năm dựa trên Hội đồng Tiền lương Quốc gia, với sự tham gia của Chính phủ, Công đoàn và Hiệp hội Doanh nghiệp.</p>
                <p>Tuy nhiên, mỗi lần tăng lương tối thiểu lại tạo ra những tranh luận gay gắt về mức tăng phù hợp.</p>
            `,
            interests: [
                {
                    title: "👷 Lợi ích của Người lao động",
                    type: "worker",
                    points: [
                        "<strong>Mong muốn:</strong> Tăng lương 15-20%/năm để bù lạm phát, cải thiện đời sống",
                        "<strong>Căn cứ:</strong> Giá cả tăng, chi phí sinh hoạt tăng, năng suất lao động tăng",
                        "<strong>Áp lực:</strong> Lương tối thiểu hiện tại chỉ đủ sống qua ngày, không có tiết kiệm",
                        "<strong>Công đoàn:</strong> Đại diện NLĐ đàm phán, đòi mức tăng cao"
                    ]
                },
                {
                    title: "🏢 Lợi ích của Doanh nghiệp (đặc biệt SME)",
                    type: "employer",
                    points: [
                        "<strong>Lo ngại:</strong> Chi phí nhân công tăng mạnh → Lợi nhuận giảm → Nguy cơ phá sản",
                        "<strong>Đặc biệt SME:</strong> Lương chiếm 40-60% chi phí, khả năng điều chỉnh thấp",
                        "<strong>Phản ứng:</strong> Muốn tăng 5-8%/năm, phù hợp với tăng trưởng kinh tế",
                        "<strong>Rủi ro:</strong> Nếu tăng cao → Cắt giảm nhân sự, chuyển sang tự động hóa"
                    ]
                },
                {
                    title: "🏛️ Vai trò của Nhà nước",
                    type: "state",
                    points: [
                        "<strong>Mục tiêu:</strong> Cân bằng lợi ích, đảm bảo công bằng xã hội và tăng trưởng kinh tế",
                        "<strong>Căn cứ quyết định:</strong> Lạm phát, tăng trưởng GDP, năng suất, khả năng DN",
                        "<strong>Thường:</strong> Mức tăng 6-8%/năm, trung gian giữa hai bên",
                        "<strong>Áp lực:</strong> NLĐ phản đối thấp, DN phản đối cao"
                    ]
                }
            ],
            analysis: `
                <p><strong>Mâu thuẫn cốt lõi:</strong> Đây là điển hình của mâu thuẫn lợi ích giữa lao động và tư bản:</p>
                <ul>
                    <li><strong>NLĐ muốn tăng thu nhập:</strong> Để cải thiện đời sống, bù lạm phát</li>
                    <li><strong>DN muốn giảm chi phí:</strong> Để duy trì cạnh tranh, lợi nhuận</li>
                    <li><strong>Nhà nước phải cân đối:</strong> Vừa bảo vệ NLĐ, vừa giữ môi trường kinh doanh</li>
                </ul>
                <p><strong>Thực tế:</strong> Kể cả sau khi tăng, lương tối thiểu Việt Nam vẫn thấp hơn nhiều nước trong khu vực</p>
            `,
            conclusion: `
                Vấn đề lương tối thiểu là <strong>cuộc đấu tranh không ngừng giữa lợi ích người lao động và doanh nghiệp.</strong> 
                Không có giải pháp hoàn hảo. Bài học: Cần cơ chế tham vấn minh bạch, dựa trên số liệu thực tế, 
                và song hành với cải thiện năng suất lao động, hỗ trợ DN nâng cao hiệu quả.
            `
        }
    },
    electricity: {
        title: "Điều chỉnh giá điện sinh hoạt: Tranh cãi không hồi kết",
        category: "Chính sách",
        date: "Định kỳ",
        tags: ["EVN", "Hộ dân", "DN sản xuất"],
        content: {
            background: `
                <p>Giá điện sinh hoạt tại Việt Nam được điều chỉnh định kỳ, nhưng mỗi lần tăng giá lại gây tranh cãi lớn. 
                EVN (Tập đoàn Điện lực Việt Nam) liên tục báo lỗ, trong khi người dân và doanh nghiệp phản đối tăng giá.</p>
                <p>Đây là minh chứng rõ nét cho xung đột lợi ích trong lĩnh vực dịch vụ công thiết yếu.</p>
            `,
            interests: [
                {
                    title: "⚡ Lợi ích của EVN",
                    type: "employer",
                    points: [
                        "<strong>Yêu cầu:</strong> Tăng giá điện để bù chi phí sản xuất, đầu tư hạ tầng",
                        "<strong>Lý do:</strong> Giá than, khí đốt tăng, đầu tư nhà máy điện tốn kém",
                        "<strong>Thực tế:</strong> EVN báo lỗ hàng năm, nợ ngân hàng hàng trăm nghìn tỷ",
                        "<strong>Áp lực:</strong> Nếu không tăng giá → Không đủ vốn đầu tư → Thiếu điện"
                    ]
                },
                {
                    title: "🏠 Lợi ích của Hộ dân",
                    type: "worker",
                    points: [
                        "<strong>Lo ngại:</strong> Giá điện tăng → Chi phí sinh hoạt tăng → Thu nhập thực giảm",
                        "<strong>Đặc biệt:</strong> Hộ nghèo, thu nhập thấp chịu ảnh hưởng nặng nề nhất",
                        "<strong>Nghi ngờ:</strong> EVN lỗ do kém hiệu quả, lãng phí, không minh bạch",
                        "<strong>Phản đối:</strong> Yêu cầu EVN cải cách, giảm chi phí trước khi tăng giá"
                    ]
                },
                {
                    title: "🏭 Lợi ích của DN sản xuất",
                    type: "employer",
                    points: [
                        "<strong>Ảnh hưởng:</strong> Giá điện tăng → Chi phí sản xuất tăng → Lợi nhuận giảm",
                        "<strong>Cạnh tranh:</strong> Giá điện Việt Nam đang tăng nhanh, mất lợi thế so với khu vực",
                        "<strong>Rủi ro:</strong> Một số DN phải đóng cửa hoặc chuyển sang nước khác",
                        "<strong>Yêu cầu:</strong> Giảm giá điện sản xuất, hỗ trợ DN"
                    ]
                },
                {
                    title: "🏛️ Vai trò của Nhà nước",
                    type: "state",
                    points: [
                        "<strong>Mâu thuẫn:</strong> EVN là DNNN → Phải tự chủ tài chính vs Điện là hàng hóa thiết yếu → Phải kiểm soát giá",
                        "<strong>Áp lực:</strong> Tăng giá → Lạm phát tăng, dư luận phản đối vs Không tăng → EVN nợ nần, thiếu điện",
                        "<strong>Giải pháp:</strong> Tăng giá từng bước nhỏ, cải cách EVN, phát triển năng lượng tái tạo",
                        "<strong>Vấn đề:</strong> Thiếu minh bạch trong tính giá điện, cơ chế định giá còn mang tính hành chính"
                    ]
                }
            ],
            analysis: `
                <p><strong>Mâu thuẫn cốt lõi:</strong> Độc quyền nhà nước trong ngành điện tạo ra sự mất cân đối lợi ích:</p>
                <ul>
                    <li><strong>EVN:</strong> Muốn tăng giá để bù lỗ và đầu tư</li>
                    <li><strong>Người dân:</strong> Muốn giá thấp, ổn định</li>
                    <li><strong>DN:</strong> Muốn giá cạnh tranh để sản xuất</li>
                    <li><strong>Nhà nước:</strong> Vừa là chủ sở hữu EVN, vừa là người điều tiết thị trường</li>
                </ul>
                <p><strong>Nguyên nhân sâu xa:</strong> Thiếu cạnh tranh, thiếu minh bạch, cơ chế giá chưa thị trường</p>
            `,
            conclusion: `
                Vấn đề giá điện cho thấy: <strong>Độc quyền Nhà nước trong dịch vụ thiết yếu có thể dẫn đến kém hiệu quả và xung đột lợi ích.</strong> 
                Bài học: Cần cải cách EVN, tăng minh bạch, phát triển cạnh tranh trong phát điện, 
                và chuyển sang năng lượng tái tạo để giảm chi phí dài hạn.
            `
        }
    },
    ecommerce: {
        title: "Shopee, Tiki và bán hàng online: Ai hưởng lợi?",
        category: "Thị trường",
        date: "2015 - nay",
        tags: ["Người mua", "Người bán", "Nền tảng"],
        content: {
            background: `
                <p>Thương mại điện tử (TMĐT) đã bùng nổ tại Việt Nam trong 10 năm qua, với sự thống trị của các nền tảng như Shopee, Lazada, Tiki. 
                Mô hình này đã thay đổi hoàn toàn cách thức mua bán, tạo ra cơ hội cho hàng triệu người bán nhưng cũng đặt ra nhiều vấn đề về phân phối lợi ích.</p>
            `,
            interests: [
                {
                    title: "🛒 Lợi ích của Người mua",
                    type: "worker",
                    points: [
                        "<strong>Lợi ích lớn:</strong> Giá rẻ hơn 20-40% so với cửa hàng, tiện lợi, nhiều lựa chọn",
                        "<strong>Khuyến mãi:</strong> Flash sale, voucher, freeship → Tiết kiệm chi phí",
                        "<strong>So sánh:</strong> Dễ dàng so sánh giá, xem review, đánh giá",
                        "<strong>Vấn đề:</strong> Hàng giả, hàng kém chất lượng, khó khiếu nại"
                    ]
                },
                {
                    title: "🏪 Lợi ích của Người bán (Shop online)",
                    type: "worker",
                    points: [
                        "<strong>Cơ hội:</strong> Mở shop dễ, chi phí thấp, tiếp cận khách hàng rộng",
                        "<strong>Doanh thu:</strong> Có thể kinh doanh quy mô lớn mà không cần cửa hàng",
                        "<strong>Áp lực:</strong> Phí nền tảng (hoa hồng 5-15%), chi phí quảng cáo cao để nổi bật",
                        "<strong>Cạnh tranh:</strong> Giá càng ngày càng thấp, lợi nhuận bị ép giảm",
                        "<strong>Phụ thuộc:</strong> Bị nền tảng kiểm soát, thay đổi chính sách bất ngờ"
                    ]
                },
                {
                    title: "📦 Lợi ích của Nền tảng (Shopee, Tiki...)",
                    type: "employer",
                    points: [
                        "<strong>Lợi nhuận:</strong> Hoa hồng từ mỗi giao dịch, phí quảng cáo, phí dịch vụ logistics",
                        "<strong>Chiến lược:</strong> Đốt tiền khuyến mãi để giành thị phần, sau đó tăng phí",
                        "<strong>Quyền lực:</strong> Kiểm soát luồng thông tin, dữ liệu khách hàng, thuật toán",
                        "<strong>Thách thức:</strong> Chưa sinh lời, thua lỗ để cạnh tranh"
                    ]
                },
                {
                    title: "🏛️ Tác động đến xã hội",
                    type: "state",
                    points: [
                        "<strong>Tích cực:</strong> Tạo việc làm (shipper, shop online), tăng tiêu dùng, tiện lợi",
                        "<strong>Tiêu cực:</strong> Cửa hàng truyền thống đóng cửa hàng loạt, thất thoát thuế",
                        "<strong>Vấn đề thuế:</strong> Nhiều shop online không đăng ký kinh doanh, không nộp thuế",
                        "<strong>Cần:</strong> Quy định quản lý, đảm bảo công bằng cạnh tranh"
                    ]
                }
            ],
            analysis: `
                <p><strong>Phân tích phân phối lợi ích:</strong></p>
                <ul>
                    <li><strong>Người mua:</strong> Hưởng lợi nhiều nhất từ giá rẻ, tiện lợi</li>
                    <li><strong>Nền tảng:</strong> Giành thị phần, kiểm soát dữ liệu → Quyền lực lớn</li>
                    <li><strong>Người bán:</strong> Cơ hội lớn nhưng lợi nhuận bị ép, phụ thuộc nền tảng</li>
                    <li><strong>Xã hội:</strong> Chuyển đổi số nhưng cần quản lý thuế, bảo vệ quyền lợi</li>
                </ul>
                <p><strong>Mô hình kinh tế nền tảng:</strong> Ai kiểm soát nền tảng, ai có quyền lực phân phối lợi ích</p>
            `,
            conclusion: `
                TMĐT là minh chứng cho <strong>nền kinh tế nền tảng (platform economy)</strong>: 
                Lợi ích tập trung vào người kiểm soát nền tảng. Người bán và người mua tham gia nhưng phụ thuộc vào luật chơi của nền tảng. 
                Bài học: Cần quy định để đảm bảo cạnh tranh công bằng, minh bạch thuế, và bảo vệ quyền lợi người tiêu dùng.
            `
        }
    }
};

// ========================================
// FILTER CASES
// ========================================
function filterCases(category) {
    const cards = document.querySelectorAll('.case-card');
    const buttons = document.querySelectorAll('.filter-btn');
    
    // Update button states
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    // Filter cards
    cards.forEach(card => {
        if (category === 'all' || card.dataset.category === category) {
            card.style.display = 'block';
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 10);
        } else {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            setTimeout(() => {
                card.style.display = 'none';
            }, 300);
        }
    });
}

// ========================================
// OPEN CASE DETAIL
// ========================================
function openCase(caseId) {
    const caseData = caseStudies[caseId];
    if (!caseData) return;
    
    const modal = document.getElementById('caseModal');
    const modalBody = document.getElementById('modalBody');
    
    // Generate stakeholder cards HTML
    const stakeholderCards = caseData.content.interests.map(interest => `
        <div class="stakeholder-card ${interest.type}">
            <h4>${interest.title}</h4>
            <ul>
                ${interest.points.map(point => `<li>${point}</li>`).join('')}
            </ul>
        </div>
    `).join('');
    
    // Populate modal content
    modalBody.innerHTML = `
        <h2 class="case-detail-title">${caseData.title}</h2>
        <div class="case-detail-meta">
            <span class="case-tag">📅 ${caseData.date}</span>
            ${caseData.tags.map(tag => `<span class="case-tag">${tag}</span>`).join('')}
        </div>
        
        <div class="case-detail-section">
            <h3>📋 Bối cảnh</h3>
            ${caseData.content.background}
        </div>
        
        <div class="case-detail-section">
            <h3>⚖️ Phân tích lợi ích các bên</h3>
            <div class="stakeholder-analysis">
                ${stakeholderCards}
            </div>
        </div>
        
        <div class="case-detail-section">
            <h3>🔍 Phân tích mâu thuẫn lợi ích</h3>
            ${caseData.content.analysis}
        </div>
        
        <div class="conclusion-box">
            <h4>💡 Kết luận từ góc nhìn LIKT</h4>
            <p>${caseData.content.conclusion}</p>
        </div>
    `;
    
    // Show modal
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// ========================================
// CLOSE CASE DETAIL
// ========================================
function closeCase() {
    const modal = document.getElementById('caseModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('caseModal');
    if (event.target === modal) {
        closeCase();
    }
}

// Close modal with ESC key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeCase();
    }
});
