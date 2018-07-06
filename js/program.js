function izracunaj() {
    var usteda = prihodGodisnji * (efikasnost / 100 + krada);
    var zaradaPoStolu = usteda / brojStolova;
    var investicija = cijenaStola * brojStolova;
    var mjesecnaRata = investicija * 0.5 / 12;
    var sveukupnaUsteda = usteda * 2 - investicija;
    sveukupnaUsteda = sveukupnaUsteda.toLocaleString();
    mjesecnaRata = mjesecnaRata.toFixed(2);

    if (kunaButton.checked) {
        document.getElementById("sveukupnaUsteda").innerHTML = sveukupnaUsteda + " kn";
        document.getElementById("mjesecnaRata").innerHTML = mjesecnaRata + "kn";
    
    }
    else if(euroButton.checked) {
        document.getElementById("sveukupnaUsteda").innerHTML = sveukupnaUsteda + " &#8364;";
        document.getElementById("mjesecnaRata").innerHTML = (mjesecnaRata/7.4).toFixed(2) + "&#8364;";
    
    }
    else if(dollarButton.checked) {
        document.getElementById("sveukupnaUsteda").innerHTML = sveukupnaUsteda + " &#36;";
        document.getElementById("mjesecnaRata").innerHTML = (mjesecnaRata/6.3).toFixed(2) + "&#36;";
    }
}

function sliderChange() {
    prihodGodisnji = prihodSlider.value * 1000000;
    prihodKocka.value = prihodGodisnji / 1000000;

    brojKonobara = konobarSlider.value;
    konobarKocka.value = brojKonobara;

    brojStolova = stoloviSlider.value;
    stoloviKocka.value = brojStolova;

    konobarPlaca = placaSlider.value;
    placaKocka.value = konobarPlaca;

    document.getElementById("sveukupnaUsteda").innerHTML = "...";
    document.getElementById("mjesecnaRata").innerHTML = "...";

    efficiency(brojKonobara, konobarPlaca, prihodGodisnji);
}

function numberBox() {
    prihodGodisnji = prihodKocka.value * 1000000;
    prihodSlider.value = prihodGodisnji / 1000000;

    brojKonobara = konobarKocka.value;
    konobarSlider.value = brojKonobara;

    brojStolova = stoloviKocka.value;
    stoloviSlider.value = brojStolova;

    konobarPlaca = placaKocka.value;
    placaSlider.value = konobarPlaca;

    document.getElementById("sveukupnaUsteda").innerHTML = "...";
    document.getElementById("mjesecnaRata").innerHTML = "...";

    efficiency(brojKonobara, konobarPlaca, prihodGodisnji);
}


function efficiency(konobar, konobarPlata, prihod) {
    efikasnost = ((konobar * konobarPlata * 12) / prihod) * 0.5 * 100;
    efikasnost = efikasnost.toFixed(2);
    document.getElementById("postotakKrada").innerHTML = krada * 100 + "%";
    document.getElementById("postotakEfikasnost").innerHTML = efikasnost + "%";
}


//prihvati sve elemente
var prihodKocka = document.getElementById("prihodBroj");
var konobarKocka = document.getElementById("konobarBroj");
var stoloviKocka = document.getElementById("stoloviBroj");
var placaKocka = document.getElementById("konobarPlacaBroj");

var prihodSlider = document.getElementById("prihod");
var konobarSlider = document.getElementById("konobar");
var stoloviSlider = document.getElementById("stolovi");
var placaSlider = document.getElementById("konobarPlaca");

var kunaButton = document.getElementById("kuna");
var euroButton = document.getElementById("euro");
var dollarButton = document.getElementById("dollar");

//Slider dio koda
sliders = document.querySelectorAll('.sliderDot');
sliders.forEach(slider => slider.addEventListener('input', sliderChange));

//numberBox dio koda
numbers = document.querySelectorAll('.numberDot');
numbers.forEach(number => number.addEventListener('input', numberBox));

//pretvorba para ako postoji
radios = document.querySelectorAll('.radioDot');
radios.forEach(radio => radio.addEventListener('input', izracunaj));


//postavi početne brojeve
var prihodGodisnji = prihodSlider.value * 1000000;
prihodKocka.value = prihodGodisnji / 1000000;

var brojKonobara = konobarSlider.value;
konobarKocka.value = brojKonobara;

var brojStolova = stoloviSlider.value;
stoloviKocka.value = brojStolova;

var konobarPlaca = placaSlider.value;
placaKocka.value = konobarPlaca;

var krada = 0.1;
var cijenaStola = 20000;

efficiency(brojKonobara, konobarPlaca, prihodGodisnji);

document.getElementById("sveukupnaUsteda").innerHTML = "...";
document.getElementById("mjesecnaRata").innerHTML = "...";

document.getElementById('Calculate').addEventListener('click', izracunaj);