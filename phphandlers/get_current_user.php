<?php
session_start();

if (isset($_SESSION['username'])) {
  $username = $_SESSION['username'];
  echo json_encode(array('username' => $username));
} else {
  header('HTTP/1.1 401 Unauthorized');
  exit();
}
?>
