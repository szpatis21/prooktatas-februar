"use strict";

//for ciklus
for (var i = 0; i < 11; i++) {
  //kezdőérték, feltétel(meddig fusson), lépték (++ = i+1)
  document.write(i + 1, ".sor<br>"); // ciklusmag
} //while ciklus


var j = 1;

while (j < 11) {
  //feltétel
  document.write(j, ".sor<br>");
  j++;
} //elágazások , ha teljesül egy feltétel akkor legalább 2 irányba elágazik

/*  
szam1 = prompt ("kérek egy számot")
szam2 = prompt ("kérek egy másik számot")

megerosit = confirm("Biztos kiszámolod?")

if(szam1 > szam2 && megerosit==true) {
    alert("<br>",szam1, " nagyobb mint ", szam2,"<br>") //ha igaz
} else if(szam1 < szam2){
     alert("<br>",szam1, " kisebb mint ", szam2,"<br>")
} else {
    alert("<br> A két szám egyenlő <br>) ") // ha hamis
}
*/


megerosit2 = confirm("Adja meg pontosan Pí értékét");
kerdes = prompt("Kérem Pí értékét");
var z = 3.14;

if (kerdes == z && megerosit2 == true) {
  alert("Ez a szám valóban 3.14"); //ha igaz
} else if (kerdes > z) {
  alert("Ez a szám nagyobb mint Pí");
} else {
  alert("Ez a szám kisebb mint Pí) "); // ha hamis
} //Beléptető felnőtt tartalmakhoz


eletkoruser = 70;

if (eletkoruser > 18) {
  document.write("<br>Megtekintheti az oldalt<br>");
} else if (eletkoruser < 18) {
  document.write("<br>Az oldalt csak nagykorúak látogathatják");
} else {
  document.write("<br>Gratulálunk, hogy most épp 18 éves");
} // 3 mal osztható számok kiírása 100 és 150 közt


for (var k = 100; k < 150; k++) {
  if (k % 3 == 0) {
    document.write("<br>", k);
  }
}
/*  felugró ablakok 
szam1 = prompt ("kérek egy számot")
szam2 = prompt ("kérek egy másik számot")

alert("Vigyázat")

//Terület számoló számbekrésésel
szam  =Number(prompt("Kérem A oldal hosszát")) 
szam1 =Number (prompt("Kérem B oldal hosszát")) 
alert("A téglalap területe:" + (szam + szam1)*2)



//Különbség megadása két szám bekéréséből
kiv1 =Number(prompt("Kérem az első számot")) 
kiv2 =Number(prompt("Kérem a második számot")) 

if (kiv1>kiv2){
    alert("Eredmény: " + (kiv1-kiv2))
}if (kiv1<kiv2){
    alert("Eredmény: " + (kiv2-kiv1))
}
*/
//Házi Kérjük be a háromszög oldalait,