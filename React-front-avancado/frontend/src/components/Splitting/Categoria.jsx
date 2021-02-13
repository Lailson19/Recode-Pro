import CardCategory from '../../components/CardCategory';

function Categoria(){
    return(
        <section className="categories-container">
        <CardCategory title="BACK-END" courses="22 cursos" color="red" />
        <CardCategory title="BANCO DE DADOS" courses="2 cursos" color="yellow" />
        <CardCategory title="SEGURANÇA" courses="22 cursos" color="purple" />
        <CardCategory title="MOBILE" courses="17 cursos" color="blue" />
        <CardCategory title="FRONT-END" courses="12 cursos" color="green" />
        <CardCategory title="CLOUD-COMPUTING" courses="8 cursos" color="orange" />
    </section>
    )
}

export default Categoria;