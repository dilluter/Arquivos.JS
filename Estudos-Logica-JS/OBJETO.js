//Igor Bruno Andrade De Barros
//25114290130

const suplemento1 = {
    nome: "Whey Protein",
    marca: "Growth",
    preco: 120.00,
    peso: "1kg"
};

const suplemento2 = {
    nome: "Creatina",
    marca: "Max Titanium",
    preco: 80.00,
    peso: "300g"
};

const suplemento3 = {
    nome: "BCAA",
    marca: "Integralmedica",
    preco: 60.00,
    peso: "250g"
};

function Suplemento(nome, marca, preco, peso) {
    this.nome = nome;
    this.marca = marca;
    this.preco = preco;
    this.peso = peso;
}

const suplementoA = new Suplemento("Glutamina", "Probiótica", 70.00, "150g");
const suplementoB = new Suplemento("Albumina", "Naturovos", 50.00, "500g");
const suplementoC = new Suplemento("Pré-treino", "Black Skull", 90.00, "300g");

const chavesA = Object.keys(suplementoA);
const chavesB = Object.keys(suplementoB);
const chavesC = Object.keys(suplementoC);

const valoresA = Object.values(suplementoA);
const valoresB = Object.values(suplementoB);
const valoresC = Object.values(suplementoC);

const paresA = Object.entries(suplementoA);
const paresB = Object.entries(suplementoB);
const paresC = Object.entries(suplementoC);

for (let chave in suplementoA) {
    console.log(`suplementoA chave: ${chave}`);
}
for (let chave in suplementoB) {
    console.log(`suplementoB chave: ${chave}`);
}
for (let chave in suplementoC) {
    console.log(`suplementoC chave: ${chave}`);
}

for (let chave in suplementoA) {
    console.log(`suplementoA valor: ${suplementoA[chave]}`);
}
for (let chave in suplementoB) {
    console.log(`suplementoB valor: ${suplementoB[chave]}`);
}
for (let chave in suplementoC) {
    console.log(`suplementoC valor: ${suplementoC[chave]}`);
}

const suplementos = [suplementoA, suplementoB, suplementoC];

suplementos.push(new Suplemento("Caseína", "Dux", 110.00, "900g"));
suplementos.unshift(new Suplemento("Termogênico", "Atlhetica", 65.00, "120caps"));

suplementos.pop();
suplementos.shift();

const terceiroAtributoSegundoElemento = Object.values(suplementos[1])[2];
console.log("Terceiro atributo do segundo elemento:", terceiroAtributoSegundoElemento);

let primos = [2, [5, 7, 11, [97, 23]], [2, 53, [29, 7]]];
let elemento97 = primos[1][3][0];
let elemento29 = primos[2][2][0];
console.log("Elemento 97:", elemento97);
console.log("Elemento 29:", elemento29);

for (let i = 1; i <= 6; i++) {
    console.log("*".repeat(i));
}
