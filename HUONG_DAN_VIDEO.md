# 🎥 HƯỚNG DẪN THÊM VIDEO VÀO TRANG WEB

## 📋 TÓM TẮT
- ✅ Đã tạo trang `video.html` thay thế Sandbox
- ✅ Đã cập nhật navigation trên tất cả các trang
- ✅ Sử dụng YouTube embed (không cần upload video lên Vercel)

---

## 🚀 CÁCH THÊM VIDEO

### Bước 1: Upload video lên YouTube
1. Truy cập https://studio.youtube.com
2. Nhấn **Create** → **Upload videos**
3. Upload video của bạn
4. Đặt tiêu đề: "Lợi ích Kinh tế và Quan hệ Lợi ích Kinh tế"
5. Chọn **Unlisted** hoặc **Public** (tùy bạn)
6. Nhấn **Publish**

### Bước 2: Lấy Video ID
1. Sau khi upload xong, vào video của bạn
2. URL sẽ có dạng: `https://www.youtube.com/watch?v=ABC123XYZ`
3. Copy phần `ABC123XYZ` (đó là Video ID)

### Bước 3: Cập nhật file video.html
Mở file `/home/kali/MLN122/video.html`, tìm dòng 50:

```html
src="https://www.youtube.com/embed/YOUR_VIDEO_ID?rel=0&modestbranding=1"
```

Thay `YOUR_VIDEO_ID` bằng Video ID thực của bạn:

```html
src="https://www.youtube.com/embed/ABC123XYZ?rel=0&modestbranding=1"
```

---

## 🎨 TÙY CHỈNH NỘI DUNG

### 1. Cập nhật mô tả video
Sửa phần "Nội dung Video" trong `video.html` (dòng 60-70)

### 2. Thêm Transcript
Thêm bản ghi chép đầy đủ vào phần "Transcript" (dòng 75-82)

### 3. Thêm tài liệu tham khảo
- Thêm link slide PDF vào nút "Tải về PDF" (dòng 96)
- Cập nhật link infographic (dòng 103)

### 4. Thêm video liên quan (tùy chọn)
Nếu có nhiều video, thêm vào section "Related Videos" (dòng 115-155)

---

## 💡 LỢI ÍCH CỦA YOUTUBE EMBED

✅ **Miễn phí băng thông** - Vercel không tính traffic cho video  
✅ **Tốc độ cao** - YouTube có CDN toàn cầu  
✅ **Adaptive streaming** - Tự động điều chỉnh chất lượng  
✅ **Mobile-friendly** - Tối ưu cho mọi thiết bị  
✅ **SEO friendly** - Google ưu tiên nội dung YouTube  

---

## 🔄 THAY THẾ KHÁC (nếu không dùng YouTube)

### Vimeo (chuyên nghiệp hơn)
```html
<iframe src="https://player.vimeo.com/video/YOUR_VIDEO_ID" ...></iframe>
```

### Google Drive (riêng tư)
1. Upload lên Google Drive
2. Click phải → Get link → Anyone with the link
3. Lấy File ID từ link
4. Sử dụng:
```html
<iframe src="https://drive.google.com/file/d/FILE_ID/preview" ...></iframe>
```

---

## 📱 TEST RESPONSIVE

Sau khi thêm video, test trên:
- Desktop: Chrome, Firefox
- Mobile: Smartphone (portrait & landscape)
- Tablet: iPad

---

## 🚀 DEPLOY LÊN VERCEL

```bash
git add .
git commit -m "Add video teaching page"
git push origin minigame
```

Vercel sẽ tự động deploy!

---

## ❓ FAQ

**Q: Video có bị lag không?**  
A: Không, YouTube tự động tối ưu bandwidth.

**Q: Có giới hạn dung lượng không?**  
A: Không, vì video host trên YouTube.

**Q: Có thể tắt quảng cáo YouTube không?**  
A: Cần YouTube Premium hoặc dùng Vimeo (có phí).

**Q: Video có thể private không?**  
A: Có, chọn "Unlisted" trên YouTube - chỉ người có link mới xem được.

---

Made with ❤️ for MLN122 Project
