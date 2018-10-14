<?php
require_once  "Mail.php";

$from = "<sjnbusiness123@gmail.com>";
$to = "<sjnbusiness123@gmail.com>";
$subject = "Hi!";
$body = "Hi,\n\nHow are you?";

$host = "smtp.gmail.com";
$port = "587";
$username = "sjnbusiness123@gmail.com";
$password = "sjnBusiness12345";

$headers = array ('From' => $from,
  'To' => $to,
  'Subject' => $subject);
$smtp = Mail::factory('smtp',
  array ('host' => $host,
    'port' => $port,
    'auth' => true,
    'username' => $username,
    'password' => $password));

$mail = $smtp->send($to, $headers, $body);

if (PEAR::isError($mail)) {
  echo("<p>" . $mail->getMessage() . "</p>");
 } else {
  echo("<p>Message successfully sent!</p>");
 }

