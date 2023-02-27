function Logar(){
    //Declarando variáveis
    let usuario = document.getElementById("idUsuario");
    let senha = document.getElementById("idSenha");

    if (usuario.value !== "" && senha.value =="12345"){
        alert('Seja bem-vindo ao portal!')
    } else {
        alert('Usuário e senha inválidos')
    }
}

function CalcularImc(){
    let peso = document.getElementById("idPeso").value;
    let altura = document.getElementById("idAltura").value/100;
    let idResult = document.getElementById("idResult");

    console.log("Entrou");

    if (peso !== "" && altura !==""){
        let imc = (peso / (altura*altura)).toFixed(2);

        let mensagem = "";

        if(imc < 18.5){
            mensagem = "Você está abaixo do peso"
        }else if (imc < 25){
            mensagem = "Peso normal"
        }else if (imc <30){
            mensagem = "Você está acima do peso"
        }else if (imc < 39.9){
            mensagem = "Você está com grau 1 de obedidade"
        }else if(imc > 40) {
            mensagem = "Você está com grau 2 de obesidade"
        } 

        idResult.textContent= `Caro usuário(a), seu imc é ${imc}!${mensagem}`; 
    }

    else{
        idResult.textContent = "Preencha todos os campos!"
    }
}  
idSubmit.addEventListener('click', CalcularImc);