const pizzak = [{
    
    név: "Hawaii",
    méret : 28,
    szószalap : "paradicsomos",
    feltétek: "sonka, ananász, szósz",
    adatok : function(){ 
        return "Ez a pizza egy: " + this.név + 
        " pizza , mérete: " + this.méret + "cm " 
        + this.szószalap + "alapszósszal, és a következő feltéteket tartalmazza: " + this.feltétek+ "."            
    },
    adatok2 : function(){ 
        return "<h1>" +this.név}
},{
    név: "Hawaii extra",
    méret : 35,
    szószalap : " csípős paradicsomos",
    feltétek: "sonka, ananász, szósz, erős paprika, gomba",
    adatok : function(){ 
        return "Ez a pizza egy: " + this.név + 
        " pizza , mérete: " + this.méret + "cm " 
        + this.szószalap + "alapszósszal, és a következő feltéteket tartalmazza: " + this.feltétek+ "."            
    },
    adatok2 : function(){ 
        return "<h1>" + this.név}
},{
    név: "Hawaii álom",
    méret : 45,
    szószalap : " választható",
    feltétek: "sonka, ananász, szósz, erős paprika, gomba + 2 fajta választható feltét",
    adatok : function(){ 
        return "Ez a pizza egy: " + this.név + 
        " pizza , mérete: " + this.méret + "cm " 
        + this.szószalap + " szósszal, és a következő feltéteket tartalmazza: " + this.feltétek+ "."            
    },
    adatok2 : function(){ 
        return "<h1>" +this.név}
}]

for (let i=0; i < pizzak.length; i++){
    document.getElementById("kiiras"+i).innerHTML = pizzak[i].adatok()}
for (let j=0; j < pizzak.length; j++){
    document.getElementById("nev"+j).innerHTML = pizzak[j].adatok2()}
      
    function alert1(x) {
            alert(" 3000 Ft ")}
    function alert2(x) {
            alert(" 4000 Ft ")}
    function alert3(x) {
            alert(" 5000 Ft ")}