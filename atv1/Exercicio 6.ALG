Algoritmo "Atividade_1"
// Disciplina   : [Linguagem e Lógica de Programação]
// Autor(a)    : Flávio Eduardo Miranda Correia
// Data atual  : 28/02/2025
Var
   B1 : real
   b2 : real
   h3 : real
   Bb : real
   area : real

Inicio
      escreva("Escolha o valor da base maior(B): ")
      leia(B1)
      escreva("Escolha o valor da base menor(b): ")
      leia(b2)
      escreva("Escolha o valor da altura(h): ")
      leia(h3)

      Bb <- B1 + b2
      area <- Bb/2 * h3
      escreva("A área do tráprezio é igual à: ")
      escreva(area)
Fimalgoritmo