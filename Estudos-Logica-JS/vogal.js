const prompt = require("prompt-sync")({sigint: true});

let vogais = ["a", "e", "i", "o"];
vogais.push("u"); 

let letra = prompt("Digite uma letra: ").toLowerCase();

if (vogais.includes(letra)) {
  console.log("É uma vogal!");
} else {
  console.log("Não é uma vogal.");
}



