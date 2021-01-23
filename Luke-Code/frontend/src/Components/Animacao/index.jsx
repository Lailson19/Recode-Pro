import './anima.css';


const Animacao = () => {

    setTimeout(() => {
        document.getElementById('bg-animacao').style = "display: none";
    }, 3000);

    return(
        <div className="bg-animacao" id="bg-animacao">
            <div className="animacao">
                <h2>Luke Code</h2>
            </div>
        </div>
    )
}

export default Animacao;