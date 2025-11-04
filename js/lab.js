// ========================================
// LAB SIMULATION DATA & LOGIC - 7 SCENARIOS
// ========================================

const scenarios = {
    employer: [
        {
            id: 'employer-1',
            title: "Bài toán Lương thưởng",
            description: "Công ty của bạn vừa có một năm hoạt động rất thành công, lợi nhuận vượt chỉ tiêu. Đã đến lúc quyết định chính sách lương, thưởng cuối năm.",
            decisions: [
                {
                    id: 1,
                    title: "Tăng lương và thưởng lớn cho nhân viên",
                    description: "Chia sẻ thành công với người lao động, đầu tư vào con người",
                    impact: {
                        employer: -20,
                        worker: 80,
                        state: 60,
                        texts: {
                            employer: "📉 Lợi nhuận (ngắn hạn) giảm do chi phí tăng. Tuy nhiên, đây là khoản đầu tư vào nhân sự.",
                            worker: "📈 Thu nhập tăng đáng kể, tinh thần làm việc tăng cao, gắn bó với công ty.",
                            state: "📈 Thuế thu nhập tăng, mức sống người dân cải thiện, tiêu dùng nội địa tăng."
                        },
                        conclusion: "✅ <strong>Sự Thống nhất lợi ích:</strong> Năng suất lao động tăng → Lợi nhuận tương lai tăng. Đây là ví dụ điển hình cho việc lợi ích của DN và NLĐ có thể cùng tăng khi DN biết chia sẻ thành quả. Dài hạn, cả hai bên đều hưởng lợi từ sự phát triển bền vững."
                    }
                },
                {
                    id: 2,
                    title: "Giữ phần lớn lợi nhuận để tái đầu tư, chỉ thưởng ở mức tối thiểu",
                    description: "Ưu tiên tích lũy vốn cho phát triển, tiết kiệm chi phí nhân sự",
                    impact: {
                        employer: 30,
                        worker: -70,
                        state: -30,
                        texts: {
                            employer: "📈 Lợi nhuận (ngắn hạn) giữ được ở mức cao, có nhiều vốn để tái đầu tư mở rộng.",
                            worker: "📉 Thu nhập không như kỳ vọng sau một năm thành công, tinh thần làm việc giảm sút, cảm giác bị bóc lột.",
                            state: "📉 Căng thẳng lao động tăng, rủi ro tranh chấp, giảm sức mua của người dân."
                        },
                        conclusion: "❌ <strong>Sự Mâu thuẫn lợi ích:</strong> NLĐ nghỉ việc, năng suất giảm → Lợi nhuận tương lai giảm. Khi DN chỉ quan tâm đến lợi ích riêng mà không chia sẻ, mâu thuẫn giữa lao động và tư bản trở nên gay gắt. Về lâu dài, DN sẽ mất đi nguồn lực con người quý giá nhất."
                    }
                }
            ]
        },
        {
            id: 'employer-2',
            title: "Xử lý Chất thải (Lợi ích Xã hội)",
            description: "Hệ thống xử lý nước thải của nhà máy đã cũ. Nâng cấp tốn 5 tỷ. 'Xả trộm' ra sông sẽ không tốn đồng nào, nhưng có nguy cơ bị phát hiện.",
            decisions: [
                {
                    id: 1,
                    title: "Đầu tư 5 tỷ nâng cấp hệ thống",
                    description: "Tuân thủ pháp luật, bảo vệ môi trường, trách nhiệm xã hội doanh nghiệp",
                    impact: {
                        employer: -30,
                        worker: 20,
                        state: 90,
                        texts: {
                            employer: "📉 Lợi nhuận (ngắn hạn) giảm mạnh do chi phí đầu tư 5 tỷ. Tuy nhiên, đây là khoản đầu tư bắt buộc.",
                            worker: "📈 Môi trường làm việc an toàn hơn, không lo bị ô nhiễm, công việc ổn định.",
                            state: "📈 Môi trường được bảo vệ, không phải xử lý hậu quả ô nhiễm, doanh nghiệp gương mẫu."
                        },
                        conclusion: "✅ <strong>Sự Thống nhất lợi ích dài hạn:</strong> Uy tín doanh nghiệp tăng, được xã hội ủng hộ. Khách hàng ưu tiên sản phẩm xanh, nhà đầu tư ESG đổ vốn. Đây là minh chứng cho việc lợi ích riêng (DN) có thể thống nhất với lợi ích chung (xã hội) khi DN có trách nhiệm."
                    }
                },
                {
                    id: 2,
                    title: "'Xả trộm' để tiết kiệm chi phí",
                    description: "Tiết kiệm ngắn hạn, chấp nhận rủi ro vi phạm pháp luật",
                    impact: {
                        employer: 40,
                        worker: -50,
                        state: -90,
                        texts: {
                            employer: "📈 Lợi nhuận (ngắn hạn) được bảo toàn, tiết kiệm 5 tỷ. Nhưng rủi ro pháp lý rất cao.",
                            worker: "📉 Môi trường làm việc nguy hiểm, sức khỏe bị ảnh hưởng, có thể mất việc khi DN bị xử lý.",
                            state: "📉 Môi trường bị ô nhiễm nghiêm trọng, ảnh hưởng cộng đồng, chi phí xử lý cao gấp nhiều lần."
                        },
                        conclusion: "❌ <strong>Mâu thuẫn gay gắt - Bài học Formosa:</strong> Bị phạt nặng (500 triệu USD), bị tẩy chay → Phá sản. Đây là ví dụ điển hình cho việc DN hy sinh lợi ích xã hội để trục lợi ngắn hạn. Kết quả: Toàn xã hội gánh chịu, chính DN cũng bị huỷ diệt. Minh chứng rằng <strong>lợi ích riêng không thể tách rời lợi ích chung</strong>."
                    }
                }
            ]
        },
        {
            id: 'employer-3',
            title: "Đầu tư Công nghệ",
            description: "Có một dây chuyền tự động hóa mới. Nó sẽ tăng năng suất gấp 3 lần, nhưng sẽ khiến 30% công nhân trong xưởng bị mất việc.",
            decisions: [
                {
                    id: 1,
                    title: "Mua dây chuyền mới và sa thải công nhân",
                    description: "Tối ưu hóa sản xuất, tăng năng suất, giảm chi phí nhân công",
                    impact: {
                        employer: 80,
                        worker: -80,
                        state: -20,
                        texts: {
                            employer: "📈 Lợi nhuận tăng vọt do năng suất cao gấp 3, chi phí nhân công giảm 30%. Cạnh tranh tốt hơn.",
                            worker: "📉 30% công nhân bị mất việc làm, lợi ích bị tổn hại nghiêm trọng. Những người còn lại lo sợ.",
                            state: "📉 Thất nghiệp tăng, chi phí an sinh xã hội tăng, căng thẳng xã hội. Nhưng năng suất quốc gia tăng."
                        },
                        conclusion: "⚠️ <strong>Mâu thuẫn gay gắt - Lực lượng sản xuất thay đổi:</strong> Đây là mâu thuẫn điển hình khi công nghệ phát triển. <strong>Lực lượng sản xuất (máy móc)</strong> thay đổi → Quan hệ sản xuất (NLĐ-DN) thay đổi → LIKT thay đổi. DN hưởng lợi, NLĐ chịu thiệt. Nhà nước cần can thiệp: đào tạo lại lao động, trợ cấp thất nghiệp."
                    }
                },
                {
                    id: 2,
                    title: "Giữ dây chuyền cũ, chấp nhận năng suất thấp hơn",
                    description: "Bảo vệ việc làm, duy trì ổn định lao động, phát triển từ từ",
                    impact: {
                        employer: -40,
                        worker: 60,
                        state: 30,
                        texts: {
                            employer: "📉 Lợi nhuận thấp hơn đối thủ, nguy cơ bị đè bẹp bởi cạnh tranh. Mất thị phần.",
                            worker: "📈 Việc làm được đảm bảo, lợi ích ổn định, yên tâm làm việc. Không bị thay thế.",
                            state: "📈 Việc làm ổn định, an sinh xã hội được đảm bảo. Nhưng năng suất quốc gia không tăng."
                        },
                        conclusion: "⚖️ <strong>Mâu thuẫn tạm ổn nhưng không bền vững:</strong> Mâu thuẫn (DN-NLĐ) tạm được giữ ổn định, nhưng mâu thuẫn (DN-Thị trường) tăng lên. Nếu đối thủ tự động hóa, DN sẽ bị đào thải. <strong>Bài học:</strong> Không thể ngăn cản tiến bộ công nghệ, nhưng cần chính sách hỗ trợ NLĐ chuyển đổi."
                    }
                },
                {
                    id: 3,
                    title: "Mua dây chuyền VÀ đào tạo lại công nhân",
                    description: "Nâng cấp LLSX đồng thời nâng cấp trình độ lao động, giữ lại 30% công nhân để vận hành máy mới",
                    impact: {
                        employer: 60,
                        worker: 50,
                        state: 70,
                        texts: {
                            employer: "📈 Lợi nhuận tăng (dù chậm hơn sa thải). Chi phí đào tạo ban đầu, nhưng giữ được nhân sự cốt lõi.",
                            worker: "📈 30% công nhân được nâng cao tay nghề, lương cao hơn. 70% còn lại vẫn được đảm bảo.",
                            state: "📈 Năng suất quốc gia tăng, có nguồn lao động chất lượng cao. An sinh được đảm bảo."
                        },
                        conclusion: "✅ <strong>Giải pháp Thống nhất (Tối ưu):</strong> Đây là cách giải quyết mâu thuẫn do LLSX thay đổi. Thay vì loại bỏ NLĐ, DN đầu tư vào con người. <strong>Bài học:</strong> Lợi ích được hài hòa khi DN và NLĐ cùng phát triển trình độ để thích ứng với Lực lượng sản xuất mới."
                    }
                }
            ]
        }
    ],
    worker: [
        {
            id: 'worker-1',
            title: "Năng suất và Trách nhiệm",
            description: "Bạn là công nhân trong một đội. Công ty đang có đơn hàng gấp, nếu hoàn thành đúng hạn, cả đội sẽ được thưởng thêm.",
            decisions: [
                {
                    id: 1,
                    title: "Tích cực làm việc, tăng ca, đảm bảo năng suất",
                    description: "Nỗ lực hết mình, hoàn thành đơn hàng đúng hạn để nhận thưởng",
                    impact: {
                        employer: 80,
                        worker: 80,
                        state: 60,
                        texts: {
                            employer: "📈 Lợi nhuận tăng (giao hàng kịp), uy tín tăng, khách hàng hài lòng. Tiết kiệm chi phí phạt chậm.",
                            worker: "📈 Thu nhập tăng (có tiền thưởng), được sếp ghi nhận năng lực, cơ hội thăng tiến cao hơn.",
                            state: "📈 Năng suất lao động tăng, GDP tăng, thuế thu nhập tăng, kinh tế phát triển."
                        },
                        conclusion: "✅ <strong>Sự Thống nhất rõ rệt - Win-Win:</strong> Cả hai bên cùng có lợi. Đây là minh chứng cho nguyên lý: <strong>Khi NLĐ làm việc tốt → DN phát triển → NLĐ được hưởng lợi nhiều hơn.</strong> Đây là mối quan hệ lý tưởng khi lợi ích cá nhân thống nhất với lợi ích tập thể."
                    }
                },
                {
                    id: 2,
                    title: "Làm việc cầm chừng, đúng giờ về, không quan tâm tiến độ",
                    description: "Chỉ làm đúng công việc được giao, không tăng ca, giữ sức khỏe",
                    impact: {
                        employer: -70,
                        worker: -60,
                        state: -40,
                        texts: {
                            employer: "📉 Lợi nhuận giảm (trễ đơn hàng, bị phạt), mất khách hàng, uy tín sụt giảm nghiêm trọng.",
                            worker: "📉 Thu nhập (mất tiền thưởng), không được đánh giá cao, có thể bị sa thải hoặc giảm thu nhập.",
                            state: "📉 Năng suất lao động thấp, GDP giảm, ảnh hưởng đến chuỗi cung ứng."
                        },
                        conclusion: "❌ <strong>Sự Mâu thuẫn - Cùng thua:</strong> Công ty làm ăn khó khăn, có thể cắt giảm nhân sự (bao gồm cả bạn). Khi NLĐ không tích cực, DN thua thiệt, và chính NLĐ cũng chịu hậu quả. <strong>Bài học:</strong> Lợi ích của NLĐ gắn liền với sự phát triển của DN. Thái độ làm việc tiêu cực chỉ dẫn đến tự hại mình."
                    }
                }
            ]
        },
        {
            id: 'worker-2',
            title: "Đòi hỏi Quyền lợi",
            description: "Điều kiện làm việc trong xưởng rất nóng và thiếu an toàn, nhưng chủ doanh nghiệp phớt lờ các đề xuất cải thiện (để tiết kiệm chi phí).",
            decisions: [
                {
                    id: 1,
                    title: "Tổ chức đình công, yêu cầu cải thiện điều kiện làm việc",
                    description: "Đấu tranh cho quyền lợi, buộc DN phải lắng nghe và thay đổi",
                    impact: {
                        employer: -70,
                        worker: -30,
                        state: 20,
                        texts: {
                            employer: "📉 Lợi nhuận bị mất do sản xuất đình trệ, mất đơn hàng. Áp lực phải đàm phán, tốn chi phí cải thiện.",
                            worker: "📉 Thu nhập (ngắn hạn) bị mất trong ngày đình công. Rủi ro bị sa thải. Nhưng về lâu dài, điều kiện làm việc được cải thiện.",
                            state: "📈 Quyền lợi NLĐ được bảo vệ, pháp luật được tuân thủ. Nhưng ảnh hưởng sản xuất, kinh tế."
                        },
                        conclusion: "⚠️ <strong>Mâu thuẫn gay gắt - Đấu tranh giai cấp:</strong> Buộc DN phải đàm phán, chấp nhận chi phí → LIKT (NLĐ) về sức khỏe tăng lên. Đây là ví dụ điển hình cho <strong>đấu tranh giai cấp</strong>: Khi DN bóc lột, NLĐ phải đấu tranh để bảo vệ lợi ích. Đình công là công cụ mạnh nhất của NLĐ trong xã hội tư bản."
                    }
                },
                {
                    id: 2,
                    title: "Im lặng, chấp nhận làm việc trong điều kiện tồi tệ",
                    description: "Giữ việc làm, tránh xung đột, hy vọng DN tự cải thiện",
                    impact: {
                        employer: 70,
                        worker: -80,
                        state: -40,
                        texts: {
                            employer: "📈 Lợi nhuận được bảo toàn (do không tốn chi phí cải thiện). Tiếp tục bóc lột NLĐ mà không hậu quả.",
                            worker: "📉 Lợi ích về sức khỏe, an toàn bị tổn hại nghiêm trọng. Thu nhập ổn định (ngắn hạn) nhưng hy sinh tương lai.",
                            state: "📉 Tai nạn lao động tăng, chi phí y tế tăng, bất bình xã hội tích tụ."
                        },
                        conclusion: "❌ <strong>Mâu thuẫn âm ỉ - Bóc lột ẩn:</strong> LIKT của DN được thực hiện trên sự hy sinh LIKT của NLĐ. Đây là hình thức <strong>bóc lột giá trị thặng dư</strong>: DN không trả đủ chi phí tái sản xuất sức lao động. Về lâu dài, NLĐ sẽ kiệt sức, mất sức lao động. <strong>Bài học Marx:</strong> Sự im lặng chỉ khiến sự bóc lột ngày càng trầm trọng."
                    }
                }
            ]
        }
    ],
    state: [
        {
            id: 'state-1',
            title: "Điều tiết Lương Tối thiểu Vùng",
            description: "Lạm phát và giá cả sinh hoạt tăng. Các tổ chức công đoàn (đại diện NLĐ) đề nghị tăng Lương Tối thiểu Vùng. Hiệp hội doanh nghiệp (đại diện DN) than phiền chi phí đang quá cao.",
            decisions: [
                {
                    id: 1,
                    title: "Quyết định tăng Lương Tối thiểu Vùng",
                    description: "Ưu tiên bảo vệ quyền lợi người lao động, cải thiện đời sống",
                    impact: {
                        employer: -60,
                        worker: 80,
                        state: 60,
                        texts: {
                            employer: "📉 Lợi nhuận giảm (do chi phí nhân công tăng), có thể phải sa thải bớt nhân sự hoặc cắt giảm chi phí khác.",
                            worker: "📈 Thu nhập cơ bản tăng, đủ sống và có tiết kiệm. Đời sống được cải thiện, tiêu dùng tăng.",
                            state: "📈 Lợi ích xã hội tăng (an sinh được đảm bảo), giảm bất bình đẳng, tăng sức mua nội địa. Thuế thu nhập tăng."
                        },
                        conclusion: "⚖️ <strong>Hài hòa lợi ích - Vai trò điều tiết của NN:</strong> Nhà nước thực hiện chức năng <strong>điều tiết, phân phối lại</strong> lợi ích. Mặc dù tạo mâu thuẫn mới giữa DN và NLĐ, nhưng về lâu dài, nền kinh tế phát triển bền vững hơn khi NLĐ có thu nhập tốt. <strong>Bài học:</strong> Lương tối thiểu là công cụ quan trọng để bảo vệ NLĐ khỏi bị bóc lột quá đà."
                    }
                },
                {
                    id: 2,
                    title: "Quyết định 'đóng băng' Lương Tối thiểu Vùng",
                    description: "Ưu tiên hỗ trợ doanh nghiệp, duy trì môi trường kinh doanh",
                    impact: {
                        employer: 70,
                        worker: -70,
                        state: -50,
                        texts: {
                            employer: "📈 Lợi nhuận được bảo toàn, chi phí không tăng, cạnh tranh tốt hơn. DN hài lòng với chính sách.",
                            worker: "📉 Thu nhập thực tế giảm (do lạm phát), đời sống khó khăn hơn, bất mãn tăng cao.",
                            state: "📉 Lợi ích xã hội giảm (đời sống NLĐ khó khăn), dễ xung đột lao động, bất ổn xã hội. Sức mua giảm."
                        },
                        conclusion: "❌ <strong>Mâu thuẫn gay gắt - Mất cân bằng:</strong> Mâu thuẫn (NN/NLĐ và DN) trở nên gay gắt. Khi Nhà nước chỉ thiên về một bên, sẽ làm mất cân bằng xã hội. <strong>Bài học:</strong> Nhà nước không thể chỉ lo cho DN mà bỏ mặc NLĐ. Điều này dẫn đến bất ổn, đình công, giảm năng suất về lâu dài. <strong>Vai trò NN là hài hòa, không phải thiên vị.</strong>"
                    }
                }
            ]
        },
        {
            id: 'state-2',
            title: "Chính sách Thuế (Phân phối lại thu nhập)",
            description: "Bạn cần ngân sách để xây thêm bệnh viện và trường học (Lợi ích Xã hội). Bạn đang xem xét chính sách thuế.",
            decisions: [
                {
                    id: 1,
                    title: "Tăng thuế Thu nhập Doanh nghiệp",
                    description: "Đánh thuế DN, đặc biệt là DN lớn có lợi nhuận cao",
                    impact: {
                        employer: -70,
                        worker: 30,
                        state: 70,
                        texts: {
                            employer: "📉 Lợi nhuận sau thuế giảm đáng kể. DN phản đối mạnh, có thể đe dọa chuyển ra nước ngoài.",
                            worker: "📈 Hưởng lợi từ bệnh viện, trường học tốt hơn. Chất lượng sống cải thiện nhờ dịch vụ công.",
                            state: "📈 Ngân sách tăng mạnh → Lợi ích xã hội tăng (có bệnh viện, trường học). Phân phối lại thu nhập hiệu quả."
                        },
                        conclusion: "⚖️ <strong>Phân phối lại - Mâu thuẫn DN-NN:</strong> Nhà nước thực hiện vai trò <strong>phân phối lại thu nhập</strong>. Lấy từ DN (giàu) để đầu tư cho xã hội (lợi ích chung). Đây là chức năng cốt lõi của NN trong nền kinh tế thị trường. <strong>Bài học:</strong> Thuế là công cụ điều tiết mạnh mẽ, nhưng nếu đánh quá cao, DN sẽ bỏ đi, ngân sách vẫn thiếu."
                    }
                },
                {
                    id: 2,
                    title: "Tăng thuế Tiêu thụ Đặc biệt (thuốc lá, rượu bia)",
                    description: "Đánh thuế hàng hóa có hại, vừa tăng thu vừa điều tiết hành vi",
                    impact: {
                        employer: -40,
                        worker: -20,
                        state: 80,
                        texts: {
                            employer: "📉 Lợi nhuận (ngành rượu bia, thuốc lá) giảm do nhu cầu giảm. Nhưng chỉ ảnh hưởng một số ngành.",
                            worker: "📉 Lợi ích cá nhân (người tiêu dùng rượu bia) giảm nhẹ. Nhưng sức khỏe cộng đồng được cải thiện.",
                            state: "📈 Ngân sách tăng tốt → Lợi ích xã hội tăng. Đồng thời giảm tiêu thụ hàng hóa có hại, giảm chi phí y tế."
                        },
                        conclusion: "✅ <strong>Hài hòa lợi ích tốt nhất - Thuế thông minh:</strong> Vừa tăng thu ngân sách, vừa điều tiết hành vi xã hội (giảm rượu bia, thuốc lá). Ảnh hưởng tiêu cực phân tán, không tập trung vào một nhóm. <strong>Bài học:</strong> Đây là chính sách thuế thông minh, cân bằng được nhiều lợi ích. Nhà nước hiện đại cần dùng thuế không chỉ để thu tiền, mà còn để <strong>định hướng hành vi kinh tế-xã hội</strong>."
                    }
                }
            ]
        }
    ]
};

let currentRole = null;
let currentScenario = null;
let selectedDecision = null;

const roleNames = {
    employer: 'Chủ Doanh nghiệp',
    worker: 'Người Lao động',
    state: 'Nhà nước'
};

// ========================================
// ROLE SELECTION
// ========================================
function selectRole(role) {
    currentRole = role;
    
    // Hide role selection, show scenario selection
    document.querySelector('.role-selection').style.display = 'none';
    document.getElementById('scenarioSelection').style.display = 'block';
    
    // Update role title
    document.getElementById('roleTitle').textContent = roleNames[role];
    
    // Populate scenarios list
    const scenariosList = document.getElementById('scenariosList');
    const roleScenarios = scenarios[role];
    
    scenariosList.innerHTML = roleScenarios.map((scenario, index) => `
        <div class="scenario-item" onclick="selectScenario('${role}', ${index})">
            <div class="scenario-item-header">
                <div class="scenario-number">${index + 1}</div>
                <h3>${scenario.title}</h3>
            </div>
            <p>${scenario.description}</p>
        </div>
    `).join('');
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ========================================
// BACK TO ROLE SELECTION
// ========================================
function backToRoleSelection() {
    document.getElementById('scenarioSelection').style.display = 'none';
    document.querySelector('.role-selection').style.display = 'block';
    currentRole = null;
    currentScenario = null;
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ========================================
// SCENARIO SELECTION
// ========================================
function selectScenario(role, scenarioIndex) {
    currentScenario = scenarios[role][scenarioIndex];
    
    // Hide scenario selection, show simulation
    document.getElementById('scenarioSelection').style.display = 'none';
    document.getElementById('simulationArea').style.display = 'block';
    
    // Update UI
    document.getElementById('currentRole').textContent = roleNames[role];
    document.getElementById('scenarioTitle').textContent = currentScenario.title;
    document.getElementById('scenarioDescription').innerHTML = `<p>${currentScenario.description}</p>`;
    
    // Populate decisions
    const decisionsGrid = document.getElementById('decisionsGrid');
    decisionsGrid.innerHTML = currentScenario.decisions.map(decision => `
        <div class="decision-option" onclick="selectDecision(${decision.id})">
            <input type="radio" name="decision" id="decision${decision.id}" value="${decision.id}">
            <div class="decision-content">
                <h4>Lựa chọn ${String.fromCharCode(64 + decision.id)}: ${decision.title}</h4>
                <p>${decision.description}</p>
            </div>
        </div>
    `).join('');
    
    decisionsGrid.innerHTML += `
        <button class="submit-decision" onclick="analyzeDecision()">Xem kết quả phân tích</button>
    `;
    
    // Hide impact analysis
    document.getElementById('impactAnalysis').style.display = 'none';
    selectedDecision = null;
    
    // Scroll to simulation
    setTimeout(() => {
        document.getElementById('simulationArea').scrollIntoView({ behavior: 'smooth' });
    }, 100);
}

// ========================================
// DECISION SELECTION
// ========================================
function selectDecision(decisionId) {
    selectedDecision = decisionId;
    document.getElementById(`decision${decisionId}`).checked = true;
}

// ========================================
// ANALYZE DECISION
// ========================================
function analyzeDecision() {
    if (!selectedDecision) {
        alert('Vui lòng chọn một quyết định!');
        return;
    }
    
    const decision = currentScenario.decisions.find(d => d.id === selectedDecision);
    const impact = decision.impact;
    
    // Show impact analysis
    document.getElementById('impactAnalysis').style.display = 'block';
    
    // Update meters
    updateMeter('employerMeter', impact.employer);
    updateMeter('workerMeter', impact.worker);
    updateMeter('stateMeter', impact.state);
    
    // Update texts
    document.getElementById('employerImpact').innerHTML = impact.texts.employer;
    document.getElementById('workerImpact').innerHTML = impact.texts.worker;
    document.getElementById('stateImpact').innerHTML = impact.texts.state;
    document.getElementById('conclusionText').innerHTML = impact.conclusion;
    
    // Scroll to impact analysis
    setTimeout(() => {
        document.getElementById('impactAnalysis').scrollIntoView({ behavior: 'smooth' });
    }, 100);
}

// ========================================
// UPDATE METER
// ========================================
function updateMeter(meterId, value) {
    const meter = document.getElementById(meterId);
    const absValue = Math.abs(value);
    const color = value >= 0 ? '#10b981' : '#ef4444';
    
    setTimeout(() => {
        meter.style.width = absValue + '%';
        meter.style.background = color;
    }, 100);
}

// ========================================
// RESET SIMULATION
// ========================================
function resetSimulation() {
    currentScenario = null;
    selectedDecision = null;
    document.getElementById('simulationArea').style.display = 'none';
    
    // Show scenario selection again
    if (currentRole) {
        document.getElementById('scenarioSelection').style.display = 'block';
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
        document.querySelector('.role-selection').style.display = 'block';
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}
