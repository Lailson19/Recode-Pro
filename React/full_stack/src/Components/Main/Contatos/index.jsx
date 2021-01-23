import React from 'react';

import Mensagem from '../Mensagem';
import Contatophone from '../Contatophone';
import Rodape from '../../Rodape';
import './style.css';

function Contatos(){
    return(
        <main className="main container py-4">
            <h1 className="h1 mb-4">Nossos Contatos</h1>
            <div className="row mb-5">
                <section className="col-sm-6 d-flex justify-content-center formContato">
                    <Mensagem />
                </section>
                <section className="col-sm-6 d-flex justify-content-center contatos">
                    <div>
                        <Contatophone />
                    </div>
                </section>
            </div>
            <Rodape />
        </main>
    )
}

export default Contatos;