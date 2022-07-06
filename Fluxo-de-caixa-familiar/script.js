let familia = {
  receita: [2000, 500],

  despesa: [670, 70.5, 60, 150.3, 55, 90, 90]
}

function somar(array) {
  let total = 0

  for (let value of array) {
    total += value
  }

  return total
}

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
