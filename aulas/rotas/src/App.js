import React from "react";
//importando o componente para tratar as rotas do projeto
import {BrowserRouter,Routes,Route} from 'react-router-dom'

//importando componentes
import Home from './Componentes/Home'
import Produtos from './Componentes/Produtos'
import Servicos from './Componentes/Servicos'
import Error from './Componentes/Error'
import Menu from "./Componentes/Menu";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route patch="/" element={<Home/>}/>
        <Route patch="/Produtos" element={<Produtos/>}/>
        <Route patch="/Servicos" element={<Servicos/>}/>
        <Route patch="*" element={<Error/>}/>
        <Route patch="/Menu" element={<Menu/>}/>
      </Routes>
    </BrowserRouter>
  );

}

export default App;
