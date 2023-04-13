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
            </ul>
        </div>
    );
}
export default Nav;