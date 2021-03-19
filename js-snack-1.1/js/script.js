// L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore. 

var userNumber1 = parseInt(prompt("inserisci un numero"));
console.log("il numero che hai inserito è: " + userNumber1);

var userNumber2 = parseInt(prompt("inserisci un numero"));
console.log("il numero che hai inserito è: " + userNumber2);


if ( userNumber1 > userNumber2 ) {
    console.log("il numero maggiore che hai inserito è: " + userNumber1);
} else if ( userNumber2 > userNumber1 ) {
    console.log("il numero maggiore che hai inserito è: " + userNumber2);
} else {
    console.log("i numeri che hai inserito sono uguali tra di loro");
}