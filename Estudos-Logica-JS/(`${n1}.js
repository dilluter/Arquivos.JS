const prompt = require('prompt-sync')({sigint: true});

var n1 = prompt(`Digite um número: `);

if(n1 > 0){
    console.log(`${n1} é um número positivo`);
}
else if(n1 = 0){
    console.log(`${n1} é igual a zero`);
}
else if(n1 < 0){
    console.log(`${n1} é um número negativo`);
}