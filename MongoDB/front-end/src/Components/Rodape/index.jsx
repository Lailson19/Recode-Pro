import React from 'react';
import cartoes from '../imagens/cartoes.png';
import './style.css';

function Rodape(){
    return(
        <footer className="w-100 mt-3 text-center footer">
            <p className="footer-header">Formas de pagamento</p>
                <img src={cartoes} alt="Formas de pagamento" className="footer-cartoes mb-2"  />
            <p className="text-dark">&copy; Recode Pro</p>
        </footer>
    );
}

export default Rodape;