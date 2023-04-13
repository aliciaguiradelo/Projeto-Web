import React,{useState} from 'react'
import '../Componentes/css/style.css'

function Atividade1(){
    //Criando variáveis para receber valores de nome e endereço
    const [nome, setNome] = useState()
    const [endereco, setEndereco] = useState()

    function exibirDados(){
        setNome(nome)
        console.log(nome)
        setNome(endereco)
        console.log(endereco)
    }

    return (
        <div className='Atividade1'>
            <h1>CADASTRO DE ENDEREÇOS</h1>
            <input type="text" placeholder='Digite seu nome' onChange={(e)=>setNome(e.target.value)}></input><br/><br/>
            <input type="text" placeholder='Digite seu endereço' onChange={(e)=>setEndereco(e.target.value)}></input><br/><br/>
            {nome &&(
                <div>
                    <p id="dados">O nome do usuário é:<span> {nome}</span></p><br/>
                    <p id="dados2">O endereco do usuário é:<span> {endereco}</span></p><br/>
                </div>

            )}
        </div>

    )

}
export default Atividade1