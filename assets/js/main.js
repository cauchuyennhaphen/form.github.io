function sendEmail(event) {
    event.preventDefault(); // Ngăn chặn hành vi gửi mặc định của form
  
    // Lấy thông tin từ các trường input
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var namsinh = document.getElementById("number").value;
    var truonghoc = document.getElementById("dropdown").value;
    var khoahoc = document.querySelector('select[name="khoahoc"]').value;
    var cauhoi = document.querySelector('.text-input').value;
    var loaihutro = document.querySelector('input[name="loaihotro"]:checked').value;
  
    // Tạo một object chứa các thông tin
    var templateParams = {
      from_name: name,
      reply_to: email,
      namsinh: namsinh,
      truonghoc: truonghoc,
      khoahoc: khoahoc,
      cauhoi: cauhoi,
      loaihotro: loaihotro
    };
  
    // Gửi email bằng EmailJS
    emailjs.sendForm('service_449yvds', 'template_e6qjour', '#survey-form', templateParams)
      .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        alert('Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất có thể.');
        document.getElementById('survey-form').reset(); // Xóa dữ liệu đã nhập trong form
      }, function(error) {
        console.log('FAILED...', error);
        if (error.status === 0) {
          alert("Không thể kết nối đến máy chủ. Vui lòng kiểm tra kết nối internet của bạn.");
        } else {
          alert("Có lỗi xảy ra khi gửi email. Vui lòng thử lại.");
        }
      });
  }
  