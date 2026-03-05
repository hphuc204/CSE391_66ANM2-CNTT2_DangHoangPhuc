## BTTH03: JS nền tảng, DOM & Sự kiện

**Đối tượng:** Sinh viên chưa học lý thuyết JavaScript

---

## 1. MỤC TIÊU HỌC TẬP

Sau buổi lab, sinh viên có thể:

- Mô tả được JavaScript là gì, chạy ở đâu, khác HTML/CSS ở điểm nào.
- Viết được các đoạn JS đơn giản với:
  - Biến, kiểu dữ liệu cơ bản (number, string, boolean),
  - Cú pháp lệnh, toán tử đơn giản,
  - Cấu trúc điều khiển if/else, vòng lặp đơn giản,
  - Hàm (function) có tham số và giá trị trả về.
- Thao tác được với DOM:
  - Lấy phần tử bằng `document.getElementById`,
  - Thay đổi nội dung văn bản, kiểu dáng (style),
  - Lắng nghe và xử lý một số sự kiện cơ bản: `click`, `input`.
- Nhận biết jQuery là một thư viện hỗ trợ thao tác DOM/sự kiện (ở mức nhận diện, chưa cần sử dụng thành thạo).

---

## 2. CẤU TRÚC THỜI GIAN BUỔI LAB
- 03 tiết thực hành.

---

## 3. HOẠT ĐỘNG 1 (45’): GIỚI THIỆU JS & CÚ PHÁP CƠ BẢN

### 3.1. Chuẩn bị file HTML & JS

Tạo file `lab-js-basic.html`:

```html
<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <title>Lab JS Cơ bản</title>
</head>
<body>
  <h1>Khám phá JavaScript</h1>
  <p id="welcome">Chưa có JavaScript...</p>
  <button id="runBtn">Nhấn để chạy JS</button>

  <script src="main.js"></script>
</body>
</html>
```

Tạo file `main.js`:

```js
console.log("Hello from JavaScript!");
```


---

### 3.2. Nhiệm vụ cho sinh viên

#### Bước 1: Mở file \& Quan sát bằng Console

1. Mở `lab-js-basic.html` trong trình duyệt (Chrome/Edge/…).
2. Mở DevTools → tab **Console**.
3. Quan sát thông báo xuất hiện.

> Câu hỏi:
> - Em thấy dòng thông báo nào trong console?
> - Console hiển thị Hello from JavaScript 
> - Điều này cho em biết JavaScript đang làm gì khi trang web được tải?
> - Điều đó chứng tỏ file ```main.js``` đã được tải và chạy khi trang web mở
---

#### Bước 2:  “JavaScript là gì?” (Tra cứu nhanh)

Sử dụng 1–2 nguồn tài liệu (vd. W3Schools, freeCodeCamp, …), tóm tắt:

> a) JavaScript chạy ở đâu? (Trình duyệt / Server / Cả hai?)
> - JavaScript chạy được cả ở trình duyệt và server
> b) HTML, CSS, JavaScript mỗi phần chịu trách nhiệm chính về điều gì?
>
> - HTML: Xây dựng cấu trúc và nội dung của trang web (khung xương của trang web),ví dụ: tiêu đề, đoạn văn, hình ảnh, nút bấm
> - CSS: Dùng để thiết kế giao diện và trình bày của trang web (giống như quần áo), ví dụ: màu sắc, font chữ, bố cục, kích thước)
> - JavaScript: Xử lý tương tác và logic của trang web(hệ thần kinh của trang web), ví dụ: nhấn nút, kiểm tra dữ liệu, thay đổi nội dung trang, gọi dữ liệu từ server

---

#### Bước 3: Thử nghiệm biến \& kiểu dữ liệu trong Console

Trong tab Console, gõ từng dòng sau và ghi lại kết quả:

```js
let age = 20;
const name = "An";
let isStudent = true;

typeof age;
typeof name;
typeof isStudent;

1 + 2 * 3;
"Hello " + "world";
```

> Câu hỏi:
> - Kết quả `typeof age` là gì? 
> - "number"
> - Kết quả `typeof name` là gì?
> - "string"
> - Kết quả `typeof isStudent` là gì?
> - "boolean"
> - Em hãy tự mô tả ngắn gọn:
>   - `number` là: kiểu dữ liệu dùng để lưu số, có thể là số nguyên hoặc số thập phân
>   - `string` là: kiểu dữ liệu dùng để lưu chuỗi ký tự hoặc văn bản, được đặt trong dấu ```" "``` hoặc ```' '```
>   - `boolean` là: kiểu dữ liệu chỉ có hai giá trị đúng hoặc sai: ```true``` hoặc ```false```

---

#### Bước 4: Viết đoạn script tính tuổi

Mở file `main.js`, viết thêm:

```js
let name = "An";
let yearOfBirth = 2005;
let currentYear = 2026;
let age = currentYear - yearOfBirth;

console.log("Xin chào, mình là " + name + ", năm nay mình " + age + " tuổi.");
```

Sau đó:

1. Đổi giá trị `name`, `yearOfBirth` thành thông tin của chính em.
2. Reload trang \& quan sát console.

> Câu hỏi:
> - Dòng log hiển thị gì sau khi em sửa thông tin?
> - Hello from JavaScript!
> Xin chào, mình là Phuc, năm nay mình 20 tuổi.
> - Nếu em quên dấu `;` hoặc quên dấu `+`, điều gì xảy ra? Trình duyệt báo lỗi thế nào?
> - Khi quên dấu ```;``` thì vẫn chạy như bình thường được còn quên dấu ```+``` thì bị lỗi ```Uncaught SyntaxError: missing ) after argument list```
---

#### Bước 5: Phản tư nhanh (Reflection)

> - Điều thú vị nhất em vừa khám phá được về console là gì?
> - Điều thú vị nhất là Console cho phép chạy và kiểm tra JavaScript trực tiếp mà không cần sửa file nhiều lần. Có thể nhập lệnh, xem kết quả ngay và dùng console.log() để kiểm tra giá trị của biến hoặc chương trình có chạy đúng hay không.
> - Em gặp lỗi cú pháp nào? Em đã xử lý bằng cách nào (tự sửa, hỏi bạn, đọc lỗi, tìm Google, …)?
> - Em gặp lỗi ```Uncaught SyntaxError: missing ) after argument list``` do viết sai cú pháp trong câu lệnh ```console.log()``` do thiếu dấu ```+``` khi nối chuỗi. Sửa nó bằng cách đọc thông báo lỗi trong Console và sửa lại cú pháp cho đúng.
---

## 4. HOẠT ĐỘNG 2 (40’): CẤU TRÚC ĐIỀU KHIỂN \& HÀM

### 4.1. Chuẩn bị file logic (hoặc viết tiếp trong main.js)

Ví dụ đoạn mã:

```js
// TODO: Đổi giá trị score và quan sát kết quả
let score = 7.5;

// TODO: Dự đoán điều kiện if/else đang làm gì, rồi chạy thử
if (score >= 8) {
  console.log("Giỏi");
} else if (score >= 6.5) {
  console.log("Khá");
} else if (score >= 5) {
  console.log("Trung bình");
} else {
  console.log("Yếu");
}

// TODO: Viết hàm tính điểm trung bình 3 môn
function tinhDiemTrungBinh(m1, m2, m3) {
  let avg = (m1 + m2 + m3) / 3;
  return avg;
}

// Gợi ý dùng thử hàm trong console:
// tinhDiemTrungBinh(8, 7, 9);
```


---

### 4.2. Nhiệm vụ cho sinh viên

#### Bước 1: Đoán trước – chạy sau

> a) Nếu `score = 9`, em dự đoán console sẽ in: "Giỏi"
> b) Nếu `score = 6`, em dự đoán console sẽ in: "Trung bình"

Sau đó:

1. Thay `score = 9`, reload trang hoặc chạy file và kiểm tra console.
2. Thay `score = 6`, kiểm tra lại.

> So sánh dự đoán và kết quả thực tế:
> - Trường hợp `score = 9`: Dự đoán vs Thực tế: ```Giỏi```
> - Trường hợp `score = 6`: Dự đoán vs Thực tế: ```Trung bình```

---

#### Bước 2: Mô tả lại if/else bằng lời

> - Khi nào chương trình in `"Giỏi"`?
> - Chương trình in "Giỏi" khi điểm score lớn hơn hoặc bằng 8
> - Khi nào chương trình in `"Yếu"`?
> - Chương trình in "Yếu" khi điểm score nhỏ hơn 5
> - Em hãy mô tả cấu trúc `if/else` bằng lời của em (có thể ví von “ngã rẽ” trong đời sống):
> - Cấu trúc if/else giống như các ngã rẽ khi đưa ra quyết định.
> - Chương trình sẽ kiểm tra từng điều kiện từ trên xuống dưới. Nếu điều kiện nào đúng thì thực hiện lệnh trong khối đó và không kiểm tra các điều kiện phía sau nữa. Nếu tất cả điều kiện đều sai thì chương trình sẽ chạy phần else.

---

#### Bước 3: Làm việc với hàm

1. Mở Console, gọi hàm:
```js
tinhDiemTrungBinh(8, 7, 9);
```

> Em ghi lại giá trị hàm trả về: ```8```

2. Viết thêm hàm `xepLoai(avg)` trong file JS:
```js
function xepLoai(avg) {
  // TODO: Dùng if/else để:
  // avg >= 8  -> "Giỏi"
  // avg >= 6.5 -> "Khá"
  // avg >= 5  -> "Trung bình"
  // còn lại   -> "Yếu"
}
```

3. Gọi thử trong console:
```js
let avg = tinhDiemTrungBinh(8, 7, 9);
let loai = xepLoai(avg);
console.log("Điểm TB:", avg, " - Xếp loại:", loai);
```

> Câu hỏi:
> - Một hàm gồm những phần chính nào?
>   - Tên hàm: Tên dùng để gọi hàm khi cần thực hiện chức năng đó
>   - Tham số (parameters): Các biến nhận dữ liệu đầu vào để hàm xử lý
>   - Thân hàm (body): Phần chứa các câu lệnh xử lý của hàm, nằm trong dấu ```{ }```
>   - Giá trị trả về (return): Kết quả mà hàm trả lại sau khi xử lý, sử dụng từ khóa ```return```
> - Ưu điểm của việc dùng hàm thay vì lặp lại cùng một đoạn code nhiều lần là gì?
>- Có thể tái sử dụng trong code, dễ sửa 
---

#### Bước 4: Mở rộng nhỏ (tuỳ chọn)

Viết hàm `kiemTraTuoi(age)`:

```js
function kiemTraTuoi(age) {
  // TODO:
  // Nếu age >= 18 -> console.log("Đủ 18 tuổi");
  // Ngược lại -> console.log("Chưa đủ 18 tuổi");
}
```

Gọi thử: `kiemTraTuoi(16);`, `kiemTraTuoi(20);`.
Kết quả : 
```
Chưa đủ 18 tuổi
Đủ 18 tuổi
```
---

#### Bước 5: Phản tư

> - Phần nào trong if/else hoặc hàm khiến em khó hiểu nhất?
> - Phần khó hiểu nhất là các điều kiện ```if / else if / else``` được kiểm tra theo thứ tự và cách hàm sử dụng ```return``` để trả về giá trị sau khi tính toán.
> - Em đã làm gì để vượt qua (thử nhiều lần, hỏi bạn, xem lại ví dụ, tra Google, …)?
> - Em đã chạy thử code nhiều lần trong Console để xem kết quả, đọc thông báo lỗi khi có lỗi xảy ra và xem lại các ví dụ trong bài học.
---

## 5. HOẠT ĐỘNG 3 (40’): THAO TÁC DOM \& SỰ KIỆN

### 5.1. Chuẩn bị HTML

Thêm vào trang (hoặc tạo file mới):

```html
<section>
  <h2>DOM & Sự kiện</h2>
  <p id="status">Chưa có tương tác...</p>

  <button id="btnHello">Chào</button>
  <button id="btnRed">Đổi màu nền thành đỏ</button>

  <div style="margin-top: 20px;">
    <label>Nhập tên: </label>
    <input id="nameInput" type="text" />
    <p id="greeting"></p>
  </div>
</section>

<script src="dom.js"></script>
```

Tạo file `dom.js`:

```js
const statusEl = document.getElementById("status");
const btnHello = document.getElementById("btnHello");

btnHello.addEventListener("click", function () {
  statusEl.textContent = "Xin chào! Đây là nội dung được thay đổi bằng JavaScript.";
});
```


---

### 5.2. Nhiệm vụ cho sinh viên

#### Bước 1: Đọc \& giải thích

> Câu hỏi:
> - `document.getElementById("status")` đang làm gì?
> - Lệnh này dùng để tìm và lấy phần tử HTML có id là "status" từ trang web để JavaScript có thể thao tác với nó
> - Sự kiện `"click"` xảy ra khi nào?
> - Sự kiện ```click``` xảy ra khi người dùng nhấn chuột vào nút hoặc phần tử trên trang web. Trong trường hợp này là khi nhấn vào nút ```btnHello```
> - Trong đoạn code trên, khi nhấn nút `btnHello`, điều gì thay đổi trên trang?
> - Khi nhấn nút ```Chào```, nội dung của đoạn văn có ```id = "status"``` sẽ được thay đổi từ: ```Chưa có tương tác...``` thành ```Xin chào! Đây là nội dung được thay đổi bằng JavaScript.```

---

#### Bước 2: Thử nghiệm nút đổi màu nền

Hoàn thiện code:

```js
const btnRed = document.getElementById("btnRed");

btnRed.addEventListener("click", function () {
  // TODO: Đổi màu nền trang thành đỏ
  document.body.style.backgroundColor = "red";
});
```

> Câu hỏi:
> - Em có thể đổi sang màu khác (vd. `lightblue`) không? Hãy thử.
> - Em hãy ghi lại 1 ví dụ khác mà JavaScript có thể làm với `document.body.style`.

---

#### Bước 3: Xử lý sự kiện input – gõ tên, hiện lời chào

Hoàn thiện code:

```js
const nameInput = document.getElementById("nameInput");
const greeting = document.getElementById("greeting");

nameInput.addEventListener("input", function () {
  const value = nameInput.value;
  greeting.textContent = "Xin chào, " + value + "!";
});
```

> Câu hỏi:
> - Sự kiện `"input"` khác gì so với `"click"`?
> ```click``` là nhấn chuột còn ```input``` là thay đổi nội dung trong ô nhập
> - Khi em xoá hết nội dung ô input, dòng `greeting` hiển thị gì?
>- Nội dung hiển thị là ```Xin chào, !```
---

#### Bước 4: Liên hệ khái niệm DOM

> DOM (Document Object Model) là mô hình biểu diễn trang HTML dưới dạng một **cây các đối tượng** mà JavaScript có thể truy cập và thay đổi.
>
> Em hãy:
> - Tự mô tả DOM bằng lời của em:
> - DOM là cách trình duyệt biểu diễn trang HTML thành các đối tượng mà JavaScript có thể truy cập và chỉnh sửa. Nhờ nó mà JavaScript có thể thay đổi nội dung, màu sắc, hoặc thêm/xóa phần tử trên trang web khi người dùng tương tác.
> - Nêu 1 ví dụ “thao tác DOM” trong bài (ghi lại 1 dòng lệnh cụ thể).
```statusEl.textContent = "Xin chào! Đây là nội dung được thay đổi bằng JavaScript.";```
---

#### Bước 5: Ảnh kết quả

Hãy chụp các ảnh màn hình:

1. Khi vừa tải trang (chưa tương tác).
![image](https://hackmd.io/_uploads/H1gSTsUtbg.png)
2. Sau khi nhấn “Chào”.
![image](https://hackmd.io/_uploads/HyCrpj8K-l.png)
3. Sau khi đổi nền sang màu đỏ.
![image](https://hackmd.io/_uploads/rkFIpiLFZl.png)
4. Khi gõ tên và nhìn thấy lời chào xuất hiện.
![image](https://hackmd.io/_uploads/BysDai8YWx.png)
*(Ảnh có thể được yêu cầu nộp cùng bài hoặc dán vào báo cáo)*

---

## 6. KẾT THÚC (15’): GIỚI THIỆU JQUERY \& PHẢN TƯ

### 6.1. Nhìn nhanh jQuery (so sánh với JS thuần)

Ví dụ:

```js
// JS thuần
document.getElementById("btnHello").addEventListener("click", function () {
  alert("Hello from JS!");
});

// jQuery (giả sử đã import jQuery)
$("#btnHello").on("click", function () {
  alert("Hello from jQuery!");
});
```

> Câu hỏi:
> - Điểm giống nhau về chức năng giữa 2 đoạn code trên là gì?
> - Cả hai đoạn code đều bắt sự kiện khi người dùng nhấn vào nút ```btnHello``` và hiển thị một hộp thông báo ```(alert)``` trên trình duyệt
> - Điểm khác nhau về cú pháp là gì (`document.getElementById` vs `$("#id")`, `addEventListener` vs `.on`)?
> - ```JavaScript thuần (Vanilla JS)```: Sử dụng ```document.getElementById("btnHello")``` để lấy phần tử và ```addEventListener()``` để gắn sự kiện.
> - ```jQuery```: Sử dụng cú pháp ngắn gọn hơn ```$("#btnHello")``` để chọn phần tử và ```.on()``` để gắn sự kiện
> - Em hãy tra cứu nhanh “What is jQuery used for?” và ghi 2 ý chính:
>   1. Đơn giản hóa việc thao tác DOM và xử lý sự kiện trên trang web
>   2. Giúp viết JavaScript ngắn gọn hơn và hỗ trợ tương thích tốt giữa các trình duyệt

---

### 6.2. Tự đánh giá \& định hướng

> 1. Sau buổi lab, em tò mò nhất về phần nào của JavaScript/DOM?
> - Em tò mò nhất về cách JavaScript tương tác với DOM để thay đổi nội dung và giao diện trang web khi người dùng thao tác, ví dụ như bấm nút, nhập dữ liệu hoặc thay đổi màu sắc của trang
> 2. Em muốn tự làm thêm tính năng gì trên trang web (vd: bộ đếm, đổi theme, pop-up, mini game, …)?
> - Em muốn thử làm tính năng đổi theme (chế độ sáng/tối) hoặc một bộ đếm (counter) khi bấm nút để hiểu rõ hơn cách JavaScript xử lý sự kiện và thay đổi nội dung trên trang
> 3. Em đánh giá mức độ hiểu của mình về:
>    - Biến \& kiểu dữ liệu: [ ] Chưa hiểu  [ ] Tạm ổn  [☑] Khá rõ
>    - If/else \& hàm:       [ ] Chưa hiểu  [☑] Tạm ổn  [ ] Khá rõ
>    - DOM \& sự kiện:       [ ] Chưa hiểu  [☑] Tạm ổn  [ ] Khá rõ

---

## 7. GHI CHÚ CHO GIẢNG VIÊN (NỘI BỘ)

- Có thể cho SV làm theo cặp/nhóm 2–3 để hỗ trợ nhau thử nghiệm, đọc lỗi, tra cứu.
- Tùy thời lượng thực tế, có thể:
    - Giảm bớt phần mở rộng (hàm `kiemTraTuoi`, tuỳ biến thêm hiệu ứng).
    - Hoặc tăng thêm bài tập DOM (ẩn/hiện một khối, đếm số lần click, v.v.).
- Phiếu học tập tiếp theo có thể chi tiết hóa từng hoạt động thành form trả lời, chỗ dán ảnh, và câu hỏi mini test trắc nghiệm.

```

---```

