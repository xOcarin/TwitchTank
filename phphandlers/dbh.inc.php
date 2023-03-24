<?php

$serverName = "localhost";
$dBUsername = "id20422256_ocarin";
$dBPassword = "PuI4LMR(3M5[)rAg";
$dBName = "id20422256_users";

// Create connection
$conn = new mysqli($serverName, $dBUsername, $dBPassword, $dBName);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get user data from form submission
$username = $_POST['username'];
$email = $_POST['email'];
$password = $_POST['password'];

// Hash the password
$password_hash = password_hash($password, PASSWORD_DEFAULT);

// Insert user data into database
$sql = "INSERT INTO users (usersUid, usersEmail, usersPassword) VALUES ('$username', '$email', '$password_hash')";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
