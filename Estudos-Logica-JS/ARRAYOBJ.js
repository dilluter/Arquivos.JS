// 1. Tema escolhido: Carro. Criação de 3 objetos literais com 4 atributos cada.
const carro1 = {
    marca: "Toyota",   // Marca do carro
    modelo: "Corolla", // Modelo do carro
    ano: 2020,         // Ano de fabricação
    cor: "Prata"       // Cor do carro
};

const carro2 = {
    marca: "Honda",
    modelo: "Civic",
    ano: 2019,
    cor: "Preto"
};

const carro3 = {
    marca: "Ford",
    modelo: "Focus",
    ano: 2018,
    cor: "Branco"
};

// 2. Função construtora para criar objetos do tipo Carro
function Carro(marca, modelo, ano, cor) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
    this.cor = cor;
}

// 3. Criação de 3 instâncias (objetos) usando a função construtora
const carroA = new Carro("Chevrolet", "Onix", 2021, "Vermelho");
const carroB = new Carro("Volkswagen", "Golf", 2017, "Azul");
const carroC = new Carro("Fiat", "Argo", 2022, "Cinza");

// 4. Buscar todas as chaves (nomes dos atributos) dos objetos criados na questão 3
console.log(Object.keys(carroA)); // ['marca', 'modelo', 'ano', 'cor']
console.log(Object.keys(carroB));
console.log(Object.keys(carroC));

// 5. Buscar todos os valores dos objetos criados na questão 3
console.log(Object.values(carroA)); // ['Chevrolet', 'Onix', 2021, 'Vermelho']
console.log(Object.values(carroB));
console.log(Object.values(carroC));

// 6. Buscar todos os pares chave-valor dos objetos criados na questão 3
console.log(Object.entries(carroA)); // [['marca', 'Chevrolet'], ...]
console.log(Object.entries(carroB));
console.log(Object.entries(carroC));

// 7. Usar for...in para buscar todas as chaves de cada objeto
for (let chave in carroA) {
    console.log(`carroA chave: ${chave}`);
}
for (let chave in carroB) {
    console.log(`carroB chave: ${chave}`);
}
for (let chave in carroC) {
    console.log(`carroC chave: ${chave}`);
}

// 8. Usar for...in para buscar todos os valores de cada objeto
for (let chave in carroA) {
    console.log(`carroA valor: ${carroA[chave]}`);
}
for (let chave in carroB) {
    console.log(`carroB valor: ${carroB[chave]}`);
}
for (let chave in carroC) {
    console.log(`carroC valor: ${carroC[chave]}`);
}

// 9. Criar um array que armazene os 3 objetos criados na questão 3
let arrayCarros = [carroA, carroB, carroC];

// 10. Adicionar um elemento ao final e outro ao início do array
arrayCarros.push(new Carro("Renault", "Kwid", 2023, "Laranja")); // Adiciona ao final
arrayCarros.unshift(new Carro("Hyundai", "HB20", 2020, "Prata")); // Adiciona ao início

// 11. Remover os elementos adicionados no passo anterior
arrayCarros.pop();    // Remove o último elemento
arrayCarros.shift();  // Remove o primeiro elemento

// 12. Puxar o terceiro atributo (ano) do segundo elemento do array
console.log(arrayCarros[1].ano); // Mostra o ano do segundo carro no array

// 13.1. Acessar elementos 97 e 29 do array aninhado usando indexação
let primos = [2, [5, 7, 11, [97, 23]], [2, 53, [29, 7]]];
console.log(primos[1][3][0]); // 97
console.log(primos[2][2][0]); // 29

// 13.2. Imprimir uma pirâmide de asteriscos usando for
for (let i = 1; i <= 6; i++) {
    console.log("*".repeat(i));
}
