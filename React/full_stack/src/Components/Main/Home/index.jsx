import React from 'react';
import Rodape from '../../Rodape';
import './style.css';

function BemVindo(props) {
    return <h1 className="h1">Bem vindo(a), {props.name}</h1>;
}

function Home(){
    return(
        <main>
        <section className="main container py-4">
            <BemVindo name="Sr. Lailson"/>
            <p>Aqui em nossa loja programadores tem desconto nos produtos para sua casa!</p>
        </section>
        <Rodape />
        </main>
    );
}

export default Home;