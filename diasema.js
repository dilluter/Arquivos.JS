const prompt = require("prompt-sync")(); 

const dia = parseInt(prompt("Digite um número de 1 a 7 para saber o dia da semana: "));

switch (dia) {
  case 1:
    console.log("Hoje é Domingo.");
    break;
  case 2:
    console.log("Hoje é Segunda-feira.");
    break;
  case 3:
    console.log("Hoje é Terça-feira.");
    break;
  case 4:
    console.log("Hoje é Quarta-feira.");
    break;
  case 5:
    console.log("Hoje é Quinta-feira.");
    break;
  case 6:
    console.log("Hoje é Sexta-feira.");
    break;
  case 7:
    console.log("Hoje é Sábado.");
    break;
  default:
    console.log("Número inválido. Digite um número de 1 a 7.");
}
