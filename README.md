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
