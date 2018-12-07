<!doctype html>
<html>
<head>
<?php

$value = $_POST['color'];
setcookie("kolor", $value, time()+ 40);

?>
    <meta charset="utf-8">
    <title>EFEKT ZMIAN</title>


</head>
<body>
<?php
echo $_COOKIE["kolor"]

?>
</body>
</html>