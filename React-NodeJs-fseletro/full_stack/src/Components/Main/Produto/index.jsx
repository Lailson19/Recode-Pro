import React from 'react';
import './style.css';

function Prod(props){

    return(
        <div className="col-sm-3 p-0">
            <figure className={"card pt-2 d-flex align-items-center border-0 " + props.categoria}>
                <img className="card-img-top" src={require(`../../imagens/${props.imagem}`).default} />
                <figcaption className="card-body text-center">
                    <h6 className="card-text"> {props.descricao} </h6>
                    <span className="card-text d-flex justify-content-center preco1">
                        R$ {props.preco}
                    </span>
                    <span className="card-text d-flex justify-content-center text-danger preco2">
                        R$ {props.precofinal}
                    </span>
                </figcaption>
            </figure>
        </div>
    );
}

export default Prod;