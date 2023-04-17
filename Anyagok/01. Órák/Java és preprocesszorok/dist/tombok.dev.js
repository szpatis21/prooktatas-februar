"use strict";

//TÖMBÖK
document.write("<h1>Tömbök</h1>");
var lista = ["kenyér", "víz", "tej", "liszt"]; // tömb

lista.push("olaj"); // tömb megnevezés és új elem hozzáadása végére

lista.push("tészta", "vaj", "utolsó elem");
lista.unshift("első elem"); // tömb megnevezés és új elem hozzáadás az elejére

lista.pop(); // tömb megnevezése és utolsó elem törlése

lista.shift(); // tömb megeveése és első elem törlése

document.write(lista + "<br>"); // tömb kiíratása
//tömb elemeihez indexelésel (sorszámuk megadásával) férünk hozzá, a számozás 0-tól indul

document.write(lista[0] + "<br>"); // lista CSAK első elemének kiiratása

document.write(lista[6] + "<br><br>"); //csak az uccsó elem kiiratása

document.write(lista + "<br>");
lista[4] = "másik olaj"; // elem felülírása

document.write(lista + "<br><br>");
lista.length; // lista hossza meghatározása

document.write(lista.length + "<br><br>");

for (var i = 0; i < lista.length; i++) {
  lista[i] += " x db";
}

document.write(lista + "<br><br>"); // minden elem végére tűzzűk darab-ot

var szamok = [171, 8, 34];

for (var _i = 0; _i < szamok.length; _i++) //legyen egy i változó ami a 0túl kezd, amíg a változó értéke kisebb mint 3 (elemek száma) folytatódjon a ciklus
{
  szamok[_i] *= 2;
} //A ciklus a számok változó i elemét szorozza be kettővel


document.write(szamok + "<br></br>"); //OBJEKTUMOK

document.write("<h1>Objektumok</h1>");
var konyvem = {
  "cím": "Egri csillagok",
  "Szerző": "Gárdonyi Géza",
  "Kiadás": 1091
}; //konyvem.Szerző

document.write(konyvem.Szerző + "<br>"); //objektumneve.kulcs

document.write(konyvem["cím"] + "<br></br>"); //objektumneve.kulcs

konyvem.Kiadás = 1902; //felülírás

document.write(konyvem.Kiadás + "<br><br>");
var pizza = {
  "mérete": 45,
  "típus": " sonkás ",
  "feltét": " sonka, gomba, sajt  "
};
pizza.feltét = "sonka, paradicsom, sajt";
document.write(pizza.feltét, pizza.mérete, pizza.típus);
var autok = [{
  rendszam: "sdfadsafd",
  szin: "fehér",
  kiadasiev: 2020,
  alvaz: 1324234,
  elado: false,
  adatok: function adatok() {
    // objektumba lévő függvény = objktum metódus
    return "Az autóm rendszáma: " + this.rendszam + ", a színe pedig: " + this.szin + ". A kiadás éve: " + this.kiadasiev + ", alvázszmáma: " + this.alvaz + ".";
  }
}, {
  rendszam: "sdfadsafd",
  szin: "fehér",
  kiadasiev: 2020,
  alvaz: 1324234,
  elado: false,
  adatok: function adatok() {
    // objektumba lévő függvény = objktum metódus
    return "Az autóm rendszáma: " + this.rendszam + ", a színe pedig: " + this.szin + ". A kiadás éve: " + this.kiadasiev + ", alvázszmáma: " + this.alvaz + ".";
  }
}];

for (var _i2 = 0; _i2 < autok.length; _i2++) {
  document.getElementById("kiiras" + _i2).innerHTML = autok[_i2].adatok();
}