### Crie um algoritmo que transforme as notas do sistema numérico para o sistema de notas em caracteres do tipo A B C

- de 90 para cima - A
- entre 80 - 89 - B
- entre 70 - 79 - C
- entre 60 - 69 - D
- menor que 60 - F

## Meus passos para resolver o problema:

# 1º Passo:

- Descobrir quais variáveis vou precisar usar para cada nota;

- Usei o nome de "nota" como variável e let para declarar cada tipo de nota

```bash
let notaA = nota >= 90 && nota <= 100
let notaB = nota >= 80 && nota <= 89
let notaC = nota >= 70 && nota <= 79
let notaD = nota >= 60 && nota <= 69
let notaF = nota < 60 && nota >= 0
```

# 2º Passo:

- Usei uma sequência de if e else para imprimir na tela a nota em forma de caractere;

- E criei mais uma variável para chama-lá no if e else, notaFinal;

```bash
let notaFinal;

if (notaA) {
notaFinal = "A"
} else if (notaB) {
notaFinal = "B"
} else if (notaC) {
notaFinal = "C"
} else if (notaD) {
notaFinal = "D"
} else if (notaF) {
notaFinal = "F"
}
```

# 3º Passo:

- Fiz uma function contendo todo o conteúdo, pois fica melhor testar as variáveis da questão;

- E depois fiz todas as opções possíveis de resultado par ver se estaa tudo funcionando;

```bash
function pegaNota(nota) {
let notaA = nota >= 90 && nota <= 100
let notaB = nota >= 80 && nota <= 89
let notaC = nota >= 70 && nota <= 79
let notaD = nota >= 60 && nota <= 69
let notaF = nota < 60 && nota >= 0

let notaFinal

if (notaA) {
notaFinal = 'A'
} else if (notaB) {
notaFinal = 'B'
} else if (notaC) {
notaFinal = 'C'
} else if (notaD) {
notaFinal = 'D'
} else if (notaF) {
notaFinal = 'F'
} else {
notaFinal = 'Nota inválida'
}

return notaFinal
}
console.log(pegaNota(101))
console.log(pegaNota(-1))
console.log(pegaNota(0))
console.log(pegaNota(45))
console.log(pegaNota(60))
console.log(pegaNota(75))
console.log(pegaNota(85))
console.log(pegaNota(95))
```
