### Crie um objeto que possuirá 2 propriedades do tipo array:

- receitas: []
- despesas: []

Agora crie uma função que irá calcular o total de receitas e despesas e irá mostrar uma mensagem se a família está com saldo posiivo ou negativo, seguido do valor do saldo.

## Meus passos

# 1º Passo:

- Criei um objeto com duas propriedades

```bash
 let caixa = {
    receita: [2000, 500],

    despesa: [670, 70.50, 60, 750, 150.30, 55, 90, 90, 300]
  }
```

# 2º Passo:

- Criar uma function que irá fazer o cálculo para saber o total de receitas e despsas;

```bash
function somar(array) {
  let total = 0

  for(let value of array) {
    total += value
  }

  return(total)
}
```

# 3º Passo

- Criar outra função para calcular se o saldo total foi positivo ou negativo e imprimir na tela o positivo ou negativo junto do valor total do balanço;

```bash
function calcularFinancas() {
 const calcularDespesas = somar(familia.despesa)
 const calcularReceita = somar(familia.receita)

 const total = calcularReceita - calcularDespesas

 const ok = total >= 0

 let balancoText = 'negativo'

 if (ok) {
   balancoText = 'positivo'
 }

 console.log(`Seu saldo é ${balancoText}: R$${total.toFixed(2)}`)
}

calcularFinancas()

```
