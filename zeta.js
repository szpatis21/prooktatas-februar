function check (){
    
    elfogadom = reg2.confirm
        if (document.getElementById("confirmi").checked == false)
            {alert('El kell fogadnia az adatkezelési tájékoztatóban foglaltakat, hogy tovább léphessen!')}
}



var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 7000);    
}










function haromszog (){


    let a = Number (document.getElementsByName("1.oldal")[0].value)
    let b = Number (document.getElementsByName("2.oldal")[0].value)
    let c = Number (document.getElementsByName("3.oldal")[0].value)
    
    let szoveg = document.getElementById("eredmeny")
    let szoveg2 = document.getElementById("adatok")



    let ab = a+b
    let bc = b+c
    let ac = a+c

    if(ab <= c || bc <= a || ac <= b || a<=0 || b<=0 || c<=0) 
    {szoveg.innerHTML =" Az oldalak hossza alapján ez nem lehet háromszög!"}      
        else if (ab >= c || bc >= a || ac >= b)
        szoveg.innerHTML =" Ez egy valid háromszög és az oldalai alapján:"
        szoveg2.innerHTML =" Az első oldal hossza:" + a + " cm" + " A második oldal hossza: " + b + "A harmadik oldal hossza:" + c
            if(a == b && b == c ){
                szoveg.innerHTML =" Ez egy egyenlő oldalú háromszög "}
            else if (a == c || b == c || a == b ) {
                szoveg.innerHTML =" Ez egy egyenlő szárú háromszög"}
            else{
                szoveg.innerHTML =" Ez egy általános háromszög. "}
}
function myFunction(x) {
x.style.background = "lime";
}
function myFunction2(x) {
x.style.background = "white";}
function alert1(x) {
    alert(" Te kis engedetlen! ")}




