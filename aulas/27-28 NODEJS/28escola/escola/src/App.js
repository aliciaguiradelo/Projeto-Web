import './App.css';
import escola from './img/escola.jpg';
import Lista from './componente/ListaAlunos'

export default function App() {
  //Código JavaScript com função antes do return
  //Estou declarando uma variável, nomeando ela e atribuindo um valor para ela.
  const aluno = ' alicia'
  const curso = ' ADS'
  //Estou declarando um arraylist com 3 valores
  const alunos = [' joao, ', ' jose, ', ' maria. ']
  const valor = 1 + 3
  return (
    <div className="App">
      <h1>ESCOLA</h1>
      <img src={escola} width="300px" height="200px" className="App-logo" alt="imagem escola"></img>
      <br></br>
      {/* //Estou consumindo as variáveis */}
      <p> Aluno: <b>{aluno}</b></p>
      <p> Curso: <b>{curso}</b></p>
      <p>Alunos: <b>{alunos}</b></p>
      <p>Valor: <b>{valor}</b></p>
      <button onclick="clique()">Botão</button>
      <select>
        <option value="valor1">João</option>
        <option value="valor2">Jose</option>
        <option value="valor3">Maria</option>
      </select>

      <Lista alunos = {alunos} />
    </div>
  );
}
//A linha 13 serve para pegar todo o código e exportar para a função App. Pode ficar na linha 13 ou antes do nome da função na linha 4.
//export default App;