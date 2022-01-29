/*Chiedere all’utente di inserire una parola 
Creare una funzione per capire se la parola inserita è palindroma*/


// Collego il pulsante che darà l'avvio del mio programma al click.
let invio = document.getElementById('invio');
invio.addEventListener('click',
function() {

    // Creo una funzione che legge la parola al contrario
    function inversore(parola) {
    
        parola = '';
        let i = nuovaParola.length - 1;
        
        while (i >= 0) {
            parola += nuovaParola[i];
            
            i--;
        } 
        
        return parola;
    
    }

        // Chiedo all'utente di inserire una parola
        let nuovaParola = document.getElementById('text').value;
        // Applico condizioni affinché il valore inserito sia un numero.
        if (nuovaParola != isNaN()) {
            document.getElementById('word-insert').innerHTML = "Parola inserita: " + nuovaParola;
            // Visualizzo nuova parola su console
            console.log('Parola inserita: ' + nuovaParola);
        } else {
            document.getElementById('word-insert').innerHTML = "Perfavore inserisci una parola";
            console.log('Non hai inserito una parola');
        }
        // Riporto placeholder vuoto.
        document.getElementById('text').value = "";
        // Inverto la parola inserita con il programma creato richiamando la funzione
        let parola = inversore();
        document.getElementById('inverted-word').innerHTML = nuovaParola + " => " + parola;
        console.log(nuovaParola + " => " + parola);

        // Verifico condizioni
        if (parola == nuovaParola) {
            console.log('Questa parola è palindroma');
            document.getElementById('palindroma').innerHTML = "Palindroma";
        } else {
            console.log('Questa parola non è palindroma');
            document.getElementById('palindroma').innerHTML = "Non palindroma";
        }
    }
);