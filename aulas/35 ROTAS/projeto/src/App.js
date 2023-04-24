import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Componentes/Home'
import Empresa from './Componentes/Empresa'
import Contato from './Componentes/Contato'
import Nav from './Componentes/Nav'
import Footer from './Componentes/Footer'
import Atividade1 from './Componentes/Atividade1'
import Api from './Componentes/Api'
import Api2 from './Componentes/Api2'

function App() {   
return (
    <BrowserRouter>
      <Nav/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Empresa" element={<Empresa/>}/>
          <Route path="/Contato" element={<Contato/>}/>
          <Route path="/Atividade1" element={<Atividade1/>}/>
          <Route path="/Api" element={<Api/>}/>
          <Route path="/Api2" element={<Api2/>}/>
        </Routes>
        <Footer/>
    </BrowserRouter>
  );
}

export default App;
