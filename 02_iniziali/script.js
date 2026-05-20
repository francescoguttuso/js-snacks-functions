/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.

function iniziali(lettere){
    const inizialiParola = [];
    
    for (let i = 0; i <lettere.length; i++){
        const parola = lettere[i];
        const iniziale = parola[0];
        inizialiParola.push(iniziale);
    }
    return inizialiParola
}
// Invoca la funzione qui e stampa il risultato in console

const inizialiParole = iniziali (names);
console.log(inizialiParole);

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]