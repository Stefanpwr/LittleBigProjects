var colorWell;
var defaultColor = "white";

window.addEventListener("load", startup, false);

function startup() {
  colorWell = document.querySelector("#colorWell");
  colorWell.value = defaultColor;
  colorWell.addEventListener("input", updateFirst, false);
  colorWell.addEventListener("change", updateAll, false);
  colorWell.select();
}

function updateFirst(event) {
  var label = document.querySelector("label");

  if (label) {
    label.style.color = event.target.value;
  }
}

function updateAll(event) {
  document.querySelectorAll("label").forEach(function(label) {
    label.style.color = event.target.value;
  });
}
