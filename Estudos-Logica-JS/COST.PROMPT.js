const prompt = require('promt-sync')({sigint: true});
var n1, n2, soma;

n1 = parseFloat(prompt('Digite o primeiro número: '));
n2= parseFloat(prompt('Digite o segundo número: '));
 soma = n1+n2;

 console.log(`A soma dos números digitados é igual à: ${soma}`);