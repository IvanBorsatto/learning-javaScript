# JavaScript core

- Linguagem de programação que roda no Navegador do usuário (front-end)
  - Se você clicar em algum botão da página e aparece uma janela. Isso é o javaScript;
  - Alteração do site ou aplicativo, conforme a interação do usuário;
- Roda também no computador (back-end);

## o que podemos fazer?

- Podemos criar aplicações web, mobile (React Native), desktop (Electron);
- 99.99% dos sites da web usam JavaScript;
- Linguagem obrigatória para quem programa o Front-end Web;

## Sintaxe

- Toda linguagem tem;
- uma boa comunicação necessita de uma boa sintaxe;
- 82% dos erros para iniciantes na programção;

```bash
console.log("Bem vindos ao Starter")
```

## Comentários

A tag **_//_** é usada no código para comentar em linha;

A tag **\*/\*\*** (abre o comentário) e \***_/_** (fecha o comentário), comentário em bloco;

```bash

//console.log('iria ignorar') Comentário em linha

/* console.log('Bem vindos ao Starter')
console.log('Bem vindos ao Starter') */ Comentário em Bloco
```

## Tipos de dados

Conforme o ECMAScript standard temos 9 tipo de dados.

Data types:

- Primitive / Primitive value
  - String;
  - Number;
  - Boolean;
  - undefined;
  - Symbol;
  - BigInt;
- Structural
  - Object:
    - Array;
    - Map;
    - Set;
    - Date;
  - Function;
- Structural Primitive
  - null;

### String

- Cadeia de caracteres (textos)
  - **_“”_** ⇒ aspas duplas;
  - **_‘’_** ⇒ aspas simples;
  - **_´´_** ⇒ template literals ou template strings (crases) ;

### Number

- Números;
  - Inteiros - Integer ⇒ 33 (positivo ou negativo);
  - reais - float ⇒ 12.5 (todos os tipos);
  - NaN ⇒ Not a Number;
  - Infinity ⇒ infinito;

### Boolean

- Somente 2 valores;
  - **_true_** ⇒ Veradeiro;
  - **_false_** ⇒ Falso;

### Undefined vs Null

- **_undefined_** ⇒ indefinido;
- **_null_** ⇒ nulo
  - objeto que não possui nada dentro;
  - diferente de indefinido;

### Object

- Objeto;
- Propriedades / Atributos
- Funcionalidades / Métodos

Escrevemos ele no código entre **_{ }_** aspas:

```bash
{ propriedade: "valor" }

console.log({
	nome: "Ivan",
	idade: 27,
	andar: function() {
		console.log('andar')
	}
})
```

Utilizando o **_.(ponto)_** para pega um nome no objeto:

```bash
const person = {
	name: 'John',
	age: 30,
	weight: 88.6,
	isAdmin: true
}
// utilizando o ponto para especificar a variável escolhida
console.log(´${person.name} tem ${person.age} anos´)
```

### Array (Vetores)

- Uma lista;
- Agrupamento de dados;
- Abre e fecha com colchetes **_[ ]_**;

```bash
console.log([
	"leite",
	"ovos",
	2,
	3
])
```

Acessando valores dentro do Array

```bash
// os dados Lion e Monkey são diferentes de Cat
// Lion e Monkey são Array e Cat é um object dentro do Array
const animals = [
	'Lion'
	'Monkey'
	{
		name: 'Cat',
		age: 3
	}
]

// acessar valores dentro do Array
// dentro dos colchetes [ ] é colocada a posição do Array escolhido
// e com o .(ponto) podemos especificar o que queremos dentro do Array
console.log(animals[2].name)
```

## Variáveis

- Nomes simbólicos para receber algum valor;
- Atalhos de código;
- Identificadores;
- 3 palavras reservadas para criar uma variável:
  - **_var_** (pode ser alterada);
  - **_let_** (pode ser alterada);
  - **_const_** (não pode ser alterada);

O JS é uma linguagem fracamente tipada e dinâmica.

- Variáveis não precisam ter um tipo previamente definido;
- Podemos mudar o conteúdo da variável;

### Scope

- Escopo determina a visibilidade de alguma variável no JS;

**Block statement**

- O bloco criará um novo escopo. Chamamos de **_‘block-scoped’_**.

```bash
// vamos iniciar um bloco
{
	// aqui dentro é um bloco e posso colocar qualquer código
} // aqui fechamos o bloco
```

### var

- var é global e, também local;

```bash
<script>

	var x // Global
	console.log('> existe x antes do bloco? ', x)

		{
			var x = 0 // Local
		}

	console.log('> existe x depois do bloco? ', x)

</script>
```

### const & let

- São locais e só funcionam o espaço onde foi criada;

```bash
<script>

	let y = 1;

	{
		let y = 0
		console.log('> existe y ', y)
	}

	console.log('>  existe y depois do bloco? ', y)

</script>
```

```bash
<script>

	const y = 1;

	{
		const y = 0
		console.log('> existe y ', y)
	}

	console.log('>  existe y depois do bloco? ', y)

</script>
```

### Nomeando variáves

- JS é case-sensitive ( sensível ao caso);
- JS aceita cadeia de caracteres Unicode;

- **Posso**
  - Iniciar com esses caracteres especiais: $ \_ ;
  - Iniciar com letras;
  - Colocar acentos;
  - Letras maiúsculas e minúsculas fazem diferença;
- **Não posso**
  - Iniciar com números;
  - Colocar espaços vazios no nome;
- **Ideal**
  - Criar nomes que fazem sentido;
  - Que explique o que a variável é ou faz;
  - camelCase: ao invés de colocar espaços entre as palavras separamos elas com as iniciais maiúsculas. Ex.: currentDate;
  - snake*case: ao invés de espaços entre as palavras colocamos * (undeline). Ex.: check_if_name;
  - Escrever em inglês;

### Declaration assignment var

```bash
<script>
	// Variáveis e tipos de dados
	// declaração ou declaration
	var name

	// assignment or atribuição de valores
	name = "Ivan"

	// que tipo de dado foi colocado na variável
	console.log(name)
</script>
```

### Agrupando declarações

```bash
<script>
	// agrupamento de declarações
	let age, isHuman

	age = 18
	isHuman = true

	console.log(name, age, isHuman)

</script>
```

### Concatenando e interpolando variáveis

```bash
<script>

	name = "Ivan"

	// agrupamento de declarações
	let age, isHuman

	age = 18
	isHuman = true

	// multiplos argumentos na função
	// console.log(name, age, isHuman)

	// escrita de texto + variáveis

	// concatenando valores
	cosole.log('o ' + name + 'tem ' + age ' ano .')

	// interpolando valores com templates literals or template strings
	//uso de ´´(crase) para abrir e fechar e ${ } para embrulhar a variável
	console.log(´o ${name} tem ${age} anos.´)

</script>
```

## Funções (Function)

- É uma estrutura de dados;

### Declaração e Execução

```bash
// declaration - declaração da função
// function statement
function createPhrases() {
	console.log('Estudar é muito bom')
	console.log('Paciência e persistência')
	console.log('Revisão é a mãe do aprendizado')
}

// executar função
// rodar, chamar, invocar
// execute, run, call, invoke
createPhrases()

console.log('fim do programa')
```

### Argumentos e Parâmetros

```bash
// function expression
// function anonumous

// parâmetros (parameters) da função criada
const sum = function(number1, number2){
	console.log(number1 + number2)
}

sum(2, 3) // arguments (argumentos) em uma função executada
```

### Retornando valores dentro da função

```bash
// parâmetros (parameters)
const sum = function(number1, number2){
	let total = number1 + number2
	return total
}

let number1 = 34
let number2 = 25

console.log(´o número 1 é ${number1}´)
console.log(´o número 2 é ${number2}´)
console.log(´a soma é ${sum(number1, number2)}´)
console.log(´total´)
```

```bash
// Função é um liquidificador

function fazerSuco(fruta1, fruta2) {
	return 'suco de: ' + fruta1 + fruta2
}
const copo = fazerSuco('banana', 'maçã')

console.log(copo)
```

### Function scope

```bash
// function scope

// Neste scope o subject tem um significado
let subject = 'create video'

// Neste scope o subject tem outro significado
function createThink(subject) {
	subject = 'study'
	return subject
}

console.log(createThink(subject))
```

### Function hoisting

```bash
// function hoisting

sayMyName()

function sayMyName() {
	console.log('Ivan')
}
```

### Arrow function

- Arrow é uma seta, usada no código pela tag **_⇒_** que nada mais é do q o sinal de igual (**_=_**) mais o sinal de maior que (**_>_**);

```bash
// arrow function

const sayMyName = (name) => {
	console.log(name)
}

sayMyName('Ivan')
```

### Callback function

- Calback do inglês significa chamar de volta;
- Chamo uma função normal e vou chamar outra função de volta, em algum outro momento dentro desta função;

```bash
// callback function

function sayMyName(name) {
	console.log('antes de executar a função callback')

	name()

	console.log('depois de executar a callback')
}

sayMyName(
	() => {
		console.log('estou em uma callback)
	}
)
```

### Funções construtoras

- Temos uma expressão **_new_** que vamos usar na frente da função, que automaticamente irá retornar um objeto;
- **this keyword -** E dentro do objeto usamos a expressão **_this_** para fazer o molde do objeto;

```bash
// Function() constructor

function Person(name) {
	this.name = name
	this.walk = function() {
		return this.name + "está andando"
	}
}

const ivan = new Person("Ivan")
const joao = new Person("João")
console.log(ivan.walk())
console.log(joao.walk())
```

## Manipulando dados

### Prototype (protótipo)

- **Prototype-based language** (Linguagem baseada em protótipos);
- **Prototype chain** (Cadeia de protótipos);
- ****proto**** ;
- Onde posso colocar um **. (ponto)** na frente dos diversos tipos de valores e acessar todas as coisas disponíveis; \*\*\*\*

### Type conversion coersion

- **Type conversion** ⇒ Onde “Eu”, explicitamente, altero um tipo de dado para outro tipo (capacidade nossa de fazer a troca);
- **Type coersion** ⇒ É o JavaScript, inplicitamente, fazendo esta troca (capacidade de forçar uma troca);

### Strings em números

- Transformar String em Número e Número em String;
  ```bash
  let string = "123"
  console.log(Number(string))
  let number = 321
  console.log(String(number))
  ```

### Contando caracteres e dígitos

- Contar quantos caracteres tem uma palavra e quantos dígitos tem um número;
  ```bash
  let word = "Paralelepipedo"
  console.log(word.length)
  let number = 1234
  console.log(String(number).length)
  ```

### Casas decimais

- Transformar um número quebrado com 2 casas decimais e trocar o ponto por vírgula;
  ```bash
  let number = 345.334522345
  console.log(number.toFixed(2).replace(".", ","))
  ```

### Maiúsculas e minúsculas

- Transformando letras minúsculas em maiúsculas, e maiúsculas em minúsculas;
  ```bash
  // Tudo em letras Maiúsculas
  let word = "Programar é muito bacana!"
  console.log(word.toUpperCase())

  //Tudo em letras Minúsculas
  let word = "Programar é muito bacana!"
  console.log(word.toLowerCase())

  ```

### Encontrando palavras em frases

- Verificar se contém “Tal Palavra” dentro de um texto;

```bash
// Boolean false
let phrase = "Eu quero viver o amor!"
console.log(phraseincludes("Amor"))

//Boolean true
let phrase = "Eu quero viver o amor!"
console.log(phraseincludes("amor"))
```

- includes ⇒ é case sensitive, ele faz diferença entre minúsculas e maiúsculas;

### Separando strings

- Separando um texto que contêm espaços, em um novo array onde cada texto é uma posição do array;
  ```bash
  // Cada arrray vai ficar separado por espaços
  let phrase = "Eu quero viver o Amor!"
  let myArray = phrase.split(" ")
  consoler.log(myArray)
  ```
- Transformando um array em um texto e onde eram espaços, coloque \_ ;
  ```bash
  // Cada arrray vai ficar separado por _
  let phrase = "Eu quero viver o Amor!"
  let myArray = phrase.split(" ")
  let phraseWithUnderscore = myArray.join("_")
  consoler.log(phraseWithUnderscore)
  ```

### Criando array com construtor

```bash
//Manipulando Arrays

let myArray = new Array('a', 'b', 'c')
console.log(myArray)
```

### Elementos do Array

- Contar elementos de um array;
  ```bash
  console.log(["a", "b", "c"].lenght)

  console.log([
  	"a",
  	{type: "array"},
  	function() { return "alo"},
  ])
  ```

### Strings para arrays

- Transformando uma cadeia de caracteres em elementos de um array;
  ```bash
  let word = "manipulação"
  console.log(Array.from(word))
  ```

### Manipulando arrays

```bash
let techs = ["html", "css", "js"]

// adicionar um item no fim
techs.push("nodejs")

// adioconar no começo
techs.unshift("sql")

// remover do fim
techs.pop()

// remover do começo
techs.shift()

// pegar somente algun elementos do array
console.log(techs.slice(1, 3))

// remover 1 ou mais itens em qualquer posição do array
techs.splice(1, 1)

// encontrar a posição de um elemento no array
let index = techs.indexOf('css')
techs.splice(index, 1)
console.log(index)

console.log(techs)
```
