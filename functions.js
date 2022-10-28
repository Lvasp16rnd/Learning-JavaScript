//Variavéis

//parecido com python
let idade = 5;
// console log é o print daqui
console.log(idade);
// só tem efeito no console, claro
// lembrando do camelCase
let minhaIdade = 20;
// a cada palavra em uma variavel deve-se
// usar a primeira letra em maiuscula
// e o resto em minúsculo
console.log(minhaIdade);

//Constantes

// caso você precisa redefinir o valor de uma 
// variavel, se usa o let, porem caso não
// deve se usar um const

let exemplo = 'esse texto pode ser alterado';
console.log(exemplo);
exemplo = 'mudei o texto';
console.log(exemplo);
const exemploDois = 'nesse caso não';
console.log(exemploDois);

//Boolean e padrões

//boolean são variaveis com comandos de
//verdadeiro ou falso
const cor = 'azul';
let validar = null;
//no caso usei if e else igual no python
//só mudando um pouco a sintaxe 
if (cor == 'azul') {
    validar = true
    console.log(validar) 
}else {
    validar= false;
    console.log(validar)
};

//Descobrir tipos

//alguns exemplos

let nome = 'ronaldo';
let idade = 25;
let verdadeiroOuFalso = true;
let naoDefinido = undefined;
let nenhum = null;
//no console você irá digitar isso
//para verificar cada variável
typeof nome,idade,verdadeiroOuFalso,naoDefinido,nenhum;  

//Objeto

//para se declarar um objeto devemos fazer igual
//uma variavel mas colocando as variaveis do objeto
//dentro das {} e a cada variavel usamos a virgula
let serHumano= {
    nome: 'Carlos',
    idade: 19,
    aprovacaoEscolar: false,
    sobrenome: 'Perreira'
};
//em seguida vemos no console
console.log(serHumano);

//Arrays

//conjuto de dados acessado por um indice
//o famoso lista no python

let filmes= ['Avengers','Batman','Black Adan','Ant-Man','Thor'];
//alguns tipos de uso
console.log(filmes.length);
console.log(filmes);
console.log(filmes[3]);
//é bastante parecido com o que há no python

//Funções

// parecido com python, apenas algumas coisas diferentes
// uso de {}
function dizerNome(){
   console.log('marcelo');
}
//para usar basta chamar a função já feita
dizerNome();

function MultiplicarPorDois(valor){
   return valor*2;
}
// e para atribuir basta digitar algo nas ()
let resultado = MultiplicarPorDois(5);

console.log(resultado)

//Operadores

//matemáticos
console.log('Exemplo' + ' ' + 'Um');
console.log(5 + true);
//operador de assimilação
let a = 5;
let b = 'número cinco';
console.log(a += 4);
console.log(b += 'ênta e um');
//assignar
let x = 2;
let y = 6;
console.log(x= y-2);
//após modificar o valor ele terá resultado
//na próxima operação.
console.log(x= x*y);

