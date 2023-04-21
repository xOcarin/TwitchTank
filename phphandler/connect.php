<?php

$dbName = "Fish";
$u = "root";
$p = "literally123";

if ($conn = mysqli_connect("ip-172-31-14-70.us-east-2.compute.internal", $u, $p, $dbName)) {
    // Set timezone for the connection to Eastern Standard Time (US)
    mysqli_query($conn, "SET time_zone = '-05:00'");
}

?>