var nomeSistema = "Nome do Sistema";
let nome = "Alicia Guiradelo";
let idade = 21;
//* Para declarar uma variável podemos usar tanto var quanto let*//
let isProfessor = true;
const pi = 3.141515;
const corFundoBotao = "#3d99e"
//*var é publica dentro e fora do módulo onde foi criada
//*let é privada, aparece só dentro do módulo onde foi criada
//*const serve para declarar constantes, para não ter que ficar digitando um número grande no código

//*function teste(){
//*    nomeSistema="turma";
//*    return nome;
//*}

//*function outroteste(){
//*    let conteudo = "bla bla bla";
//*    alert("OLÁ TURMA!")
//*    cor fundoBotao - "#3d99e";
//*}

console.log(nomeSistema);
console.log("Tipo do dado nome:" + typeof(nome) );
console.log("Tipo da idade:" + typeof(idade));
console.log("tipo do professor:" + typeof(isProfessor) );

/*
+ soma
- subtracao
/ divisão
* multiplicacao
% resto da divisao
*/

let num1 = 5;
let num2 = 10;

console.log("Soma: " + (num1 + num2));
console.log("Sub: " + (num1 - num2));
console.log("Mul: " + (num1 * num2));
console.log("Div: " + (num1 / num2));
console.log("Resto: " + (num2 % num1));

document.write("<h1>Olá</h1>");
document.write("<h2>Olá</h2>");
