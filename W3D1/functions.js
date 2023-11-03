//"LIDIA".toLowerCase() //output -> Lidia
//console.log("lidia") // output -> lidia
// le funzioni trasformano input in output
// tra parentesi contengono i parametri 
//console.log("lidia", "due" "hello")
//Array.push("lidia", "ciao")
//Array.pop //no parametri

//let screwdriver = makeAcocktail('Orange juice', 'vodka', 300)

//creare f unzione per intestazione compiti 
//let intestazioneCompiti = function (numeroEsercizio) /*numeroEsercizio è un parametro*/ {
//console.log("esercizio" + numeroEsercizio)
//}
//intestazioneCompiti(12) // stampa esercizio 12
//intestazioneCompiti(40) // stampa esercizio 40
//intestazioneCompiti() // stampa esercizioundefined

//let areaRettangolo = function(x,y) {
//    console.log(x * y)
//}
//areaRettangolo(4,5)

let volumeParallelepipedo = function (x, y, z) {
    return x * y * z
}

let risultato = volumeParallelepipedo (4, 5, 6,)

const parallelepipedo = {
    altezza: 45, 
    larghezza: 65, 
    profondità: 12
}

let altroRisultato = volumeParallelepipedo(parallelepipedo.larghezza, parallelepipedo.altezza, parallelepipedo.profondità)
console.log(risultato)
console.log(altroRisultato)

function saluta() {
    console.log("Ciao, mondo!");
}
saluta(); // Questa chiamata eseguirà la funzione e stamperà "Ciao, mondo!" sulla console.
function salutaUtente(nome) {
    console.log("Ciao, " + nome + "!");
}

salutaUtente("Alice"); // Chiamata con l'argomento "Alice" stamperà "Ciao, Alice!" sulla console.

const cugini = [{
    nome: "Lidia",
    coloreOcchi:"marrone",
    isKovac:true,
    eta:25
}, {
    nome: "Simone",
    coloreOcchi: "verdi",
    isKovac: true, 
    eta:17
}, {
    nome:"Francesco",
    coloreOcchi:"azzurri", 
    isKovac: false, 
    eta: 27
}, {
    nome: "Emma", 
    coloreOcchi: "azzurri",
    isKovac: false,
    eta:14
}]

const stampaCugini = function (cugino) {
    let stringaFinale = "";
    stringaFinale += cugino.nome + " ";
  
    if (cugino.isKovac) {
      stringaFinale += "Kovac, ";
    } else {
      stringaFinale += ", ";
    }
  
    stringaFinale += cugino.eta + " anni";
    return stringaFinale;
  };
  
  for (let i = 0; i < cugini.length; i++) {
    let stringaCugino = stampaCugini(cugini[i]);
    console.log(stringaCugino);
  }