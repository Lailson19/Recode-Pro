function troca() {
    let opc1 = document.getElementById('feminino');
    let opc2 = document.getElementById('masculino');
    let imgAtual = document.querySelector('img');
    let fundo = document.querySelector('body');
    let efeito = document.querySelector('.container');
    let fundo2 = document.querySelector('.footer');

    if (opc1.checked) {
        imgAtual.src = "./img/mulher.jpg";
        fundo.style.background = "#ff99fe";
        fundo2.style.background = "#ffddff";
        efeito.style = "box-shadow:8px 8px 20px #c455c3";
    } else if (opc2.checked) {
        imgAtual.src = "./img/homem.jpg";
        fundo.style.background = "#55abff";
        fundo2.style.background = "#d3e9ff";
        efeito.style = "box-shadow:8px 8px 20px #2467aa";
    } else {
        alert("Você precisa escolher uma das opções!");
    }
}