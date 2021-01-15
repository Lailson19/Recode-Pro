import React from 'react';
import './style.css';

function Contatophone(){
    return(
        <div className="contatos mt-4">
            <img className="imgContatoEmail mb-2" src={require('../../imagens/email.png').default} alt="E-mail" />
            <span className="textContatoEmail">
                contato@fullstackeletro.com
            </span>
            <br/>
            <img className="imgContatoWhats mb-1" src={require('../../imagens/whats.png').default} alt="Whatsapp" />
            <span className="textContatoWhats">
                (11) 99999-9999
            </span>
        </div>
    );
}

export default Contatophone;
