import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Menu from './components/menu'
import './App.css';

function App() {  
  const [inputFrutas, setinputFrutas] = React.useState("");
  const [inputTitulo, setinputTitulo] = React.useState("");

  const frutas = useSelector((state) => state.frutasReducer.frutas);
  const stateTitulo = useSelector((state) => state.tituloReducer.titulo);
  const dispatch = useDispatch();

  function adicionarFruta(event){
    event.preventDefault();
    const objFruta = {
      nome: inputFrutas
    }
    dispatch({type: "ADICIONAR", value: objFruta});
  }
  
  function alterarTitulo(event){
    setinputTitulo(event.target.value);
    dispatch({type: "ALTERAR", value: event.target.value});
  }

  return (
    <div>
      {/* <Menu /> */}

      <form>
        <label>Informe um título:</label>
        <input
          placeholder="Digite o título"
          value={inputTitulo}
          onChange={alterarTitulo}
        />
      </form>

      <h1>{stateTitulo}</h1>
      <form onSubmit={adicionarFruta}>
        <input
          placeholder="Digite uma fruata..."
          value={inputFrutas}
          onChange={(event) => setinputFrutas(event.target.value)}
        />
        <button>Enviar</button>
      </form>

      {frutas.map((fruta, index) => {
        return(
          <li key={index}>{fruta.nome}</li>
        )
      })}

    </div>
  );
}

export default App;
