/* Crea un array vuoto. Chiedi per 6 volte all’utente di inserire
un numero, se è dispari inseriscilo nell’array.*/


var oddNumber = [];

for ( var i = 0; i < 6; i++ ) {
    var insertNumber = prompt("Inserisci un numero");
    if ( (insertNumber % 2) == 1 ) {
        oddNumber.push(insertNumber);
    }
    console.log(insertNumber);
}

console.log(oddNumber);
