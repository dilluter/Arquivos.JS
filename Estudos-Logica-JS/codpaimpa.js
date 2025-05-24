//IGOR BRUNO ANDRADE DE BARROS
// 25114290130
const prompt = require('prompt-sync')({ sigint: true });

var num = prompt("DIGITE UM NÚMERO INTEIRO ");
num = parseInt(num);
console.log(num);

if (isNaN(num)) {
    console.log("ERRO: Digite um número inteiro válido.");
} else if (num % 2 === 0) {
    console.log("O número é PAR.");
} else {
    console.log("O número é ÍMPAR.");
}
