<?php

    include("database.php");

    $con = connect();

    
    if(isset($_GET)) {
        
        
        $pet = "SELECT nick FROM votacion";
        
        $result = mysqli_query($con, $pet);
        
        while($fila = mysqli_fetch_array($result)) {
            
 
            echo $fila["nick"];
            echo "&";
            
        }
        
    }


?>