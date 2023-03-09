// Sztringek (egyszerű szöveg)

document.write("ezt JS-ből írtam<br>")
document.write("ez már jól megy<br><hr>") // Egyszerű string konzolon 
console.log("html oldal script")  // EGyszerű string az oldalon 
console.log("Első" + "Második") // Összefűzés 
console.log("valami" == "valami")
console.log(15 == "15") // Nem szigorű összehasonlítás 
console.log(15 === "15") // Szigorú összehasonlítás (egyik szöveg másik szám) 

// Operátorok (alapvető műveletek)  

console.log(5+2)
console.log(5-2)
console.log(5*2)
console.log(5/2)
console.log(5%2) //maradékos osztás 
console.log("szöveg" - 12) //Nan: not a number 

//Összehasonlító operátorok <> 

console.log(5>=2)
console.log(5==2) // Egyenlő 
console.log(5!=2) // Nem egyenlő 
console.log((5+3)<= (8*6-15))




let szam = 15
let szamii= 15
let eredmeny = szam + szamii
document.write(szam, "+",szamii, "=", eredmeny,"<br>")


function osszeadas(a,b){ //függvény
    let szam = a
    let szamii= b
    let eredmeny = szam + szamii    
    document.write(szam, "+",szamii, "=", eredmeny, "<br>","<br>")
}

osszeadas(szam,szamii)//függvény megívása 



function terulet(c,d){
    let ao = c
    let bo = d 
    let t = c * d
    document.write("<i>Az első oldal hosszúsága = " , ao , " cm.</i><br> ", 
    "<i> A második oldal hosszúsága = ", bo," cm.</i><br>",
     " Ezért <b>(T=a-oldal * b-oldal)</b> a téglalap területe:<i><b> ", t, " cm</b></i>. <hr>", )
}

terulet(90,10)


function szorzas (c,d){
    return c*d
        document.write("A ", ao, " és a ", bo, " szorzata ", szorzas(bo,ao),"<hr><br><br><br><br>")
    }

//Projekt: Számológép az alapvető műveletekkel és fügvény meghívással

document.write("<h1>Számológép</h1>")

function ossz(szi,szii){
    let numb = szi 
    let numbii = szii 
    let o = szi + szii
        document.write("A(z) <i>", numb, "</i> és a(z) <i>", numbii, "</i> összege:<i><ins>", o ,"</ins></i><hr><br>")
    }
function kiv(szi,szii){
    let numb = szi 
    let numbii = szii 
    let o = szi - szii
    document.write("A(z) <i>", numb, "</i> és a(z) <i>", numbii, "</i> különbsége:<i><ins>", o ,"</ins></i><hr><br>")
    }
function szor(szi,szii){
    let numb = szi 
    let numbii = szii 
    let o = szi * szii
    document.write("A(z) <i>", numb, "</i> és a(z) <i>", numbii, "</i> szorzata:<i><ins>", o ,"</ins></i><hr><br>")
    }
function oszt(szi,szii){
    let numb = szi 
    let numbii = szii 
    let o = szi / szii
    let mo =szi % szii
    document.write("A(z) <i>", numb, "</i> és a(z) <i>", numbii, "</i> szorzata:<i><ins>", o ,
    "</ins></i>"," és a maradéka<i><ins>: ", mo,  "</ins></i><hr><br>")
    }
    
                        kiv(10,5)
                        ossz(20,10)
                        szor(30,15)
                        oszt(40,20)