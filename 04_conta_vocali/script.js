/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
function numeroVocaliParola (parola) {
let conteggio = 0;
for (let i = 0; i < parola.length; i++) {
const parolaNuova = parola[i];
if (parolaNuova === "a" || parolaNuova === "e" || parolaNuova === "i" || parolaNuova === "o" || parolaNuova === "u") {
   conteggio += 1;
}

} 
return conteggio;
}



// Invoca la funzione qui e stampa il risultato in console

console.log(numeroVocaliParola ("javascript"));

//Risultato atteso se si passa 'javascript': 3 (a, a, i)