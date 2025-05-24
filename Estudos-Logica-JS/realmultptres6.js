//IGOR BRUNO ANDRADE DE BARROS
// 25114290130
const prompt = require('prompt-sync')({ sigint: true });
var numero = prompt("DIGITE UM NÚMERO REAL POSITIVO ");
numero = parseFloat(numero);
var numeroInteiro = Math.floor(numero);
console.log(numeroInteiro % 3 === 0 ? `O número ${numeroInteiro} é múltiplo de 3.` : `O número ${numeroInteiro} não é múltiplo de 3.`);
