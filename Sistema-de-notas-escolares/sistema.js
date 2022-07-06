let nota = 75

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
