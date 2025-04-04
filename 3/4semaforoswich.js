//Igor Bruno Andrade de Barros
//25114290130

const prompt = require("prompt-sync")({ sigint: true });

var cor = prompt("Digite uma cor (verde, amarelo ou vermelho): ");
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
