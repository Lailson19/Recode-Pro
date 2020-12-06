import React from 'react';

import Mensagem from '../Mensagem';
import Contatophone from '../Contatophone';
import Rodape from '../../Rodape';
import './style.css';

function Contatos(){
    return(
        <main className="main container py-4">
            <h1 className="h1 pb-3">Nossos Contatos</h1>
            <div className="row mt-3">
                <section className="col-sm-6 d-flex justify-content-center formContato">
                    <Mensagem />
                </section>
                <section className="col-sm-6 d-flex justify-content-center contatos">
                    <div>
                        {/* <img class="imgContatoEmail" src={require("../imagens/email.png").default} alt="E-mail" />
                        <label class="textContatoEmail">contato@fullstackeletro.com</label>
                        <br>
                        <img class="imgContatoWhats" src="./img/whats.png" alt="Whatsapp">
                        <label class="textContatoWhats">(11) 99999-9999</label> */}
                        <Contatophone />
                    </div>
                </section>
            </div>
            <Rodape />
        </main>
    )
}

export default Contatos;