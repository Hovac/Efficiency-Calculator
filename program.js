function izracunaj() {
    var usteda = prihodGodisnji * (efikasnost/100 + krada);
    var zaradaPoStolu = usteda / brojStolova;
    var investicija = cijenaStola * brojStolova;
    var mjesecnaRata = investicija * 0.5 / 12;
    var sveukupnaUsteda = usteda * 2 - investicija;
    sveukupnaUsteda = sveukupnaUsteda.toLocaleString();

    document.getElementById("sveukupnaUsteda").innerHTML = sveukupnaUsteda + " kn";
}


//inicijalizacija
var prihodKocka = document.getElementById("prihodBroj");
var konobarKocka = document.getElementById("konobarBroj");
var stoloviKocka = document.getElementById("stoloviBroj");

var izracunKraj = document.getElementById("izracunKraj");
var prihodSlider = document.getElementById("prihod");
var konobarSlider = document.getElementById("konobar");
var stoloviSlider = document.getElementById("stolovi");
var prihodGodisnji = prihodSlider.value * 1000000;
var brojKonobara = konobarSlider.value;
var brojStolova = stoloviSlider.value;

var placa = 4000;
var efikasnost = (((brojKonobara*placa*12)/prihodGodisnji)*0.5).toFixed(2);
var krada = 0.1;
var cijenaStola = 20000;

prihodKocka.value = prihodSlider.value * 1000000;
konobarKocka.value = konobarSlider.value;
stoloviKocka.value = stoloviSlider.value;

document.getElementById("postotakKrada").innerHTML = krada * 100 + "%";
document.getElementById("postotakEfikasnost").innerHTML = efikasnost * 100 + "%";


//Slider dio koda
prihodSlider.addEventListener("change", function () {
    prihodGodisnji = prihodSlider.value * 1000000;
    prihodKocka.value = prihodSlider.value * 1000000;
})

konobarSlider.addEventListener("change", function () {
    brojKonobara = konobarSlider.value;
    efikasnost = ((brojKonobara*placa*12)/prihodGodisnji)*0.5*100;
    efikasnost = efikasnost.toFixed(2);
    document.getElementById("postotakEfikasnost").innerHTML =efikasnost + "%";
    konobarKocka.value = konobarSlider.value; 
})

stoloviSlider.addEventListener("change", function () {
    brojStolova = stoloviSlider.value;
    stoloviKocka.value = stoloviSlider.value;
})

//number input dio koda
prihodKocka.addEventListener("change", function() {
    prihodSlider.value = prihodKocka.value / 1000000;
})

konobarKocka.addEventListener("change", function() {
    konobarSlider.value = konobarKocka.value;
    if(konobarKocka.value>30) {
        efikasnost = 0.04;
    }
    else if(konobarKocka.value<10) {
        efikasnost = 0.02;
    }
    else {
        efikasnost = 0.03;
    }
    document.getElementById("postotakEfikasnost").innerHTML = efikasnost * 100 + "%";
})

stoloviKocka.addEventListener("change", function() {
    stoloviSlider.value = stoloviKocka.value;
})


