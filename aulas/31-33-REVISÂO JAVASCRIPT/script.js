//Função tradicional
function soma (num1,num2){
    return num1 + num2
}
console.log(soma(2,3))

//Arrow function
const soma1 = (num3,num4) =>{
    return num3 + num4
}
console.log(soma1(5,9))

//Função tradicional
const texto = "Ola mundo"
function sepaTexto (texto){
    return texto.split('')
}
console.log(sepaTexto(texto))

//Arrow function
const texto1 = "mundo"
const sepaTexto1=(texto1) =>{
    return texto1.split('')
}
console.log(sepaTexto1(texto1))

//Arrow function com array
//Criei um objeto chamado usuário
const usuarios=[
    //Criei um array para passar atributos e valores para cada objeto do tipo usuario
    {id:1,nome:"Alicia"},
    {id:2,nome:"Guilherme"},
    {id:3,nome:"Rose"}
]
//Método find usado para encontrar algo dentro de um array
const usuario=usuarios.find(usuario=>usuario.id === 1)
//Para concatenar a linha de baixo, use shift+crase (a crase fica do lado da tecla p)
document.write(`O usuário é: ${usuario.nome}<br>`);

//Função tradicional
hello = () => {
    return "Hello World!";
}

//Arrow function
hello = () => "Hello World!";

//Exemplo usando filter, map e reduce
//Filter acessa superficialmente o array
//Já o map acessa o objeto dentro do array
const funcionarios = [
    {nome:'Alicia',salario:3280,dataNascimento:2001},
    {nome:'Gui',salario:5280,dataNascimento:2001},
    {nome:'Arthur',salario:4280,dataNascimento:2003},
]
const dataNascimento = funcionarios.filter(funcionario => (funcionario.dataNascimento < 2003));

console.log(dataNascimento);

const exibeInfo1 = funcionarios.map(funcionario =>`${funcionario.nome} `);

console.log(exibeInfo1)

document.write('Usuário(s) nascido(s) antes de 2003: ' + exibeInfo1);

const dataNascimento2 = funcionarios.filter(funcionario => (funcionario.dataNascimento > 2000));

console.log(dataNascimento2);

const dataNascimento3 = funcionarios.filter(funcionario => (funcionario.dataNascimento > 2001));

console.log(dataNascimento3);

const exibeInfo = funcionarios.map(funcionario => `${funcionario.nome} ` + `ganha um salário de ` + `${funcionario.salario}`);

console.log(exibeInfo)

const total = funcionarios.reduce((resultado,valorTotal) => {
    return (resultado + valorTotal.salario)
}, 0)
console.log(total)