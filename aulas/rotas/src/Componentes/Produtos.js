import { Link } from "react-router-dom"

export default function Produtos(){

    const produto={
        backgroundColor:'#bff',
        height: '500px',
        textAlign: 'center',
        color: '#000'
    }

    return(
        <div>
            <h1>Página de produtos</h1>
            <p>Esta é uma página de produtos</p>
            <br/>
            <button>
                <Link to="/Menu">Voltar</Link>
            </button>
        </div>
    )
}