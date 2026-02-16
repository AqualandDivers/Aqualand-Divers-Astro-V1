<?php

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
  http_response_code(405);
  exit("Method not allowed");
}

$name    = htmlspecialchars($_POST["name"]);
$email   = htmlspecialchars($_POST["email"]);
$message = htmlspecialchars($_POST["message"]);

$to      = "contact@twttesting.online";
$subject = "New Contact Form Message";

$body = "You received a new message:\n\n";
$body .= "Name: $name\n";
$body .= "Email: $email\n\n";
$body .= "Message:\n$message\n";

$headers = "From: contact@twttesting.online\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

if (mail($to, $subject, $body, $headers)) {
  header("Location: /thank-you");
  exit();
} else {
  echo "Error: message could not be sent.";
}
?>
