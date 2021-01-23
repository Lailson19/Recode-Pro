import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './style.css';

function BaseMenu(props) {
    const { location } = props
    return(
        <header className="w-100 bg-danger">
            <nav activeKey={location.pathname} class="navbar navbar-expand-lg navbar-light container">
                <Link class="navbar-brand" exact to="/">
                    <img src={require('../imagens/logo.png').default} className="header-logo" />
                </Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Alterna navegação">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                    <div class="navbar-nav">
                        <li class="nav-item px-2">
                            <Link class="nav-link text-white" to="/produtos">Produtos</Link>
                        </li>
                        <li class="nav-item px-2">
                            <Link class="nav-link text-white" to="/lojas">Lojas</Link>
                        </li>
                        <li class="nav-item px-2">
                            <Link class="nav-link text-white" to="/contatos">Contatos</Link>
                        </li>
                        <li class="nav-item px-2 dropdown">
                            <Link class="nav-link text-white" to="/login">Login</Link>
                        </li>
                    </div>
                </div>
            </nav>
        </header>
    );
}

const Menu = withRouter(BaseMenu);

export default Menu;