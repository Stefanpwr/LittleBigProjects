var helpArray = [ "Wybierz kolor czcionki",
"Wybierz Twoją datę urodzenia",
"Oceń swoje umiejętności html5",
"Podeślij nam link do Twojej strony www",
"Wyszukaj",
"Wyślij nam swoje odpowiedzi",
"Usuń odpowiedzi"];
var helpText;

// initialize helpTextDiv and register event handlers
function init()
{
helpText = document.getElementById( "helpText" );
// register listeners
registerListeners( document.getElementById( "colorWell" ), 0 );
registerListeners( document.getElementById( "miesiac" ), 1 );
registerListeners( document.getElementById( "html5" ), 2 );
registerListeners( document.getElementById( "www" ), 3 );
registerListeners( document.getElementById( "szukaj" ), 4 );
registerListeners( document.getElementById( "przeslij" ), 5 );
registerListeners( document.getElementById( "zresetuj" ), 6 );

var form1 = document.getElementById( "form1" );
form1.addEventListener( "submit",
	function()
	{
	return confirm( "Are you sure you want to submit?" );
	}, // end anonymous function
	false );
	myForm.addEventListener( "reset",
	function()
	{
	return confirm( "Are you sure you want to reset?" );
	}, // end anonymous function
	false );

} // end function init
// utility function to help register events

function registerListeners( object, messageNumber ){
	object.addEventListener( "focus",
function() { helpText.innerHTML = helpArray[ messageNumber ]; },
false );
object.addEventListener( "blur",
function() { helpText.innerHTML = helpArray[ 6 ]; }, false );
}

window.addEventListener( "load", init, false );