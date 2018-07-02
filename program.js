function izracunaj() {

    var usteda = prihodGodisnji * (efikasnost / 100 + krada);
    var zaradaPoStolu = usteda / brojStolova;
    var investicija = cijenaStola * brojStolova;
    var mjesecnaRata = investicija * 0.5 / 12;
    var sveukupnaUsteda = usteda * 2 - investicija;
    sveukupnaUsteda = sveukupnaUsteda.toLocaleString();

    document.getElementById("sveukupnaUsteda").innerHTML = sveukupnaUsteda + " kn";
}

function sliderChange() {
    prihodGodisnji = prihodSlider.value * 1000000;
    prihodKocka.value = prihodGodisnji / 1000000;

    brojKonobara = konobarSlider.value;
    konobarKocka.value = brojKonobara;

    brojStolova = stoloviSlider.value;
    stoloviKocka.value = brojStolova;

    efficiency(brojKonobara, prihodGodisnji);
}

function numberBox() {
    prihodGodisnji = prihodKocka.value * 1000000;
    prihodSlider.value = prihodGodisnji / 1000000;

    brojKonobara = konobarKocka.value;
    konobarSlider.value = brojKonobara;

    brojStolova = stoloviKocka.value;
    stoloviSlider.value = brojStolova;

    efficiency(brojKonobara, prihodGodisnji);
}

function efficiency(konobar, prihod) {
    efikasnost = ((konobar * placa * 12) / prihod) * 0.5 * 100;
    efikasnost = efikasnost.toFixed(2);
    document.getElementById("postotakEfikasnost").innerHTML = efikasnost + "%";
}


//prihvati sve elemente
var prihodKocka = document.getElementById("prihodBroj");
var konobarKocka = document.getElementById("konobarBroj");
var stoloviKocka = document.getElementById("stoloviBroj");

var prihodSlider = document.getElementById("prihod");
var konobarSlider = document.getElementById("konobar");
var stoloviSlider = document.getElementById("stolovi");

var izracunKraj = document.getElementById("izracunKraj");

//postavi početne brojeve
var prihodGodisnji = prihodSlider.value * 1000000;
var brojKonobara = konobarSlider.value;
var brojStolova = stoloviSlider.value;

prihodKocka.value = prihodSlider.value;
konobarKocka.value = konobarSlider.value;
stoloviKocka.value = stoloviSlider.value;
var placa = 4000;
var krada = 0.1;
var cijenaStola = 20000;

efficiency(brojKonobara, prihodGodisnji);


document.getElementById("postotakKrada").innerHTML = krada * 100 + "%";
document.getElementById("postotakEfikasnost").innerHTML = efikasnost + "%";

//Slider dio koda
sliders = document.querySelectorAll('.sliderDot');
sliders.forEach(slider => slider.addEventListener('input', sliderChange));

//numberBox dio koda
numbers = document.querySelectorAll('.numberDot');
numbers.forEach(number => number.addEventListener('change', numberBox));

document.getElementById('Calculate').addEventListener('click', izracunaj);