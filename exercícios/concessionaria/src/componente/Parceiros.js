//Importando a biblioteca do React
import React from 'react'

export default function parceiros(props){
    return (
        <div>
            <h2>Parceiros</h2>
            <ul>
                <li>{props.parceiros[0]}</li>
                <li>{props.parceiros[1]}</li>
                <li>{props.parceiros[2]}</li>
                <li>{props.parceiros[3]}</li>
            </ul>
        </div>
    )

}