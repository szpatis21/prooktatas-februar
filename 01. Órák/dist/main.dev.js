"use strict";

document.write("ezt JS-ből írtam<br>");
document.write("ez már jól megy<br><hr>");
/* Egyszerű string konzolon */

console.log("html oldal script");
/* EGyszerű string az oldalon */

console.log("Első" + "Második");
/* Összefűzés */

console.log("valami" == "valami");
console.log(15 == "15");
/* Nem szigorű összehasonlítás */

console.log(15 === "15");
/* Szigorú összehasonlítás (egyik szöveg másik szám) */

/* operátorok  */

console.log(5 + 2);
console.log(5 - 2);
console.log(5 * 2);
console.log(5 / 2);
console.log(5 % 2);
/* maradékos osztás */

console.log("szöveg" - 12); //Nan -not a number 
//Összehasonlító operátorok <> 

console.log(5 >= 2);
console.log(5 == 2); // egyenlő 

console.log(5 != 2); // Nem egyenlő 

console.log(5 + 3 <= 8 * 6 - 15);
var szam = 15;
var szamii = 15;
var eredmeny = szam + szamii;
document.write(szam, "+", szamii, "=", eredmeny, "<br>");

function osszeadas(a, b) {
  var szam = a;
  var szamii = b;
  var eredmeny = szam + szamii;
  document.write(szam, "+", szamii, "=", eredmeny, "<br>", "<br>");
}

osszeadas(szam, szamii); //megívás 

function terulet(c, d) {
  var ao = c;
  var bo = d;
  var t = c * d;
  document.write("<i>Az első oldal hosszúsága = ", ao, " cm.</i><br> ", "<i> A második oldal hosszúsága = ", bo, " cm.</i><br>", " Ezért <b>(T=a-oldal * b-oldal)</b> a téglalap területe:<i><b> ", t, " cm</b></i>. <hr>");
}

terulet(90, 10);

function szorzas(c, d) {
  return c * d;
  document.write("A ", ao, " és a ", bo, " szorzata ", szorzas(bo, ao), "<hr><br><br><br><br>");
}

document.write("<h1>Számológép</h1>");

function ossz(szi, szii) {
  var numb = szi;
  var numbii = szii;
  var o = szi + szii;
  document.write("A(z) <i>", numb, "</i> és a(z) <i>", numbii, "</i><b> összege:</b><i><ins>", o, "</ins></i><hr><br>");
}

function kiv(szi, szii) {
  var numb = szi;
  var numbii = szii;
  var o = szi - szii;
  document.write("A(z) <i>", numb, "</i> és a(z) <i>", numbii, "</i><b> különbsége:</b><i><ins>", o, "</ins></i><hr><br>");
}

function szor(szi, szii) {
  var numb = szi;
  var numbii = szii;
  var o = szi * szii;
  document.write("A(z) <i>", numb, "</i> és a(z) <i>", numbii, "</i><b> szorzata:</b><i><ins>", o, "</ins></i><hr><br>");
}

function oszt(szi, szii) {
  var numb = szi;
  var numbii = szii;
  var o = szi / szii;
  var mo = szi % szii;
  document.write("A(z) <i>", numb, "</i> és a(z) <i>", numbii, "</i><b> szorzata:</b><i><ins>", o, "</ins></i>", " és a maradéka ", mo, "<hr><br>");
}

kiv(10, 5);
ossz(20, 10);
szor(30, 15);
oszt(40, 20);