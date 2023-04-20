<?php

session_start();

$servername = "";

$username = "";

$password = "";

$dbname = "";




// Create connection

$conn = new mysqli($servername, $username, $password, $dbname);



// Check connection

if ($conn->connect_error) {

    die("Connection failed: " . $conn->connect_error);

}



// Get user data from form submission

$username = $_POST['username'];

$password = $_POST['password'];



// Query the database for the user with the given username

$sql = "SELECT * FROM users WHERE usersUid='$username'";

$result = $conn->query($sql);



// Check if the user was found

if ($result->num_rows == 1) {

    $row = $result->fetch_assoc();

    // Verify the password

    if (password_verify($password, $row['usersPwd'])) {

        // Password is correct, so start a new session

        session_regenerate_id();

        $_SESSION['loggedin'] = TRUE;

        $_SESSION['username'] = $username;

        $_SESSION['userid'] = $row['usersId'];



        // Set a cookie to store the session ID

        setcookie('username', $username, time() + 3600);





        header('Location: ../index.html?username=' . $username);

        exit;

    } else {

        // Password is incorrect

        echo '<script>alert("Incorrect username or password."); window.location.href="../pages/loginscreen.html";</script>';

        exit();

    }

} else {

    // User not found

    echo '<script>alert("Incorrect username or password."); window.location.href="../pages/loginscreen.html";</script>';

    exit();

}



$conn->close();



?>