//IGOR BRUNO ANDRADE DE BARROS
// 25114290130

var prompt = require('prompt-sync')({ sigint: true });

var num = parseFloat(prompt("Digite um número maior que 1: "));

if (num > 1 && Number.isInteger(num)) {  
    var ehPrimo = true;
    for (var i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            ehPrimo = false;
            break;
        }
    }
    console.log(ehPrimo ? num + " é um número primo." : num + " não é um número primo.");
} else {
    console.log("Número inválido. Digite um número inteiro maior que 1.");
}
