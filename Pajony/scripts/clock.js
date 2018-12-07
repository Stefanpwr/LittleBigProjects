function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('clock').innerHTML =
        h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}
function brak(){
    alert("Aktualnie trwa przerwa w dostawie pająków");
}
function aetana2(){
    var nazwa = document.getElementById('paj').innerHTML.toString();
    document.getElementById('miejsce').innerHTML=nazwa;
    zwieksz();
}

function aetana(){
    var nazwa = document.getElementById('aetana').innerHTML.toString();
    document.getElementById('miejsce').innerHTML=nazwa;
    zwieksz();
}
function zwieksz() {
    var ilsocc = document.getElementById('wartosc')
    var ilosRes = parseFloat(ilsocc.innerHTML);
    var result = ilosRes+1;
    var wynik = result.toString()
    ilsocc.innerHTML = wynik;
    if(wynik>10){
        alert("Nie za dużo?");
    }
}
