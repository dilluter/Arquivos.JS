//IGOR BRUNO ANDRADE DE BARROS
// 25114290130

const prompt = require('prompt-sync')({ sigint: true });

var cor = prompt("Digite uma cor (verde, amarelo ou vermelho): ");

if (cor === "verde") {
    console.log("Siga!");
} else if (cor === "amarelo") {
    console.log("Atenção");
} else if (cor === "vermelho") {
    console.log("Pare!");
} else {
    console.log("Cor inválida entrada pelo usuário");
}
