// 1. Tema: Aluno. Criando 3 objetos com forma literal
const aluno1 = {
  nome: "Carlos",
  idade: 25,
  objetivo: "Hipertrofia",
  frequenciaSemanal: 5
};

const aluno2 = {
  nome: "Ana",
  idade: 30,
  objetivo: "Emagrecimento",
  frequenciaSemanal: 4
};

const aluno3 = {
  nome: "Lucas",
  idade: 20,
  objetivo: "Resistência",
  frequenciaSemanal: 6
};

// 2. Criando função construtora
function Aluno(nome, idade, objetivo, frequenciaSemanal) {
  this.nome = nome;
  this.idade = idade;
  this.objetivo = objetivo;
  this.frequenciaSemanal = frequenciaSemanal;
}

// 3. Criando 3 instâncias com a função construtora
const aluno4 = new Aluno("Mariana", 28, "Força", 3);
const aluno5 = new Aluno("Pedro", 22, "Hipertrofia", 5);  
const aluno6 = new Aluno("Fernanda", 26, "Emagrecimento", 4);

// 4. Buscando todas as chaves dos objetos instanciados
console.log(Object.keys(aluno4));
console.log(Object.keys(aluno5));
console.log(Object.keys(aluno6));

// 5. Buscando todos os valores dos objetos instanciados
console.log(Object.values(aluno4));
console.log(Object.values(aluno5));
console.log(Object.values(aluno6));

// 6. Buscando todos os pares chave-valor
console.log(Object.entries(aluno4));
console.log(Object.entries(aluno5));
console.log(Object.entries(aluno6));

// 7. For loop para buscar todas as chaves
for (let chave in aluno4) {
  console.log("Chave de aluno4:", chave);
}
for (let chave in aluno5) {
  console.log("Chave de aluno5:", chave);
}
for (let chave in aluno6) {
  console.log("Chave de aluno6:", chave);
}

// 8. For loop para buscar todos os valores
for (let chave in aluno4) {
  console.log("Valor de aluno4:", aluno4[chave]);
}
for (let chave in aluno5) {
  console.log("Valor de aluno5:", aluno5[chave]);
}
for (let chave in aluno6) {
  console.log("Valor de aluno6:", aluno6[chave]);
}

// 9. Criando um array com os objetos instanciados
let alunos = [aluno4, aluno5, aluno6];
console.log("Array de alunos:", alunos);

// 10. Adicionando um elemento ao final e um ao início do array
alunos.push(new Aluno("Juliana", 24, "Condicionamento", 3));
alunos.unshift(new Aluno("Ricardo", 32, "Mobilidade", 2));
console.log("Array após adições:", alunos);

// 11. Removendo os elementos adicionados
alunos.pop();     // remove o último
alunos.shift();   // remove o primeiro
console.log("Array após remoções:", alunos);

// 12. Puxando o terceiro atributo do segundo elemento do array (objetivo)
console.log("Terceiro atributo (objetivo) do segundo aluno:", alunos[1].objetivo);

// 13. EXTRA

// 13.1 Acessando os elementos 97 e 29 com indexação
let primos = [2, [5, 7, 11, [97, 23]], [2, 53, [29, 7]]];
console.log("Elemento 97:", primos[1][3][0]);
console.log("Elemento 29:", primos[2][2][0]);

// 13.2 Pirâmide de asteriscos
for (let i = 1; i <= 6; i++) {
  console.log("*".repeat(i));
}
