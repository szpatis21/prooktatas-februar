"use strict";

/* //Keresd a legnagyobbat

a =Number(prompt("Kérem az első számot")) 
b =Number(prompt("Kérem a második számot")) 
c =Number(prompt("Kérem a harmadik számot"))

if (a > b && a > c){
alert("Az 1. szám a legnagyobb.")}
else if (b > a && b > c){
alert("A 2. szám a legnagyobb.")}
else if (c > a && c > b){
alert("A 3. szám a legnagyobb.")}
else ("Mindhárom szám egyenlő")
*/
function haromszog() {
  var a = Number(document.getElementsByName("1.oldal")[0].value);
  var b = Number(document.getElementsByName("2.oldal")[0].value);
  var c = Number(document.getElementsByName("3.oldal")[0].value);
  var szoveg = document.getElementById("eredmeny");
  var szoveg2 = document.getElementById("adatok");
  var ab = a + b;
  var bc = b + c;
  var ac = a + c;

  if (ab <= c || bc <= a || ac <= b || a <= 0 || b <= 0 || c <= 0) {
    szoveg.innerHTML = " Az oldalak hossza alapján ez nem lehet háromszög!";
  } else if (ab >= c || bc >= a || ac >= b) szoveg.innerHTML = " Ez egy valid háromszög és az oldalai alapján:";

  szoveg2.innerHTML = " Az első oldal hossza:" + a + " cm" + " A második oldal hossza: " + b + "A harmadik oldal hossza:" + c;

  if (a == b && b == c) {
    szoveg.innerHTML = " Ez egy egyenlő oldalú háromszög ";
  } else if (a == c || b == c || a == b) {
    szoveg.innerHTML = " Ez egy egyenlő szárú háromszög";
  } else {
    szoveg.innerHTML = " Ez egy általános háromszög. ";
  }
}

function myFunction(x) {
  x.style.background = "lime";
}

function myFunction2(x) {
  x.style.background = "white";
}

function alert1(x) {
  alert(" Te kis engedetlen! ");
}