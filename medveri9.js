//IGOR BRUNO ANDRADE DE BARROS
// 25114290130
const prompt = require('prompt-sync')({ sigint: true });

const N1 = parseFloat(prompt("Digite a primeira nota (0 a 10): "));
const N2 = parseFloat(prompt("Digite a segunda nota (0 a 10): "));
const N3 = parseFloat(prompt("Digite a terceira nota (0 a 10): "));

if ((N1 >= 0 && N1 <= 10) && (N2 >= 0 && N2 <= 10) && (N3 >= 0 && N3 <= 10)) {
    const mediaFinal = (N1 * 3 + N2 * 3 + N3 * 4) / 10;
    console.log(`Média Final: ${mediaFinal.toFixed(2)}`);
    console.log(mediaFinal >= 5 ? "Aprovado!" : "Reprovado!");
} else {
    console.log("Erro: Todas as notas devem estar entre 0 e 10.");
}
