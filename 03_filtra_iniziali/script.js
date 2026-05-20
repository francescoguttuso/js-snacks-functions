/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
function filtroParola (lettere, lettereDaCercare) {
    const parole = [];
    
    for (let i = 0; i < lettere.length; i++) {
        const parola = lettere[i];
   
    const inizialeParola = parola[0];

if (inizialeParola === lettereDaCercare) {
    parole.push(parola);
        } 
    }
    return parole;
}



// Invoca la funzione qui e stampa il risultato in console

 const filtroLettereA = filtroParola (names,"A");
 console.log(filtroLettereA);

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]