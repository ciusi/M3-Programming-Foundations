// ESERCIZIO 1: Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
// La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.

function crazySum(numero1, numero2) {
  if (numero1 === numero2){
    return (numero1 + numero2) * 3;
  } else {
    return (numero1 + numero2)
  }
}

//funziona?
console.log(crazySum(2, 2)); // Output: 12 (3 * (2 + 2) = 12)
console.log(crazySum(3, 4)); // Output: 7 (3 + 4 = 7)

/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/
function boundary(numero3) {
  if (numero3 === 400 || (numero3 >= 20 && numero3 <= 100)) {
    return true;
  } else {
    return false;
  }
}

//funziona?
console.log(boundary(50))
console.log(boundary(10))

/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

function reverseString(stringaContraria) {
  // Dividiamo la stringa in un array di caratteri
  let stringaDivisa = stringaContraria.split("");

  // Invertiamo l'array di caratteri
  let stringaReverse = stringaDivisa.reverse();

  // Uniamo gli elementi invertiti per ottenere la stringa finale
  let stringaFinale = stringaReverse.join("");

  // Restituisci la stringa invertita
  return stringaFinale;
}

// Esempio di utilizzo della funzione:
console.log(reverseString("EPICODE")); // Output: "EDOCIEP"

/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

function upperFirst(stringaMinuscola) {
  // Divido la stringa in parole usando lo spazio come separatore
  let parole = stringaMinuscola.split(" ");

  // Itero attraverso ciascuna parola e rendo maiuscola la prima lettera
  for (let i = 0; i < parole.length; i++) {
    parole[i] = parole[i].charAt(0).toUpperCase() + parole[i].slice(1);
  }

  // Uniamo le parole in una nuova stringa e restituiamo il risultato
  return parole.join(" ");
}

// Esempio di utilizzo della funzione:
console.log(upperFirst("giulia")); // Output: "Giulia"
console.log(upperFirst("luigi"))