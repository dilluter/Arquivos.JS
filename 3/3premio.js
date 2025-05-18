//IGOR BRUNO ANDRADE DE BARROS
//25114290130
const prompt = require('prompt-sync')({ sigint: true });
const premios = [15, 85, 86];

for (let i = 1; i <= 3; i++) {
    let n1 = parseFloat(prompt(`Tentativa ${i} - Digite um número entre 0 e 100: `));

    let acertou = false;
    for (let premio of premios) {
        if (n1 === premio) {
            acertou = true; 
            console.log("Parabéns! Você acertou!");
            break; 
        }
    }
    if (acertou) {
        break; 
    }
}