
function onImg(a){
    a.style="transform: scale(1.1); transition: transform 0.15s;";
}

function outImg(a){
    a.style="transition: transform 0.5s;  color:#ffeeee;";
}

function onMenu(a){
    a.style="transition: color 0.1s; color:#fff; transform: scale(1.2); transition: transform 0.15s;";
}

function outMenu(a){
    a.style="transition: transform 0.5s;  color:#ffeeee;";
}

function downScale(x){
    x.style="transform: scale(1.0); transition: transform 0.2s; z-index: -1;";
}

function upScale(x){
     x.style="transform: scale(1.04); transition: transform 0.15s; background-color: #fff; box-shadow: 3px 3px 12px  #ededed;";
}

function upScaleMenu(x){
    x.style="font-weight: bold; margin-left:5%; transition: margin-left 0.2s;";
}

function downScaleMenu(x){
    x.style="font-weight: none; color: #7c7c7c; transition: margin-left 0.4s;";
}

function exCategoria(categoria){
    let elementos = document.getElementsByClassName('produtos');
    for(let i = 0; i < elementos.length; i++){
        if(categoria == elementos[i].id){
            elementos[i].style="display:inline-block;";
        }else{
            elementos[i].style="display:none;";
        }
    }
}

function exTudo(){
    let elementos = document.getElementsByClassName('produtos');
    for(i=0; i<elementos.length; i++){
        elementos[i].style="display:inline-block";
    }
}