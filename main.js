/* Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma

Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto. */

/* Palindroma:
Inserire un prompt per far scrivere la parola all'utente.
Dividere la stringa in lettere singole e salvarla al contrario in una variabile reverse
Confrontare reverse con la parola iniziale */

const parola = prompt('Inserisci una parola');

function isPali(parola){
    const parolaLower = parola.toLowerCase();
    const lettere = parolaLower.split("");
    let lettereContrario = [];

    for (let i = lettere.length -1; i >= 0; i--){
        lettereContrario.push(lettere[i]);
    }
    const parolaContrario = lettereContrario.join('');

      if (parolaLower === parolaContrario) {
        console.log(`${parola} è un palindromo`);
    } else {
        console.log(`${parola} non è un palindromo`);
    }

}

isPali(parola);

/*Pari e Dispari:
Far scegliere all'utente Pari o Dispari
Fargli scegliere un numero
Far scegliere un numero al computer
Sommare i due numeri
Controllare se la somma è pari o dispari
Dichiarare il vincitore*/

let scelta = prompt("Scegli: pari o dispari").toLowerCase();
let numeroScelto = parseInt(prompt("Scegli un numero da 1 a 5"));
let numeroComputer = Math.floor(Math.random() * 5) + 1;
let somma = numeroScelto + numeroComputer;

if (scelta === "pari" || scelta === "dispari") {
    console.log(`Hai scelto: ${scelta}`);
} else {
    console.log("Scelta non valida. Devi scrivere 'pari' o 'dispari'.");
}

if(somma % 2 === 0 && scelta === "pari" || somma % 2 !== 0 && scelta === "dispari"){
    console.log("Complimenti hai vinto")
} else{
    console.log("Questa volta ha vinto il Computer");
}

