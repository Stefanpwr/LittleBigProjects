
window.addEventListener( "load", startup, false );

function startup() {
	var button = document.getElementById('bImages');
	
	button.addEventListener('click',function(){
		 var len = document.images.length;
            if (len == 0) {
                alert ("Nie ma obrazków na stronie.");
            }
            else {
                alert ("Jest " + len + " obrazków na stronie.");
            }
		
	},false);
}
