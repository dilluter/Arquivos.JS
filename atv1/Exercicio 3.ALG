Algoritmo "Atividade_1"
// Disciplina   : [Linguagem e Lógica de Programação]
// Autor(a)    : Flávio Eduardo Miranda Correia
// Data atual  : 28/02/2025
Var
   numero1 : real
   numero2 : real
   numero3 : real
   
Inicio
 escreva("Digite o primeiro número: ")
 leia(numero1)
   escreva("Digite o segundo número: ")
 leia(numero2)
  escreva("Digite o terceiro número: ")
 leia(numero3)

 se (numero1 >= numero2) e (numero1 >= numero3)  então
     escreva("O maior número é o número: ", numero1)
   senão
 se (numero2 >= numero1) e (numero2 >= numero3) então
     escreva("O maior numero é o numero: " numero2)
     senão
 se (numero3 >= numero1) e (numero3 >= numero2) então
     escreva("O maior numero é o numero: " numero3)
 fimse
 fimse
 fimse
Fimalgoritmo