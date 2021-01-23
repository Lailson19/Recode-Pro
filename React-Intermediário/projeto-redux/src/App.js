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
    <div className="p-5">
      {/* <Menu /> */}

      <form>
        <input className="text-info border-top-0 border-left-0 border-right-0 border p-1 w-100"
          placeholder="Digite aqui o título da sua lista..."
          value={inputTitulo}
          onChange={alterarTitulo}
        />        
      </form>

      <div className="container mt-4">
        <h1 className="display-4 text-info">{stateTitulo}</h1>

        <form className="d-flex" onSubmit={adicionarFruta}>
          <input className="form-group form-control form-control-sm col-sm-8 col-md-7 col-lg-5 col-xl-5 border-right-0 rounded-0 text-info"
            placeholder="Digite seu itens..."
            value={inputFrutas}
            onChange={(event) => setinputFrutas(event.target.value)}
          />
          <button className="form-group form-control form-control-sm col-sm-4 col-md-3 col-lg-2 col-xl-2 border-left-0 rounded-0 alert-info text-info">Enviar</button>
        </form>

        <div className="list-group list-group-flush mt-1">
          {frutas.map((fruta, index) => {
            return(
              <li className="list-group-item text-info py-1"
                key={index}>{fruta.nome}
              </li>
            )
          })}
        </div>

      </div>
    </div>
  );
}

export default App;
