import {Link} from 'react-router-dom'
import '../index.css'
import '../Componentes/css/style.css'

function Nav(){
    
    return(
        <div id="menu">
            <ul>
                <li>
                    <Link to="/">HOME</Link>
                </li>
                <li>
                    <Link to="/Empresa">Empresa</Link>
                </li>
                <li>
                    <Link to="/Contato">Contato</Link>
                </li>
                <li>
                    <Link to="/Atividade1">Atividade1</Link>
                </li>
                <li>
                    <Link to="/Api">Api</Link>
                </li>
            </ul>
        </div>
    );
}
export default Nav;