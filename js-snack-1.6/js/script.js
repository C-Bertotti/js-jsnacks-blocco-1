/* Stampa il cubo dei primi N numeri, dove N è un numero
indicato dall’utente.*/

do {
    var userNumber = parseInt(prompt("Inserisci un numero"));
} while ( isNaN(userNumber));


for (var i = 1; i <= userNumber; i++) {
    console.log(Math.pow(i, 3));
}
