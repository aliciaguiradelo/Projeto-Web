import './App.css';

import Cabecalho from './componente/cabecalho'
import Carros from './componente/carros';

function App() {

  const tituloCab = "Loja de veículos"
  const parag = "Seja bem vindo a loja"
  let Carros = ['BMW', 'Volksvagem', 'Volvo', 'Mercedes', 'Tesla']

  return (
    <div className="App">
      <Cabecalho tituloCabv= {tituloCab}/>
      <Cabecalho parag = {parag}/>
      <Carros carros = {Carros}/>
    </div>
  );
}

export default App;
