function createCanvas()
{
 var side = 100;
 var tbody = document.getElementById( "tablebody" );
	for ( var i = 0; i < side; ++i )
	{
		var row = document.createElement( "tr" );
		for ( var j = 0; j < side; ++j ){ 
			var cell = document.createElement( "td" );
			row.appendChild( cell );
		} // end for
	tbody.appendChild( row );
	} // end for
	document.getElementById( "canvas" ).addEventListener("mousemove", processMouseMove, false );
}

function processMouseMove( e )
{
	if ( e.target.tagName.toLowerCase() == "td" )
	{
		// turn the cell blue if the Ctrl key is pressed
		if( e.ctrlKey)
		{
			e.target.setAttribute( "class", "blue" );
		} // end if
		// turn the cell red if the Shift key is pressed
		if( e.shiftKey){
			e.target.setAttribute( "class", "red" );
		} // end if
	} // end if
} // end function processMouseMove

window.addEventListener( "load", createCanvas, false );