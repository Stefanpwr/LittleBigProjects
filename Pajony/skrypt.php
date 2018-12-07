<html>
<head>
    <title>
        Wyniki
    </title>
</head>

<body>
Twoje ip: <?php echo $_SERVER['REMOTE_ADDR'];?> <br>
DANE KTÓRE PRZESŁAŁES : <br>
Imię: <?php echo $_POST['imie']?> <br>
Nazwisko:  <?php echo $_POST['nazwisko']?> <br>
Telefon: <?php echo $_POST['tel']?> <br>
E-Mail: <?php echo $_POST['email']?> <br>
Data urodzin <?php echo $_POST['data']?> <br>
Stanowisko : Redaktor <br>


<a href="index.php"><button>Okey!</button></a>
<a href="Joboffers.html"><button>Popraw</button></a>


</body>
</html>