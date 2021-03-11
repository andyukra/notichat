<?php

    error_reporting(E_ALL);
    ini_set('display_errors', 1);

    include("database.php");

    $con = connect();

        $ip = $_SERVER["REMOTE_ADDR"];

        $nick = $_POST["nick"];
        
        mysqli_query($con, "INSERT INTO votacion(ip, nick)values('$ip', '$nick')") or die ("tramposo");

        mysqli_close($con);

         echo "bien";
       
?>