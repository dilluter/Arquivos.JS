//25114290130
//Igor Bruno Andrade De Barros

let estudante1  ={
    matricula : 552135,
    nome: "IGOR",
    DN: "25/02/2007",
    UF: "DF"
}
console.log(estudante1);
let estudante2 ={
    matricula: 552136,
    nome: "Gabiriela",
    DN: "07/01/2009",
    UF: "GO"
}
console.log(estudante2);

let estudante3={
    matricula: 552137,
    nome: "João",
    DN: "30/01/2009",
    UF: "DF"
}
console.log(estudante3);

let estudante4={
    matricula:552138,
    nome: "Estela",
    DN:"10/12/2001",
    UF:"GO"
}
console.log(estudante4);
let estudante5={
    matricula: 552139,
    nome:"Pedro",
    DN:"05/12/1975",
    UF: "PI"
}
console.log(estudante5)
//estudante1
console.log(estudante1.matricula);
console.log(estudante1.nome);
console.log(estudante1.DN);
console.log(estudante1.UF);
console.log("_".repeat(90))

console.log(estudante2.matricula);
console.log(estudante2.nome);
console.log(estudante2.DN);
console.log(estudante2.UF);
console.log("_".repeat(90))

console.log(estudante3.matricula);
console.log(estudante3.nome);
console.log(estudante3.DN);
console.log(estudante3.UF);
console.log("_".repeat(90))

console.log(estudante4.matricula);
console.log(estudante4.nome);
console.log(estudante4.DN);
console.log(estudante4.UF);
console.log("_".repeat(90))

console.log(estudante5.matricula);
console.log(estudante5.nome);
console.log(estudante5.DN);
console.log(estudante5.UF);
console.log("_".repeat(90))

for(const a in estudante1){
    console.log(estudante1 [a]);
}
console.log("_".repeat(90))

for(const a in estudante2){
    console.log(estudante2[a])
}
console.log("_".repeat(90))

for(const a in estudante3){
    console.log(estudante3[a]);
}
console.log("_".repeat(90))

for(const a in estudante4){
    console.log( estudante4[a]);
}
console.log("_".repeat(90))

for(const a in estudante5){
    console.log(estudante5[a]);
}
console.log("_".repeat(90))

console.log(Object.keys(estudante1));
console.log(Object.values(estudante1));
console.log(Object.entries(estudante1));

console.log(Object.keys(estudante2));
console.log(Object.values(estudante2));
console.log(Object.entries(estudante2));

console.log(Object.keys(estudante3));
console.log(Object.values(estudante3));
console.log(Object.entries(estudante3));

console.log(Object.keys(estudante4));
console.log(Object.values(estudante4));
console.log(Object.entries(estudante4));

console.log(Object.keys(estudante5));
console.log(Object.values(estudante5));
console.log(Object.entries(estudante5));