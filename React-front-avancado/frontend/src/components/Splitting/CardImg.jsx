import reactRedux from '../../assets/images/courses/react-redux.jpg';
import coursePHP from '../../assets/images/courses/php.jpg'
import courseFlutter from '../../assets/images/courses/flutter.jpg'

import CardCourse from '../CardCourse';

function CardImg () {
    return(
        <section className="card-container">
            <CardCourse 
            image={reactRedux} 
            description="Desenvolvimento front-end React e Redux" 
            > 
            Desenvolvimento front-end <br /> React e Redux
            </CardCourse>
            <CardCourse 
            image={coursePHP} 
            description="PHP 7 - Trabalhando com PSRs"
            >
            PHP 7 - Trabalhando com PSRs
            </CardCourse>
            <CardCourse 
            image={courseFlutter} 
            description="Desenvolvimento IOS e Android com Flutter" 
            > 
            Desenvolvimento IOS e Android <br /> com Flutter
            </CardCourse>
        </section>
    )
}

export default CardImg;