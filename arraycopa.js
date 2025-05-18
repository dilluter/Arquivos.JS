const prompt = require('prompt-sync')({ sigint: true });

let anoInicio = parseInt(prompt("Digite o ano inicial: "));
let anoFinal = parseInt(prompt("Digite o ano final: "));

let anosCopa = [];

for (let ano = anoInicio; ano <= anoFinal; ano++) {
  if ((ano - 1930) % 4 === 0 && ano >= 1930 && ano !== 1942 && ano !== 1946) {
    anosCopa.push(ano);
  }
}

if (anosCopa.length === 0) {
  console.log("Nenhuma Copa do Mundo ocorreu entre", anoInicio, "e", anoFinal);
} else {
  console.log("\nAnos de Copa do Mundo entre", anoInicio, "e", anoFinal + ":");
  for (let ano of anosCopa) {
    console.log("- " + ano);
  }

  console.log("\nResumo:");
  console.log("• Primeira Copa do período:", anosCopa[0]);

  if (anosCopa.length >= 4) {
    console.log("• Quarta Copa do período:", anosCopa[3]);
  }

  if (anosCopa.length >= 10) {
    console.log("• Décima Copa do período:", anosCopa[9]);
  }

  console.log("• Última Copa do período:", anosCopa[anosCopa.length - 1]);
}
