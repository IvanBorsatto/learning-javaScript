transformDegree = '50Z'
function conversion(degree) {
  const celsiusExists = degree.toUpperCase().includes('C')
  const fahrenheitExists = degree.toUpperCase().includes('F')

  // Fluxo de Erro
  if (!celsiusExists && !fahrenheitExists) {
    throw new Error('Grau não identificado')
  }

  // Fluxo Idela (Fórmula para transformar F -> C)
  let updateDegree = Number(degree.toUpperCase().replace('F', ''))
  let formula = fahrenheit => ((fahrenheit - 32) * 5) / 9
  let degreeSing = 'ºC'

  // Fluxo Alternativo (Fórmula par transformar C -> F)
  if (celsiusExists) {
    updateDegree = Number(degree.toUpperCase().replace('C', ''))
    formula = celsius => (celsius * 9) / 5 + 32
    degreeSing = 'F'
  }

  return formula(updateDegree) + degreeSing
}

try {
  console.log(conversion('10C'))
  console.log(conversion('50F'))
  conversion('50Z')
} catch (error) {
  console.log(error.message)
}
