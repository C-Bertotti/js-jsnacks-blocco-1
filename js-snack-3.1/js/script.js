/* Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore */

var bici = [
    {
        nome: 'Giant',
        peso: 700
    },
    {
        nome: 'Wilier',
        peso: 600
    },
    {
        nome: 'Cervelo',
        peso: 500
    },
];

var biciLeggera = bici[1];

for ( var i = 0; i < bici.length; i++ ) {
    if ( (bici[i].peso) < (biciLeggera.peso) ) {
        biciLeggera = bici[i];
    }
}

console.log('La bicicletta con il peso minore è quella con marca: ' + biciLeggera.nome);