import React from 'react'
import '../Componentes/css/api.css'
import {useState} from 'react'

function Api3(){

    //useState
    const[projetos, setProjetos] = useState([])

    //Promisse
    //É tipo uma api que  faz a url renderize os valores que tem dentro dele
    fetch("",{

        method:"GET",
        headers:{
            'Content-Type':'application/json'
        },
    })
    .then((resp)=>resp.json())
    .then((data)=>{
        setProjetos(data)
    })
    .catch((erro)=>console.log(erro))

    return(
        projetos.map((projetos)=>(
            <div className='Projetos' key={projetos.id}>
                <h2>{projetos.nome}</h2>
                <h2>{projetos.idade}</h2>
            </div>
        ))
    )
}
export default Api3