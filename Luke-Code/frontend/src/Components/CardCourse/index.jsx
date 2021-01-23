import './style.css';

const CardCourse = (props) => {
    return(
        <article>
            <img src={props.image} alt={props.description}/>
            <h5>{props.children}</h5>
        </article>
    )
}

export default CardCourse;