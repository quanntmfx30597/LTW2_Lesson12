// ===== Bước 2: form đăng nhập =====
const loginForm = document.getElementById("loginForm");
const oUsername = document.getElementById("username");
const oPassword = document.getElementById("password");
const oHienMatKhau = document.getElementById("hienmatkhau");
const khungThongTin = document.getElementById("thongtin");

// Hàm hiện hoặc ẩn mật khẩu
function hienMatKhau() {
  if (oHienMatKhau.checked) {
    oPassword.type = "text";
  } else {
    oPassword.type = "password";
  }
}

// Hàm hiển thị thông tin vừa nhập
function hienThongTin(event) {
  event.preventDefault();

  document.getElementById("tennguoidung").textContent = oUsername.value;
  document.getElementById("matkhau").textContent = oPassword.value;

  khungThongTin.hidden = false;
}

// Nối sự kiện cho ô hiện mật khẩu và form đăng nhập
oHienMatKhau.addEventListener("change", hienMatKhau);
loginForm.addEventListener("submit", hienThongTin);


// ===== Bước 4: kiểm tra mật khẩu đăng kí =====
const registerForm = document.getElementById("registerForm");
const oMatKhauDk = document.getElementById("matKhauDk");
const oNhapLai = document.getElementById("nhapLaiMatKhau");
const loiMatKhau = document.getElementById("loiMatKhau");
const thongBao = document.getElementById("thongBao");

// Hàm kiểm tra hai mật khẩu có giống nhau không
function kiemTraMatKhau() {
  if (oMatKhauDk.value !== oNhapLai.value) {
    loiMatKhau.hidden = false;
    return false;
  }

  loiMatKhau.hidden = true;
  return true;
}

// Hàm đăng kí
function dangKy(event) {
  event.preventDefault();

  if (kiemTraMatKhau() === false) {
    oNhapLai.focus();
    return;
  }

  const taiKhoan = document.getElementById("taiKhoan").value;

  thongBao.textContent = "Đăng kí thành công! Mời bạn đăng nhập.";
  thongBao.hidden = false;

  // Bước 5: đăng kí xong quay về form đăng nhập
  hienFormDangNhap();
  oUsername.value = taiKhoan;
  registerForm.reset();
}

// Nối sự kiện cho form đăng kí và ô nhập lại mật khẩu
registerForm.addEventListener("submit", dangKy);
oNhapLai.addEventListener("input", kiemTraMatKhau);


// ===== Bước 5: bấm nút để đổi qua lại 2 form =====
const khungDangNhap = document.getElementById("khungDangNhap");
const khungDangKy = document.getElementById("khungDangKy");

// Hàm hiện form đăng nhập
function hienFormDangNhap() {
  khungDangNhap.hidden = false;
  khungDangKy.hidden = true;
}

// Hàm hiện form đăng kí
function hienFormDangKy() {
  khungDangNhap.hidden = true;
  khungDangKy.hidden = false;
  thongBao.hidden = true;
}

// Nối sự kiện cho hai nút bên trái
document.getElementById("btnHienDangNhap").addEventListener("click", hienFormDangNhap);
document.getElementById("btnHienDangKy").addEventListener("click", hienFormDangKy);