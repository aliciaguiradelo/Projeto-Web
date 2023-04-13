import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Componentes/Home'
import Empresa from './Componentes/Empresa'
import Contato from './Componentes/Contato'
import Nav from './Componentes/Nav'
import Footer from './Componentes/Footer'

function App() {   
return (
    <BrowserRouter>
      <Nav/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Empresa" element={<Empresa/>}/>
          <Route path="/Contato" element={<Contato/>}/>
        </Routes>
        <Footer/>
    </BrowserRouter>
  );
}

export default App;
