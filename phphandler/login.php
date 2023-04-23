<?php

if (session_status() !== PHP_SESSION_ACTIVE) {
    session_start();
}

require_once 'connect.php';
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Get user data from form submission
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Query the database for the user with the given username
    $sql = "SELECT * FROM users WHERE username='$username'";
    $result = mysqli_query($conn, $sql);
    $row = mysqli_fetch_assoc($result);

    // Check if the user was found
    if (mysqli_num_rows($result) == 1 && password_verify($password, $row['password'])) {
        // Password is correct, so start a new session
        session_regenerate_id();
        $_SESSION['loggedin'] = TRUE;
        $_SESSION['username'] = $username;
        $_SESSION['user_id'] = $row['user_id'];
        // Set a cookie to store the session ID
        setcookie('username', $username, time() + 3600);
        header('Location: http://localhost:3000/main.html?username=' . $username);
        exit;
    } else {
        // Password is incorrect
        echo "Incorrect username or password";
        echo '<script>alert("Incorrect username or password."); window.location.href="http://localhost:3000/index.html";</script>';
        exit();
    }

    $conn->close();
}

?>
