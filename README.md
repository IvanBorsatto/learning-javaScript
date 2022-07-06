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
