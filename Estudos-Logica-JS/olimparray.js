const prompt = require('prompt-sync')({ sigint: true });

let anoInicio = parseInt(prompt("Digite o ano inicial: "));
let anoFinal = parseInt(prompt("Digite o ano final: "));

let anosOlimpiadas = [];

for (let ano = anoInicio; ano <= anoFinal; ano++) {
  if ((ano - 1896) % 4 === 0 && ano >= 1896 && ano !== 1916 && ano !== 1940 && ano !== 1944) {
    anosOlimpiadas.push(ano);
  }
}


if (anoInicio <= 2021 && anoFinal >= 2021 && !anosOlimpiadas.includes(2021)) {
  anosOlimpiadas.push(2021);
  anosOlimpiadas.sort((a, b) => a - b); 
}

if (anosOlimpiadas.length === 0) {
  console.log("Nenhuma Olimpíada ocorreu entre", anoInicio, "e", anoFinal);
} else {
  console.log("\nAnos de Olimpíadas entre", anoInicio, "e", anoFinal + ":");
  for (let ano of anosOlimpiadas) {
    console.log("- " + ano);
  }

  
  console.log("• Última Olimpíada do período:", anosOlimpiadas[anosOlimpiadas.length - 1]);
}
