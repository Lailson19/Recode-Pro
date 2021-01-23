import React from 'react';
import { useState, useEffect } from 'react';

import Loja from '../Loja';
import Rodape from '../../Rodape';
import './style.css';


function Lojas(props){
    const [loja, setLoja] = useState([]);
    useEffect(async () => {
        const resposta2 = await fetch("http://localhost/React/api_php/lojas.php");
        const dados2 = await resposta2.json()
        setLoja(dados2);
    }, [])

    return(
        <main>
            <section className="main container py-4">
                <h1 className="h1 pb-3">Nossas Lojas</h1>
                <div className="row">
                    {loja && loja.map(item =>                    
                        <Loja
                            cidade={item.cidade}
                            logradouro={item.logradouro}
                            compbairro={item.compbairro}
                            phone={item.phone}
                        />
                    )}
                </div>
            </section>
            <Rodape />
        </main>
    );
}

export default Lojas;