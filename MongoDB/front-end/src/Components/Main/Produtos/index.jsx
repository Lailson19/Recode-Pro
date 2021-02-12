import { useState, useEffect } from 'react';

import Rodape from '../../Rodape';
import Menulateral from '../Menulateral';
import Prod from '../Produto';
import './style.css';

function Produtos(){

    const [produtos, setProdutos] = useState([]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async () => {
        const resposta = await fetch("http://localhost:3333/produtos")
        const dados = await resposta.json()
        setProdutos(dados)        
    }, []);

    // const [filtro, setFiltro] = useState([]);
    // useEffect(async () => {
    //     const resposta2 = await fetch("http://localhost/React/api_php/categorias.php")
    //     const dados2 = await resposta2.json()
    //     setFiltro(dados2)
    // }, []);

    function Tudo(){
        let elementoss = document.getElementsByTagName('figure');
        for(let i = 0; i < elementoss.length; i++){
        elementoss[i].style.visibility="visible"
        }
    }

    return(
        <main className="main container py-4 corpodoc">
            <h1 className="h1 pb-2">Nossos Produtos</h1>
            <section className="row">

                <aside className="col-sm-2 p-3">
                    <div className="list-group list-group-flush">
                        <a href="#" className="list-group-item list-grounp-item-action py-1" onClick={Tudo}>Todas</a>
                        {produtos && produtos.map(item =>
                            <Menulateral categoria={item.categoria} />
                        )}
                    </div>
                </aside>
                <section className="col-sm-10 py-2">
                    <div className="row">
                        {produtos && produtos.map(item =>
                            <Prod 
                                categoria={item.categoria}
                                imagem={item.imagem}
                                descricao={item.descricao}
                                preco={item.preco}
                                precofinal={item.precofinal}
                            />
                        )}
                    </div>
                </section>
            </section>
            <Rodape />
        </main>
    );
}

export default Produtos;