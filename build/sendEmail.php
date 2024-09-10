<?php
// if ($_SERVER["REQUEST_METHOD"] == "POST") {
//     $name = htmlspecialchars($_POST['name']);
//     $email = htmlspecialchars($_POST['email']);
//     $message = htmlspecialchars($_POST['message']);

//     $to = "mushel@gmail.com";
//     $subject = "New Contact Form Submission";
//     $body = "Name: $name\nEmail: $email\n\nMessage:\n$message";

//     $headers = "From: $email";

//     if (mail($to, $subject, $body, $headers)) {
//         echo "Message sent successfully!";
//     } else {
//         echo "Message sending failed.";
//     }
// }

header("Access-Control-Allow-Origin: *"); // Adjust this for security in production
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");
?>

<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Email content
    $to = 'mushel@gmail.com';
    $subject = 'New Contact Form Submission from info.mcurrier.com';
    $body = "Name: $name\nEmail: $email\nMessage: $message";

    // Send email
    if (mail($to, $subject, $body)) {
        echo json_encode(['success' => true, 'message' => 'Email sent successfully']);
    } else {
        echo json_encode(['success' => false, 'message' => 'Email sending failed']);
    }
}
?>

