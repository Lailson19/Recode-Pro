import React from 'react';

function Loja(props){
    return(
        <div className="col-sm-4">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">{props.cidade}</h5><hr/>
                    <p class="card-text">{props.logradouro} <br/> {props.compbairro} <br/> {props.phone} </p>
                </div>
            </div>
        </div>
    )
}

export default Loja;