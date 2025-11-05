# 🔍 Lăng kính Lợi ích Kinh tế

Website học tập tương tác về **Lợi ích Kinh tế** và **Quan hệ Lợi ích Kinh tế** trong môn Kinh tế Chính trị Mác-Lênin.

## 📋 Mô tả dự án

Website này được thiết kế nhằm giúp sinh viên hiểu sâu về các khái niệm Lợi ích Kinh tế thông qua 4 khu vực chính:

### 🎮 1. Lab Mô phỏng
- Trải nghiệm vai trò của 3 chủ thể: Chủ doanh nghiệp, Người lao động, Nhà nước
- Đưa ra quyết định và xem tác động đến các bên liên quan
- Học qua thực hành và trải nghiệm

### 🗺️ 2. Case Study Thực tiễn
- Phân tích 6 sự kiện kinh tế nóng tại Việt Nam:
  - Vụ Formosa xả thải biển
  - Grab vs Taxi truyền thống
  - Điều hành giá xăng dầu
  - Tăng lương tối thiểu vùng
  - Điều chỉnh giá điện sinh hoạt
  - Thương mại điện tử (Shopee, Tiki)
- Phân tích lợi ích của từng bên tham gia
- Rút ra bài học về mâu thuẫn và thống nhất lợi ích

### 🎥 3. Video Giảng dạy
- Video giải thích chi tiết về Lợi ích Kinh tế
- Phân tích Quan hệ Lợi ích Kinh tế giữa các chủ thể
- Tài liệu tham khảo và transcript đầy đủ
- Video liên quan và tài liệu bổ sung

### ℹ️ 4. Giới thiệu
- Nền tảng lý thuyết Kinh tế Chính trị Mác-Lênin
- Khái niệm và vai trò của Lợi ích Kinh tế
- Thông tin về dự án và người thực hiện

## 🚀 Cách sử dụng

### Mở website
1. Mở file `index.html` bằng trình duyệt web (Chrome, Firefox, Edge...)
2. Hoặc sử dụng Live Server trong VS Code

### Điều hướng
- **Trang chủ**: Giới thiệu tổng quan và điều hướng đến các khu vực chính
- **Lab Mô phỏng**: Chọn vai trò → Đọc tình huống → Đưa ra quyết định → Xem phân tích
- **Case Study**: Chọn case study → Đọc phân tích chi tiết về các bên liên quan
- **Video Giảng dạy**: Xem video giải thích → Tải tài liệu tham khảo
- **Giới thiệu**: Tìm hiểu về dự án và nền tảng lý thuyết

## 📁 Cấu trúc thư mục

```
mln122_website/
├── index.html              # Trang chủ
├── lab.html               # Lab Mô phỏng
├── casestudy.html         # Case Study
├── video.html             # Video Giảng dạy
├── about.html             # Giới thiệu
├── css/
│   ├── styles.css         # Styles chung
│   ├── lab.css           # Styles cho Lab
│   ├── casestudy.css     # Styles cho Case Study
│   ├── video.css         # Styles cho Video
│   └── about.css         # Styles cho About
├── js/
│   ├── script.js         # JavaScript chung
│   ├── lab.js            # Logic Lab Mô phỏng
│   └── casestudy.js      # Logic Case Study
└── README.md             # File này
```

## 🎨 Tính năng nổi bật

### Thiết kế
- ✅ Responsive: Hoạt động tốt trên mọi thiết bị (Desktop, Tablet, Mobile)
- ✅ Modern UI: Thiết kế hiện đại với gradient, shadow, animation
- ✅ Màu sắc phân biệt: Mỗi khu vực có màu riêng để dễ nhận diện
- ✅ Typography: Sử dụng font Inter cho sự rõ ràng và chuyên nghiệp

### Tương tác
- ✅ Modal/Popup: Hiển thị nội dung chi tiết mà không rời trang
- ✅ Animation: Hiệu ứng mượt mà khi hover, scroll
- ✅ Smooth Scrolling: Cuộn mượt mà giữa các section
- ✅ Filter: Lọc case study theo danh mục

### Nội dung
- ✅ 3 tình huống mô phỏng với 3 góc nhìn khác nhau
- ✅ 6 case study thực tiễn với phân tích chi tiết
- ✅ Video giảng dạy với tài liệu đầy đủ
- ✅ Nền tảng lý thuyết vững chắc

## 🛠️ Công nghệ sử dụng

- **HTML5**: Cấu trúc trang web
- **CSS3**: Styling và responsive design
- **JavaScript (Vanilla)**: Logic và tương tác
- **Google Fonts (Inter)**: Typography chuyên nghiệp

## 📝 Lưu ý

### Tùy chỉnh thông tin cá nhân
Hãy cập nhật thông tin của bạn trong các file sau:

1. **Footer của tất cả các trang** (index.html, lab.html, casestudy.html, video.html, about.html):
   ```html
   <p class="footer-info">
       Sinh viên thực hiện: [Tên SV] | Lớp: [Mã lớp] | GVHD: [Tên GV]
   </p>
   ```

2. **Trang About** (about.html):
   - Cập nhật phần "Thông tin thực hiện"
   - Điền đầy đủ: Tên, MSSV, Lớp, Giảng viên, Trường

### Mở rộng nội dung
Bạn có thể dễ dàng thêm:
- **Tình huống mới** trong Lab: Chỉnh sửa file `js/lab.js`, object `scenarios`
- **Case Study mới**: Chỉnh sửa file `js/casestudy.js`, object `caseStudies`
- **Video mới**: Xem hướng dẫn trong file `HUONG_DAN_VIDEO.md`

## 🎓 Mục đích học thuật

Website này được tạo ra với mục đích:
- Minh họa lý thuyết Kinh tế Chính trị Mác-Lênin
- Giúp sinh viên học qua trải nghiệm thay vì học thuộc
- Phát triển tư duy phản biện về các vấn đề kinh tế - xã hội
- Hiểu sâu về mâu thuẫn và thống nhất lợi ích trong xã hội

**Lưu ý**: Mọi thông tin, phân tích trong website chỉ phục vụ mục đích học thuật.

## 📧 Liên hệ

Nếu có câu hỏi hoặc góp ý, vui lòng liên hệ:
- Email: [email của bạn]
- Lớp: [Mã lớp học phần]
- Giảng viên: [Tên giảng viên]

---

**© 2025 Lăng kính Lợi ích Kinh tế - Sản phẩm sáng tạo môn học Kinh tế Chính trị Mác-Lênin**
