
// initialize helpTextDiv and register event handlers
function init()
{
var form1 = document.getElementById( "form2" );
form1.addEventListener( "submit",
	function()
	{
	return confirm( "Jesteś pewnien że chcesz zgłosić błąd" );
	}, // end anonymous function
	false );
	myForm.addEventListener( "reset",
	function()
	{
	return confirm( "Jesteś pewnien że chcesz usunąć odpowiedzi?" );
	}, // end anonymous function
	false );

} // end function init
// utility function to help register events

window.addEventListener( "load", init, false );