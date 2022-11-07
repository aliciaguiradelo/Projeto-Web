/*let nome = "Alicia Guiradelo";
let idade = 42;
alert("Nome: " + nome + "Idade: " + idade);*/

//document.getElementById("txtNumero").value = "Valor preenchido no script";

//alert("Dentro da página");
        /*function nome_funcao(){

        }*/
        //function mostra_menor(){
            //let nr1 = parseInt(document.getElementById("txtNumero1").value); /*VARIÁVEL*/
            //let nr2 = parseInt(document.getElementById("txtNumero2").value); /*VARIÁVEL*/
            //let objDiv = document.getElementById("idResultado"); /*OBJETO*/
            //let resultado = ""; /*VARIÁVEL RESULTADO*/

            //if(nr1>nr2)
                //resultado = "Número " + nr1 + " é maior do que número " + nr2;
            //else if(nr1==nr2)
                //resultado = "Números são iguais";
            //else
                //resultado = "Número " + nr1 + " é menor do que número " + nr2;

            
            //objDiv.innerHTML = resultado;*/
            //document.getElementById("idResultado").innerHTML = resultado;

            /*if(nr1>nr2){
                alert("Número " + nr1 + " é maior do que o número " + nr2);
            }
            else {
                if(nr1==nr2)
                    alert("Números são iguais")
                else
                    alert("Número " + nr1 + "é maior do que número " + nr2);
            }*/
            /*if(nr1>nr2)
                alert("Número " + document.getElementById("txtNumero1").value + " é maior do que o número " + document.getElementById("txtNumero2").value);
            else if(nr1==nr2)
                alert("Números são iguais")
            else
                alert("Número " + document.getElementById("txtNumero2").value + "é maior do que número " + document.getElementById("txtNumero1").value);*/
        //}

        function mostra_menor(pNum1, pNum2){
            let nr1 = parseInt(pNum1); /*VARIÁVEL*/
            let nr2 = parseInt(pNum2); /*VARIÁVEL*/
            let objDiv = document.getElementById("idResultado"); /*OBJETO*/
            let resultado = ""; /*VARIÁVEL RESULTADO*/

            if(nr1>nr2)
                resultado = "Número " + nr1 + " é maior do que número " + nr2;
            else if(nr1==nr2)
                resultado = "Números são iguais";
            else
                resultado = "Número " + nr1 + " é menor do que número " + nr2;

            
            objDiv.innerHTML = resultado;

        }