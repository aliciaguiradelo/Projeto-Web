import { useEffect, useState } from 'react'
import '../Componentes/css/style.css'

function Empresa(){
    //criando o useState
    const [contador, setContador] = useState(0);
    const [ count, setCount] = useState(0);
    //criando o hook useEffect
    //useEffect tem que ser antes do return
    useEffect(() => {
    //dentro do hook estou passando um evento
        setTimeout(() => {
            setContador((contador) => contador +1);
        }, 1000);
     });
    //criando um outro hook com o useEffect
    useEffect(() => {
        document.title = `Clicou ${count}`
    }, [count])

    return (
        <div className="empresa">
         <h1>Empresa</h1>
         {/*chamando a variavel contador do useState*/}
         <h1>Inicio contador {contador}</h1>
         <br/>
         <h1>Você deu {count} cliques</h1>
         <button onClick={() => setCount (count + 1)}>Clique</button>
        </div>
    )
}
export default Empresa