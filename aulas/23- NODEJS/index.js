console.log("Seja bem vindo!!");

var funcionario = "Alicia";

console.log("Olá, " + funcionario + " seu valor com desconto é R$ ");

var ValorPago = 100.00;
var desconto = 20.00;

var descontoFun = require ("./modules/rh");

var valorAreceber = descontoFun(ValorPago-desconto)

console.log(valorAreceber)