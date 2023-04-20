import React from "react"
import {useForm} from 'react-hook-form'

function Api(){

    const{register,handleSubmit,setValue,setFocus} =useForm();

    const onSubmit = (e)=>{
        console.log(e);
    }

    // funcão checkCep
    const checkCep =(e)=>{
    const cep =e.target.value.replace(/\D/g,'');
    //passa o cep que foi digitado esperando um json de resposta
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(res =>res.json()).then(data => { // transforma a resposta para um objeto json
     console.log(data);  
     
     // setar os campos register
     setValue('rua',data.logradouro);
     setValue('bairro',data.bairro);
     setValue('cidade',data.localidade);
     setValue('estado',data.uf);
     setFocus('numero');
    
    })

    }
    return(
        
        <form onSubmit={handleSubmit(onSubmit)}>
            <h1> Consumindo uma Api</h1>
            <br/>
            <label> CEP: 
                <input type="text"{...register("cep")} onBlur={checkCep}/>
            </label>

            <label> RUA: 
                <input type="text"{...register("rua")}/>
            </label>
            <label> NÚMERO: 
                <input type="text"{...register("numero")}/>
            </label>

            <label> BAIRRO: 
                <input type="text"{...register("bairro")}/>
            </label>

            <label> CIDADE: 
                <input type="text"{...register("cidade")}/>
            </label>

            <label> ESTADO: 
                <input type="text"{...register("estado")}/>
            </label>

            <button type="submit" id="enviar">Enviar</button>


        </form>

      
    )
}
export default Api