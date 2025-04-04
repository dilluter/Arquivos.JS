const prompt = require('prompt-sync')({sigint: true});

var n1 = prompt('Digite o primeiro número: ');
var n2 = prompt('Digite o segundo número: ');
distancia = n1 - n2;
Math.abs(distancia);

console.log(`A distancia entre os números escolhidos é igual à ${Math.abs(distancia)}`);