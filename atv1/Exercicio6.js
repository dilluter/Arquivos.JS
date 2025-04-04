const prompt = require('prompt-sync')({sigint: true});

var n1 = parseFloat (prompt('Digite o valor da base menor: '));
var n2 = parseFloat (prompt('Digite o valor da base maior: '));
var n3 = parseFloat (prompt('Digite o valor da altura: '));

soma = n1 + n2;
resultado =(soma / 2 * n3);

console.log(`A área do trapezio é igual à: ${resultado}`);