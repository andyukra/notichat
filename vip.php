<?php

    include("database.php");

    $con = connect();

    if(isset($_POST)) {

        $ident = $_POST["ident"];

        if($ident == "usuario72") {

            $link = $_POST['link'];
            $titulo = $_POST['titulo'];
            $descrip = $_POST['descrip'];

            $consulta = "INSERT INTO chismes(link, titulo, descrip)values('$link', '$titulo', '$descrip')";

            mysqli_query($con, $consulta) or die ("error");

            mysqli_close($con);

            echo "bueno";

        } else {

            header("Location: index.html");

        }
        



    }

?>