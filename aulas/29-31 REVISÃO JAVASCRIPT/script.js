//caixa de alert
alert("Olá mundo")

//caixa de confirmação
let teste = confirm ("Deseja sair desta tela? ")
console.log("O resultado é: ", teste)

//caixa de prompt
let msg = prompt("Qual é o seu nome? ")

//Mostra no log do inspecionar
console.log("Seu nome é ", msg)

//Mostra na tela
document.write("Seu nome é ", msg)
document.write("<br><br>")

//Estrutura condicional
if (10 < 8){
    document.write("O valor 10 é maior que 8")
    document.write("<br><br>")
} else {
    document.write("O valor 10 NÃO é maior que 8")
    document.write("<br><br>")
}

let valor = 10
if (valor > 8){
    document.write("O valor 10 é maior que 8")
    document.write("<br><br>")
} else {
    document.write("O valor 10 NÃO é maior que 8")
    document.write("<br><br>")
}

//If Else
let idade = 20
if (idade <=12) {
    document.write("É uma criança")
} else if (idade <=17){
    document.write("É um adolescente")
} else if (idade <=29){
    document.write("É um jovem adulto")
    document.write("<br><br>")
} else if (idade <=60){
    document.write("É um adulto")
} else{
    document.write("É um idoso")
}

let valor1 = 15
//let valor1 = 30
//let valor1 = 18
//&& = e comercial
if (valor1 > 10 && valor1 < 20){
    document.write("Valor válido")
    document.write("<br><br>")
} else {
    document.write("Valor é inválido")
}

let valor2 = 15
//let valor2 = 30
//let valor2 = 18
//|| pipeline, ou
if (valor2 > 10 || valor2 < 20){
    document.write("Valor válido")
    document.write("<br><br>")
} else {
    document.write("Valor é inválido")
}