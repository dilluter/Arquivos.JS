//IGOR BRUNO ANDRADE DE BARROS
// 25114290130
const prompt = require('prompt-sync')({sigint: true})
var n1 = 30;
n1 = parseFloat(n1);
console.log(n1);
var n2 = 20;
n2 = parseFloat(n2);
console.log(n2);
var n3 = 10;
n3 =parseFloat(n3);
console.log(n3);
    var n4 = 3;
    n4 = parseFloat(n4);
    var media = (n1 + n2 + n3) / n4;

if (media >= 0 && media <= 100) {
    console.log("Média válida:", media);
} else {
    console.log("ERRO: A média está fora do intervalo permitido (0 a 100).");
}

