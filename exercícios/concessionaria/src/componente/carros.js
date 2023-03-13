//Importando a biblioteca do React
import React from 'react'
import carro from './carro.png';

export default function carros(props){
    return (
        <div className='main'>
            <img src={carro} className="App-carro" alt="carro" />
            <ul>
                <li>{props.carros[0]}</li>
                <li>{props.carros[1]}</li>
                <li>{props.carros[2]}</li>
                <li>{props.carros[3]}</li>
                <li>{props.carros[4]}</li>
            </ul>
        </div>
    )

}