const francesco = {
    nome: "Francesco",
    coloreOcchi: "azzurri",
    isKovac: false,
    isAmbassador: true, 
    eta: 27
}
const lidia = {
    nome: "Lidia",
    coloreOcchi: "marrone",
    isKovac: true, 
    eta: 25,
    isAmbassador: false,
}
const simone = {
    nome: "Simone",
    coloreOcchi: "verdi",
    isKovac: false, 
    eta: 17
}
const emma = {
    nome: "Emmma",
    coloreOcchi: "azzurri",
    isKovac: false, 
    eta: 14
}
if(emma.isKovac){ //se emma.isKovac è TRUE .. stampa "Emma ha il cognome Kovac"
    console.log("Emma ha il cognome Kovac")

} //non stampa nulla perchè emma.isKovac è FALSE

if(lidia.coloreOcchi === "marrone"){
    console.log("Lidia ha gli occhi marroni")
}

if((lidia.coloreOcchi === "verdi") || (emma.coloreOcchi === "marroni")){
    console.log("tepiacelapizza")
}
if((lidia.coloreOcchi === "marroni") || (emma.coloreOcchi === "azzurri")){
    console.log("shallalla")
}
if(emma.isAmbassador){
    console.log("Codice sconto sul carrello")
}else
{console.log("Ci siamo?")}

if(emma.isKovac){
    console.log("ayeye")
}else{console.log("brazorf")}

if(emma.isKovac){
    console.log("occhei")
}else{console.log("occai")}else
{(lidia.isKovac)}