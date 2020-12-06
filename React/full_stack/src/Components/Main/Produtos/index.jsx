import { useState, useEffect } from 'react';

import Rodape from '../../Rodape';
import Prod from '../Produto';
import './style.css';

function Produtos(){

    const [produtos, setProdutos] = useState([]);

    useEffect(async () => {
        const resposta = await fetch("http://localhost/React/api_php/produtos.php")
        const dados = await resposta.json()
        setProdutos(dados)
    }, []);

    function Filtro(props){

    }

    const [filtro, setFiltro] = useState([]); 

    return(
        <main className="main container py-4 corpodoc">
            <h1 className="h1 pb-3">Nossos Produtos</h1>
            <section className="row">
                <aside className="col-sm-2 p-3">
                    <div className="list-group list-group-flush">
                        <a href="#" className="list-group-item list-grounp-item-action py-1" >Todas</a>
                        <a href="#" className="list-group-item list-grounp-item-acti py-1" onClick={Filtro}>Geladeiras</a>
                        <a href="#" className="list-group-item list-grounp-item-action py-1" onclick="exCategoria('fogao')">Fogões</a>
                        <a href="#" className="list-group-item list-grounp-item-action py-1" onclick="exCategoria('microondas')">Microondas</a>
                        <a href="#" className="list-group-item list-grounp-item-action py-1" onclick="exCategoria('lavadouras')">Lavadouras</a>
                        <a href="#" className="list-group-item list-grounp-item-action py-1" onclick="exCategoria('lavaloucas')">Lava-louças</a>
                    </div>
                </aside>

                <section className="col-sm-10 py-2">
                    <div className="row">
                        {produtos && produtos.map(item =>
                            <Prod 
                                categoria={item.nomecategoria}
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