<?php

    function connect() {
        
        $user = "dmjlsxys_andyukra";
        $pass = "Terminator87*";
        $server = "localhost";
        $db = "dmjlsxys_notichat";
        
        $con = mysqli_connect($server, $user, $pass, $db);
        
        return $con;
        
    }

?>