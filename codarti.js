//IGOR BRUNO ANDRADE DE BARROS
// 25114290130
var n1 = 30;
n1 = parseFloat(n1);
console.log(n1);
var n2 = 20;
n2 = parseFloat(n2);
console.log(n2);
var n3 = 10;
n3 =parseFloat(n3);
console.log(n3);
    var n4 = 3;
    n4 = parseFloat(n4);
    var media = (n1 + n2 + n3) / n4;

if (n1 >= 0 && n1 <= 100 && n2 >= 0 && n2 <= 100 && n3 >= 0 && n3 <=100) {
    console.log(`A média aritmética entre os números 
            ${n1}, ${n2}, e ${n3} é ${media}.`);
} else {
    console.log("ERRO: Todos os numeros devem estar entre (0 a 100).");
}

