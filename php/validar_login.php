<?php

$usuario = $_POST['usuario'];
$password = $_POST['password'];

if ($usuario == "admin" && $password == "1234"){
    header("location:.../mazo_de_cartas.php");
}
else{
    ?>
    <script>
        alert("Error el usuario y/o la contraseña no son correctos");
    </script>
    <?php
}
?>