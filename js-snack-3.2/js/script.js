//Definisco le funzioni
/** 
 * getRndInteger - genera un numero random
 * 
 * @param  {number} min //numero minimo 
 * @param  {number} max //numero massimo
 * @return {number} //un numero randoma tra il numero max e min
*/
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
var squadre = [
    {
        nome: 'Juve',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Roma',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Napoli',
        puntiFatti: 0,
        falliSubiti: 0
    }
];

// 2 step:
// Generare numeri random al posto degli 0 nelle proprietà:
// Punti fatti e falli subiti.

for ( var i = 0; i < squadre.length; i++ ) {
    squadre[i].puntiFatti = getRndInteger(1, 12);
    squadre[i].falliSubiti = getRndInteger(1, 12);
};
console.log(squadre);

// 3 step:
// Infine creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
var falliSquadre = [];
for ( var i = 0; i < squadre.length; i++ ) {
    var squadra = {};
    squadra.nome = squadre[i].nome;
    squadra.falliSubiti = squadre[i].falliSubiti;
    falliSquadre.push(squadra);
};

console.log(falliSquadre);