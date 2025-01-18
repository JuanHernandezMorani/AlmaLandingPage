<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit();
}

require __DIR__ . '/../vendor/autoload.php'; 

use Dotenv\Dotenv;

$dotenv = Dotenv::createImmutable(__DIR__);
$dotenv->load();

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

$data = json_decode(file_get_contents('php://input'), true);

if (!$data) {
    echo json_encode(['success' => false, 'message' => 'No data received']);
    exit;
}

if (empty($data['email']) || empty($data['nombre']) || empty($data['mensaje'])) {
    echo json_encode(['success' => false, 'message' => 'Missing fields']);
    exit;
}

$mail = new PHPMailer(true);
try {
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = $_ENV['MAIL_USERNAME'];
    $mail->Password = $_ENV['MAIL_PASSWORD'];
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = 587;

    if (empty($data['email'])) {
        echo json_encode(['success' => false, 'message' => 'Invalid email address']);
        exit;
    }

    $mail->setFrom($data['email'], $data['nombre']);
    $mail->addAddress($_ENV['MAIL_USERNAME']);

    $mail->isHTML(true);
    $mail->Subject = 'Nuevo mensaje desde el formulario de contacto';
    $mail->Body    = 'Nombre: ' . htmlspecialchars($data['nombre']) . '<br>Email: ' . htmlspecialchars($data['email']) . '<br>Mensaje: ' . nl2br(htmlspecialchars($data['mensaje']));

    $mail->SMTPDebug = 2;
    
    $mail->send();
    echo json_encode(['success' => true, 'message' => 'Correo enviado con éxito']);
} catch (Exception $e) {
    echo json_encode(['success' => false, 'message' => 'Error al enviar el correo: ' . $mail->ErrorInfo]);
}
?>