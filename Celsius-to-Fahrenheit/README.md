### Celsius em fahrenheit vs Fahrenheit em celsius

- Crie uma função que receba uma string em celsius ou fahrenheit e faça a transformação em uma unidade para outra;

* C = (F - 32) \* 5/9

* F = C \* 9/5 + 32

## Meus passos para resolver o problema:

# 1º Passo:

- Criar a função que irá receber um string e dentro dela fazer uma consulta para saber se estou recebendo celsius ou fahrenheit para poder fazer o cálculo para a conversão(validação);

```bash
function conversion(degree) {
  const celsiusExists = degree.toUpperCase().includes('C')
  const fahrenheitExists = degree.toUpperCase().includes('F')

  if (!celsiusExists && !fahrenheitExists) {
    throw new Error('Grau não identificado')
  }
}

try {
  conversion('50F')
  conversion('50Z')
} catch (error) {
  console.log(error)
}
```

Foi usado **toUpperCase()** para deixar um padrão de letras maiúsculas.
Também foi usado a **includes()** para ter como parâmetro as letras que a função deve receber.
E se caso o usuário colocar uma letra que o programa não reconhece usei a tag **Throw** para enviar uma mensagem de erro.
Usei o **Try** para validar e o **Cath** paa indicar o erro.

# 2º Passo:

## Transformando F -> C

- Criar 3 **let**, um para depositarmos nela a fórmula/expressão usada para fazer o cálculo da transformação e o outro para acrescentar a letra 'C' no resultado do cálculo e outro para poder contatenar o **return** no resultado final.

```bash
  let updateDegree
  let formula = fahrenheit => ((fahrenheit - 32) * 5) / 9
  let degreeSing = 'C'

  return formula(updateDegree) + degreeSing
```

- Pegar o **let = updateDegree** e transforma-lo em um número.

```bash
let updateDegree = Number(degree.toUpperCase().replace("F", ""));
```

- Código pronto!

```bash
  let updateDegree = Number(degree.toUpperCase().replace('F', ''))
  let formula = fahrenheit => ((fahrenheit - 32) * 5) / 9
  let degreeSing = 'ºC'

  return formula(updateDegree) + degreeSing
```

# 3º Passo:

## transformação de C -> F

- Vou criar uma condição com o **if** para conseguir fazer o cálculo de celsius para fahrenheit.
- Nâo escrevo os **let's** novamente, porque nao quero criar novos, mas sim usá-los tendo a mesma função fazendo só algumas alterações.

```bash
  if (celsiusExists) {
    updateDegree = Number(degree.toUpperCase().replace('C', ''))
    formula = celsius => (celsius * 9) / 5 + 32
    degreeSing = 'F'
  }
```
