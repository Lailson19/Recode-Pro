import React from 'react';
import './style.css';

function Mensagem(){
    return(
        <form className="text-center mb-3">
            <h6>Deixe sua opinião / reclamação</h6>
            <div class="form-group mb-2">
                <input type="email" class="form-control" id="form-email" placeholder="Seu E-mail" />
            </div>
            <div class="form-group mb-2">
                <input type="text" class="form-control" id="form-name" placeholder="Seu Nome" />
            </div>
            <div class="form-group">
            <textarea type="text" class="form-control" id="form-text" placeholder="Sua Mensagem" />
            </div>
            <button type="submit" className="btn form-control mt-2">Enviar</button>    
        </form>
    );
}

export default Mensagem;