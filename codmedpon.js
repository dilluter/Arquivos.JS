//IGOR BRUNO ANDRADE DE BARROS
// 25114290130

const prompt = require('prompt-sync')({ sigint: true });

var n1 = prompt("DIGITE O PRIMEIRO NUMERO ");
n1 = parseFloat(n1);
console.log(n1);

var n2 = prompt("DIGITE O SEGUNDO NUMERO ");
n2 = parseFloat(n2);
console.log(n2);

var n3 = prompt("DIGITE O TERCEIRO NUMERO ");
n3 = parseFloat(n3);
console.log(n3);

var p1 = prompt("DIGITE O PESO DO PRIMEIRO NUMERO ");
p1 = parseFloat(p1);
console.log(p1);

var p2 = prompt("DIGITE O PESO DO SEGUNDO NUMERO ");
p2 = parseFloat(p2);
console.log(p2);

var p3 = prompt("DIGITE O PESO DO TERCEIRO NUMERO ");
p3 = parseFloat(p3);
console.log(p3);

var somaPesos = p1 + p2 + p3;

if (somaPesos !== 1) {
    console.log("ERRO: A soma dos pesos deve ser 1.");
} else {
    var media = (n1 * p1 + n2 * p2 + n3 * p3);
    console.log("Média ponderada:", media.toFixed(2));
}
