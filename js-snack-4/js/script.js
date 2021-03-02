/* In un array sono contenuti i nomi degli invitati alla festa del
grande Inzaghi, chiedi all’utente il suo nome e comunicagli se
può partecipare o no alla festa. */


var invitati = ["Tizio", "Caio", "Sempronio"]

var nomeInvitato = prompt("Inserisci il tuo nome per verificare se sei nella lista degli invitati")

var seiInvitato = 0;

for ( var i = 0; i < invitati.length; i++ ) {
    if ( nomeInvitato == invitati[i] ) {
        seiInvitato = 1;
    }
}

if ( seiInvitato == 1) {
    console.log(nomeInvitato + " sei in lista");
} else {
    console.log(nomeInvitato + " mi dispiace, non sei in lista");
}