<html>
<head>
    <title>
        Wyniki
    </title>
</head>

<body>


<?php
$mojeip =$_SERVER['REMOTE_ADDR'];
$tab[0] = '127.0.0.0';
$tab[1] = '127.0.0.2';
$tab[2] = '127.0.0.3';
$allowed = 'true';
for($x=0; $x < sizeof($tab); $x++){
    if($tab[$x]===$mojeip){
     $allowed= 'false';
}
}
$message = "Nie masz dostępu do tej strony";

if($allowed==='true')
{
    sleep(5);
    header("Location: spiders.html");
}
else
{
    sleep(2);
   header("Location: index.php");

    echo "<script type='text/javascript'>alert('$message');</script>";
}
?>




</body>
</html>