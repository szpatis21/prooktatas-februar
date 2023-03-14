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

document.write("<h1>Háromszög leíró</h1>")

agreed = confirm("Szeretné megmondani az oldalak hosszának alapján, hogy ez egy háromszög-e?")

if( agreed==false) {alert("Nem egyezett bele a számításba, így a számláló kilép.")}  
else {
            a =Number(prompt("Kérem az első oldalát a háromszögnek:")) 
            b =Number(prompt("Kérem a második oldalát a háromszögnek:")) 
            c =Number(prompt("Kérem a harmadik oldalát a háromszögnek:"))

            document.write("<h2> Háromszög paraméterei: </h2><br>")
            document.write("A oldal mérete: " + a, " cm","<br>")
            document.write("B oldal mérete: " + b, " cm","<br>")
            document.write("C oldal mérete: " + c, " cm","<br><br>")

            let ab = a+b
            let bc = b+c
            let ac = a+c

            if(ab <= c || bc <= a || ac <= b || a<=0 || b<=0 || a<=0) 
            {alert(" Az oldalak hossza alapján ez nem lehet háromszög!")}      
                else if (ab >= c || bc >= a || ac >= b)
                {document.write(" Ez egy valid háromszög és az oldalai alapján: <br>")

                    if(a == b && b == c ){
                    document.write(" Ez egy egyenlő oldalú háromszög.<br> ")}
                    else if (a == c || b == c || a == b ) {
                    document.write(" Ez egy egyenlő szárú háromszög.<br> ")}
                    else{
                    document.write(" Ez egy általános háromszög.<br> ")}
                }
    }