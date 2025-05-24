//IGOR BRUNO ANDRADE DE BARROS
// 25114290130
const prompt = require('prompt-sync')({ sigint: true });

const ano = parseInt(prompt("Digite um ano entre 1970 e 2025: "));

if (ano >= 1970 && ano <= 2025) {
    if ((ano - 1930) % 4 === 0) {
        console.log(`${ano} foi um ano de Copa do Mundo!`);
    } else {
        console.log(`${ano} não foi um ano de Copa do Mundo.`);
    }
} else {
    console.log("Ano fora do intervalo permitido.");
}