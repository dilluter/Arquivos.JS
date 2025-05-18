function Pessoas(nome, idade, cidade) {
    this.nome = nome;
    this.idade = idade;
    this.cidade = cidade;
}
console.log(Pessoas);
const pessoa1 = new Pessoas("Igor", 20, "São Paulo");
const pessoa2 = new Pessoas("Ana", 25, "Rio de Janeiro");
const pessoa3 = new Pessoas("Carlos", 30, "Belo Horizonte");
let pessoas = [];
pessoas.push(pessoa1, pessoa2, pessoa3);
console.log(pessoas);
console.log(pessoas[0]);
console.log(pessoas[1].nome);
console.log(pessoas[1].cidade);
console.log(pessoas[2].idade);


