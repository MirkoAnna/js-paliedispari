/*L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. 
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). 
Sommiamo i due numeri 
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) 
Dichiariamo chi ha vinto.*/


// FUNZIONI UTILI

// Creo una funzione che generi un numero casuale da 1 a 5
function numeroCasuale(numeroCpu) {
    numeroCpu = Math.floor((Math.random() * 5) + 1);
    return numeroCpu;
}

// Creo una funzione che controlli se un numero sia pari o dispari
function controllorePariDispari(numero) {
    if (numero % 2 == 0) {
        numero = 'Pari';
    }
    else {
        numero = 'Dispari';
    }
    return numero;
}

// Creo funzione che somma due numeri
function sommatore(numero1, numero2) {
    let calcoloSomma = numero1 + numero2;
    return calcoloSomma;
}

// FINE FUNZIONI UTILI


// Aggiungo l'evento che farà partire tutto cliccando su avvia.
let avvia = document.getElementById('start');
avvia.addEventListener('click',
function() {

// Chiedo al giocatore pari o dispari
let pariDispari = document.getElementById('even-odd').value;
console.log(pariDispari);

// Chiedo al giocatore numero da scegliere (COL PARSEINT!!! )
let numeroScelto = parseInt(document.getElementById('number-chosen').value);
console.log(numeroScelto);

// Riporto valore predefinito
document.getElementById('number-chosen').value = "0";
// document.getElementById('even-odd').value = "0";

// Richiamo la funzione che genera un numero casuale da 1 a 5 e l'assegno a numeroCpu
let numeroCpu = numeroCasuale();
console.log(numeroCpu);

// Visualizzo riassunto
document.getElementById('player-choice').innerHTML = 'Giocatore ha scelto: ' + numeroScelto;
document.getElementById('cpu-choice').innerHTML = 'Il computer ha scelto: ' + numeroCpu;

// Sommo  il numero del giocatore con quello del computer richiamando la funzione sommatore
let somma = sommatore(numeroScelto, numeroCpu);
document.getElementById('sum').innerHTML = 'La somma dei due numeri è: ' + somma;
console.log(somma);

// Verifico se la somma dei due numeri e pari o dispari richiamando la funzione controllorePariDispari
let risultato = controllorePariDispari(somma);
document.getElementById('result').innerHTML = risultato;
console.log(risultato);
console.log(pariDispari);

    // Creo condizioni vincita o perdita
    if (risultato === pariDispari) {
        // Rimuovo la classe che non voglio utilizzare per mandare messaggio
        document.getElementById('winner').classList.remove('loser');
        // Aggiungo la classe che voglio utilizzare per mandare messaggio
        document.getElementById('winner').classList.add('winner');
        document.getElementById('winner').innerHTML = 'Hai vinto!';
    } else {
        // Rimuovo la classe che non voglio utilizzare per mandare messaggio
        document.getElementById('winner').classList.remove('winner');
        // Aggiungo la classe che voglio utilizzare per mandare messaggio
        document.getElementById('winner').classList.add('loser');
        document.getElementById('winner').innerHTML = 'Hai perso, ritenta';
    }
}
);