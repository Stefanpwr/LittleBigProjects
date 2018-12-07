
window.addEventListener( "load", startup, false );

function startup() {
	var button = document.getElementById('bForm');
	
	button.addEventListener('click',function(){
		 var x = document.forms[0];
		var txt = "Wprowadzone wartosci: <br>";
		var i;
		for (i = 0; i < x.length-7; i++) {
			if(i!=2)
				txt = txt + (i+1) + " " + x.elements[i].value + "<br>";
		}
		document.getElementById("tForm").innerHTML = txt;
		
	},false);
}

function wyslijdane() {
    var imie = document.getElementById('imie').value;
    var nazwisko = document.getElementById('nazwisko').value;
    var date = document.getElementById('data').value;
    var email = document.getElementById('email').value;
    var tele = document.getElementById('tel').value;
    alert("imie: " + imie + " naziwsko: " + nazwisko + " data: " + date + " email: " + email + " telefon: " + tele)
}


