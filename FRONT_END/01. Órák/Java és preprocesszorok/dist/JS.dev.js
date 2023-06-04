"use strict";

// Sztringek (egyszerű szöveg)
document.write("ezt JS-ből írtam<br>");
document.write("ez már jól megy<br><hr>"); // Egyszerű string konzolon 

console.log("html oldal script"); // EGyszerű string az oldalon 

console.log("Első" + "Második"); // Összefűzés 

console.log("valami" == "valami");
console.log(15 == "15"); // Nem szigorű összehasonlítás 

console.log(15 === "15"); // Szigorú összehasonlítás (egyik szöveg másik szám) 
// Operátorok (alapvető műveletek)  

console.log(5 + 2);
console.log(5 - 2);
console.log(5 * 2);
console.log(5 / 2);
console.log(5 % 2); //maradékos osztás 

console.log("szöveg" - 12); //Nan: not a number 
//Összehasonlító operátorok <> 

console.log(5 >= 2);
console.log(5 == 2); // Egyenlő 

console.log(5 != 2); // Nem egyenlő 

console.log(5 + 3 <= 8 * 6 - 15); //öszetett számítás

var szam = 15; //  feladat:változók létrehozáasa és a velük való összadás kííratása 

var szamii = 15;
var eredmeny = szam + szamii;
document.write(szam, "+", szamii, "=", eredmeny, "<br>");

function osszeadas(a, b) {
  //függvény
  var szam = a;
  var szamii = b;
  var eredmeny = szam + szamii;
  document.write(szam, "+", szamii, "=", eredmeny, "<br>", "<br>");
}

osszeadas(1, 2); //függvény megívása 

var szamiii = 90; //függvény meghívása függvényből

var szamiv = 80;

function osszeadasii(e, f) {
  var szamiii = e;
  var szamiv = f;
  return eredmenyii = szamiii + szamiv; //visszatérési érték maga az eredmény. Nem csinál semmit csak számol
}

function osszegkiir() {
  //Kiíró függvény: önmagában csak kíír, de meghív eredménynek egy függvényt ami számol.
  document.write(szamiv, "+", szamiii, "=", osszeadasii(szamiii, szamiv), "<br>", "<br>");
}

osszegkiir();

function tk(c, d) {
  // feladat: függvény írása és meghívása - terület számoló
  var ao = c;
  var bo = d;
  var t = c * d;
  var k = 2 * c + 2 * d;
  document.write("<i>Az első oldal hosszúsága = ", ao, " cm.</i><br> ", "<i> A második oldal hosszúsága = ", bo, " cm.</i><br>", " Ezért a téglalap területe:<i><b> ", t, " cm</b></i>", " kerülete pedig: <i><b> ", k, " cm</b></i>");
}

tk(90, 10); //Projekt: Számológép az alapvető műveletekkel és fügvény meghívással

document.write("<hr><h1>Számológép</h1>");

function ossz(szi, szii) {
  var numb = szi;
  var numbii = szii;
  var o = numb + numbii;
  document.write("A<sub>(z)</sub> <i>", numb, "</i> és a<sub>(z)</sub> <i>", numbii, "</i> összege:<i><ins>", o, "</ins></i><br>");
}

function kiv(szi, szii) {
  var numb = szi;
  var numbii = szii;
  var o = numb - numbii;
  document.write("A<sub>(z)</sub> <i>", numb, "</i> és a<sub>(z)</sub> <i>", numbii, "</i> különbsége:<i><ins>", o, "</ins></i><br>");
}

function szor(szi, szii) {
  var numb = szi;
  var numbii = szii;
  var o = numb * numbii;
  document.write("A<sub>(z)</sub> <i>", numb, "</i> és a<sub>(z)</sub> <i>", numbii, "</i> szorzata:<i><ins>", o, "</ins></i><br>");
}

function oszt(szi, szii) {
  var numb = szi;
  var numbii = szii;
  var o = numb / numbii;
  var mo = numb % numbii;
  document.write("A<sub>(z)</sub> <i>", numb, "</i> és a<sub>(z)</sub> <i>", numbii, "</i> osztaléka:<i><ins>", o, "</ins></i>", " és a maradéka:<i><ins>", mo, "</ins></i><hr><br>");
} //meghívás


kiv(10, 5);
ossz(20, 10);
szor(30, 15);
oszt(40, 20);
document.write("<h1>Számológép II.</h1>");

function szg(szi, szii) {
  var numb = szi;
  var numbii = szii;
  var o = numb + numbii;
  var k = numb - numbii;
  var sz = numb * numbii;
  var so = numb / numbii;
  var mo = numb % numbii;
  document.write("A<sub>(z)</sub> <i>", numb, "</i> és a<sub>(z)</sub> ", numbii, ":<br><br>", "<b>összege</b>: ", o, "<br>", "<b>különbsége</b>: ", k, "<br>", "<b>szorzata</b>: ", sz, "<br>", "<b>osztaléka:</b> ", so, "<br>", "<b>és a maradéka</b>: ", mo, "<br>");
}

szg(100, 100);