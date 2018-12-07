window.addEventListener("load", startup1, false);
window.addEventListener("load", startup2, false);


function startup1() {
  var button1 = document.getElementById('addLi');
var ol2 = document.getElementById('ol2');

var makeLi = document.createElement('li');
var makeText = document.createTextNode('Incertae sedis');

button1.addEventListener('click',function(){ ol2.appendChild(makeLi).appendChild(makeText); },false);
}

function startup2() {
  var button2 = document.getElementById('deleteLi');
var ol3 = document.getElementById('ol1');

button2.addEventListener('click',function(){ ol3.removeChild(ol3.lastElementChild)},false);
}

