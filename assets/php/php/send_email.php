<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require './vendor/PHPMailer/src/Exception.php';
require './vendor/PHPMailer/src/PHPMailer.php';
require './vendor/PHPMailer/src/SMTP.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $mail = new PHPMailer(true);

    try {
        // Cấu hình SMTP
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com'; // Thay bằng host của bạn
        $mail->SMTPAuth = true;
        $mail->Username = 'nguyendinhvucbgk28@gmail.com'; // Thay bằng email của bạn
        $mail->Password = 'Nguyendinhvucbgsd2003@'; // Thay bằng mật khẩu của bạn
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS; // Sử dụng SMTPS
        $mail->Port = 587; // Hoặc 587 nếu nhà cung cấp yêu cầu

        // Người gửi và người nhận
        $mail->setFrom('nguyendinhvucbgk28@gmail.com', 'Form hỗ trợ Nhà Phen'); // Thay bằng email của bạn
        $mail->addAddress('cautruyentruongphen@gmail.com', 'Tên người nhận'); // Thay bằng email nhận form

        // Nội dung email
        $mail->isHTML(true);
        $mail->Subject = 'Form liên hệ mới';
        $mail->Body    = "Họ tên: " . $_POST['name'] . "<br>" .
                        "Email: " . $_POST['email'] . "<br>" .
                        "Năm sinh: " . $_POST['number'] . "<br>" .
                        "Trường: " . $_POST['role'] . "<br>" .
                        "Khoá: " . $_POST['role'] . "<br>" .
                        "Câu hỏi: " . $_POST['text-input'] . "<br>" .
                        "Hỗ trợ: " . $_POST['position'];

        $mail->send();
        echo 'Message has been sent';
    } catch (Exception $e) {
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }
}
?>