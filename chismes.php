<?php

    include("database.php");

    $con = connect();

    if(isset($_GET)) {

        $consulta = "SELECT * FROM chismes";

        $result = mysqli_query($con, $consulta);

        $json = array();

        while($fila = mysqli_fetch_array($result)) {

            array_push($json, $fila["link"]);
            array_push($json, $fila["titulo"]);
            array_push($json, $fila["descrip"]);

        }

        $final = json_encode($json);

        echo $final;

    }


?>