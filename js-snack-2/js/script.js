/* L’utente inserisce due parole in successione, con due
prompt. Il software stampa prima la parola più corta, poi la
parola più lunga. */

var userWord1 = prompt("Inserisci una parola");
console.log("La parola che hai inserito è: " + userWord1);
if ( userWord1 !== isNaN(userWord1) ) {
    userWord1 = prompt("Attenzione, devi inserire una parola");
}

var userWord2 = prompt("Inserisci una seconda parola");
console.log("La parola che hai inserito è: " + userWord2);
if ( userWord2 !== isNaN(userWord2) ) {
    userWord2 = prompt("Attenzione, devi inserire una parola");
}


if ( userWord1.length > userWord2.length ) {
    console.log("La parola più lunga è: " + userWord1);
} else if ( userWord2.length > userWord1.length ) {
    console.log("La parola più lunga è: " + userWord2);
} else {
    console.log("Le parole inserite hanno la stessa lunghezza.");
}
