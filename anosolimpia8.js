//IGOR BRUNO ANDRADE DE BARROS
// 25114290130

const prompt = require('prompt-sync')({ sigint: true });

const ano = parseInt(prompt("Digite um ano entre 1890 e 2025: "));

if (ano >= 1890 && ano <= 2025) {
    if ((ano - 1896) % 4 === 0 && ![1916, 1940, 1944].includes(ano)) {
        console.log(`${ano} foi um ano de Jogos Olímpicos!`);
    } else {
        console.log(`${ano} não foi um ano de Jogos Olímpicos.`);
    }
} else {
    console.log("Ano fora do intervalo permitido.");
}
