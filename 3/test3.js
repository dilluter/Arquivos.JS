const prompt = require("prompt-sync")({ sigint: true });
let caractere = prompt("Digite um caractere:").toLowerCase();

let vogalA = 'a';
let vogalE = 'e';
let vogalI = 'i';
let vogalO = 'o';
let vogalU = 'u';

if (caractere === vogalA || caractere === vogalE || caractere === vogalI || caractere === vogalO || caractere === vogalU) 
    {console.log("É uma vogal.");}
else console.log("Não é uma vogal.");