/* Chiedi un numero di 4 cifre all’utente e calcola la somma
di tutte le cifre che compongono il numero. */

do {
    var userNumber = prompt("Inserisci un numero di 4 cifre");
} while ( userNumber.length != 4 );

var sum = 0;

for (var i = 0; i < 4; i++) {
    sum += parseInt(userNumber[i]);
}

console.log(sum);
