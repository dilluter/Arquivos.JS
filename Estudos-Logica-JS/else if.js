const prompt = require('prompt-sync')({sigint: true});

var n1 = prompt('Digite o primeiro número: ');
var n2 = prompt('Digite o segundo número: ');
var n3 = prompt('Digite o terceiro número: ');

if(n1 > n2 && n1 > n3){
    console.log(`${n1} é o maior número`);
}
else if(n2 > n3 && n2 > n1){
    console.log(`${n2} é o maior número`);
}
else if(n3 > n2 && n3 > n1){
    console.log(`${n3} é o maior número`);
}