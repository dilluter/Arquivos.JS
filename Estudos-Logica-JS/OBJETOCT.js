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
function Aluno(nome, idade, objetivo, frequenciaSemanal) {
  this.nome = nome;
  this.idade = idade;
  this.objetivo = objetivo;
  this.frequenciaSemanal = frequenciaSemanal;
}
const aluno4 = new Aluno("Mariana", 28, "Força", 3);
const aluno5 = new Aluno("Pedro", 22, "Hipertrofia", 5);  
const aluno6 = new Aluno("Fernanda", 26, "Emagrecimento", 4);
console.log(Object.keys(aluno1)); 
console.log(Object.keys(aluno2)); 
console.log(Object.keys(aluno3)); 

console.log(Object.values(aluno4));
console.log(Object.values(aluno5)); 
console.log(Object.values(aluno6)); 

console.log(Object.entries(aluno1));
console.log(Object.entries(aluno2));
console.log(Object.entries(aluno3));

for (let chave in aluno4) {
  console.log("Chave de aluno4:", chave);
}
for (let chave in aluno5) {
  console.log("Chave de aluno5:", chave);
}
for (let chave in aluno6) {
  console.log("Chave de aluno6:", chave);
}

for (let chave in aluno4) {
  console.log("Valor de aluno4:", aluno4[chave]);
}
for (let chave in aluno5) {
  console.log("Valor de aluno5:", aluno5[chave]);
}
for (let chave in aluno6) {
  console.log("Valor de aluno6:", aluno6[chave]);
}

let alunos = [aluno4, aluno5, aluno6];
console.log("Array de alunos:", alunos);

alunos.push(new Aluno("Juliana", 24, "Condicionamento", 3));
alunos.unshift(new Aluno("Ricardo", 32, "Mobilidade", 2));
console.log("Array após adições:", alunos);

alunos.pop();     
alunos.shift();   
console.log("Array após remoções:", alunos);

console.log("Terceiro atributo (objetivo) do segundo aluno:", alunos[1].objetivo);

let primos = [2, [5, 7, 11, [97, 23]], [2, 53, [29, 7]]];
console.log("Elemento 97:", primos[1][3][0]);
console.log("Elemento 29:", primos[2][2][0]);

for (let i = 1; i <= 6; i++) {
  console.log("*".repeat(i));
}



