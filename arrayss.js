//Igor Bruno Andrade De Barros
//25114290130
// 1. Criando arrays com 5 peças (duas vezes)
let pecas = ["engrenagem", "mola", "parafuso", "rolamento", "pistão"];
let pecas2 = ["engrenagem", "mola", "parafuso", "rolamento", "pistão"];

// 2. Quarto elemento
console.log(pecas[3]);
console.log(pecas2[3]);

// 3. Último elemento
console.log(pecas[pecas.length - 1]);
console.log(pecas2[pecas2.length - 1]);

// 4. Listar elementos

// 4.1 com índices
for (let i = 0; i < pecas.length; i++) {
  console.log(pecas[i]);
}
for (let i = 0; i < pecas2.length; i++) {
  console.log(pecas2[i]);
}

// 4.2 com for...of
for (let item of pecas) {
  console.log(item);
}
for (let item of pecas2) {
  console.log(item);
}

// 5. Ordenar em ordem alfabética
pecas.sort();
console.log(pecas);
pecas2.sort();
console.log(pecas2);

// 6. Ordem alfabética reversa
pecas.reverse();
console.log(pecas);
pecas2.reverse();
console.log(pecas2);

// 7. Array numérico
let medidas = [40, 12, 90, 33, 5];
let medidas2 = [40, 12, 90, 33, 5];

// 7.1 Crescente
medidas.sort((a, b) => a - b);
console.log(medidas);
medidas2.sort((a, b) => a - b);
console.log(medidas2);

// 7.2 Decrescente
medidas.sort((a, b) => b - a);
console.log(medidas);
medidas2.sort((a, b) => b - a);
console.log(medidas2);

// 8. Array com 3 peças
let estoque = ["roda", "porca", "braço"];
let estoque2 = ["roda", "porca", "braço"];

// 8.1 Adicionando 4 com push()
console.log(estoque.push("eixo"));    // 4
console.log(estoque.push("bucha"));   // 5
console.log(estoque.push("alavanca")); // 6
console.log(estoque.push("tampa"));    // 7

console.log(estoque2.push("eixo"));    
console.log(estoque2.push("bucha"));   
console.log(estoque2.push("alavanca")); 
console.log(estoque2.push("tampa"));    

// 8.2 Remover último e mostrar
console.log(estoque.pop());    // tampa
console.log(estoque2.pop());   // tampa

// Extra: shift e unshift
estoque.unshift("motor");
console.log(estoque);

estoque2.unshift("motor");
console.log(estoque2);

console.log(estoque.shift());   // motor
console.log(estoque2.shift());  // motor
