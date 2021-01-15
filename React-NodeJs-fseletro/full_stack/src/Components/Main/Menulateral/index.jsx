import React from 'react';


function Menulateral(props){

    function Filtro(props){
        let elementoss = document.getElementsByTagName('figure');
        for(let i = 0; i < elementoss.length; i++){
            let classcap = elementoss[i].className;
            let ultimapalavra = classcap.substring(classcap.lastIndexOf(" ")+1);
            if(props.categoria == ultimapalavra){
                elementoss[i].style.visibility="visible"
            }else{
                elementoss[i].style.visibility="hidden"
            }
        }
    }

    return(
        <>
        <a href="#" className="list-group-item list-grounp-item-acti py-1" onClick={ () => Filtro(props) }>{props.categoria}</a>
        </>
    );
}

export default Menulateral;