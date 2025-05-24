//IGOR BRUNO ANDRADE DE BARROS
//25114290130

const prompt = require('prompt-sync')({ sigint: true });
const horario = prompt("Digite o horário (HH:MM):");
const distancia = parseFloat(prompt("Digite a distância percorrida (em km):"));

const calcularValor = (horario, distancia) => {
    let [hora, minuto] = horario.split(":").map(Number);
    let minutosTotais = hora * 60 + minuto;
    
    let valorFixo, valorPorKm;

    if (minutosTotais >= 0 && minutosTotais <= 360) { // 0:00 às 6:00
        valorFixo = 5.30;
        valorPorKm = 4.40;
    } else if (minutosTotais >= 361 && minutosTotais <= 1080) { // 6:01 às 18:00
        valorFixo = 3.30;
        valorPorKm = 3.80;
    } else { // 18:01 às 23:59
        valorFixo = 4.30;
        valorPorKm = 4.10;
    }

    return (valorFixo + (valorPorKm * distancia)).toFixed(2);
};
const valorTotal = calcularValor(horario, distancia);

console.log("Valor total: " + valorTotal);
