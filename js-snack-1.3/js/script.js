/* Il software deve chiedere per 10 volte all’utente di inserire
un numero. Il programma stampa la somma di tutti i numeri
inseriti. */

var sum = 0;

for ( var i = 0; i < 10; i++ ) {
    var userNumber = parseInt(prompt("Inserisci un numero"));
    console.log(userNumber);
    sum += userNumber;
}

console.log ("La somma dei numeri che hai inserito è: " + sum);