import React,{useState} from 'react'
import '../Componentes/css/style.css'

function Home(){
    //criando o useState (manipula o estado da variável) 
    const [nome, setNome] = useState ("Alicia")
    const [email, setEmail] = useState ()
    const [userEmail, setUserEmail] = useState()

    //criando uma função para enviar email
    function enviarEmail() {
        //e.preventDefault()
        setUserEmail(email)
        console.log(userEmail)
    }

    //criando a função limpar campo
    function limparEmail(){
        setUserEmail('')
    }

    return (
        <div className="home">
            <h1>HOME</h1>
            <br/>
            <p className="nome">NOME: {nome} </p><br/>
            <button onClick={()=>setNome('usuario')}> MUDAR NOME </button><br/><br/>
            <h2>CADASTRE SEU EMAIL</h2><br/>
            <input type="email" placeholder='Digite seu email' onChange={(e)=>setEmail(e.target.value)}></input><br/><br/>
            <button type="submit" onClick={enviarEmail}>ENVIAR</button><br/><br/>
            {/*{email}*/}
            {/*condição para verificar se o campo email está preenchido*/}
            {userEmail &&(
                <div>
                    <p id="userEmail">O email do usuário é:<span> {userEmail}</span></p><br/>
                    <button onClick={limparEmail}>LIMPAR CAMPO</button>
                </div>

            )}
        </div>
    )
}
export default Home