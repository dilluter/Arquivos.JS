const prompt = require("prompt-sync")({ sigint: true });

let cor = prompt("Digite uma cor (verde, amarelo ou vermelho): ");
cor = cor.toLowerCase();

switch (cor) {
  case "verde":
    console.log("SIGA.");
    break;
  case "vermelho":
    console.log("PARE.");
    break;
  case "amarelo":
    console.log("ATENÇÃO.");
    break;
  default:
    console.log("Cor inválida.");
}
