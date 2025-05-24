const prompt = require('prompt-sync')({sigint: true});

var n1 = prompt('Digite um número: ');
if(n1 % 2 == 1){
    console.log("O número é ímpar");
}else{
    console.log("O número é par");
}