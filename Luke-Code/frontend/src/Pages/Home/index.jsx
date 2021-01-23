import CardCourse from '../../Components/CardCourse';
import CardCategory from '../../Components/CardCategory';

import './style.css';
import Animacao from '../../Components/Animacao';
import separator from '../../Assets/images/separator.svg';
import yoda from '../../Assets/images/characters/yoda.png';
import courseReact from '../../Assets/images/courses/react-redux.jpg';
import coursePHP from '../../Assets/images/courses/php.jpg';
import courseFlutter from '../../Assets/images/courses/flutter.jpg';
import markLeft from '../../Assets/images/mark-left.svg';
import markRight from '../../Assets/images/mark-right.svg';
import userReview from '../../Assets/images/characters/user.png';



const Home = () => {
    return(
        <>
          {/* <Animacao /> */}
            <div className="section1">
                <div className="box">
                    <header className="header">
                        <h2>Luke Code</h2>
                        <nav>
                            <button>FAZER LOGIN</button>
                            <button>INSCREVA-SE</button>
                        </nav>
                    </header>
                    <main>
                        <section>
                            <h1>Se torne um mestre <br/> da programação!</h1>
                            <img src={separator} alt=" "/>
                            <p>Dê o próximo passo para o seu futuro.<br/>
                            Que a força esteja com você!</p>
                        </section>
                        <section>
                            <img src={yoda} alt="Yoda"/>
                        </section>
                    </main>
                </div>
            </div>            
            <div className="section2">
                <div className="box">
                    <h2>+3 Cursos completos</h2>
                    <p>
                        Na Luke code, você tem acesso a 3 cursos gratuitos, basta se cadastrar na plataforma.
                    </p>
                    <section className="card-box">
                        <CardCourse
                            image={courseReact}
                            description={"Desenvolvimento front-end React e Redux"}
                        >
                            Desenvolvimento front-end<br/>React e Redux
                        </CardCourse>
                        <CardCourse
                            image={coursePHP}
                            description={"PHP 7 - Trabalhando com PSRs"}
                        >
                            Desenvolvimento front-end <br/> React e Redux
                        </CardCourse>
                        <CardCourse
                            image={courseFlutter}
                            description={"Desenvolvimento IOS e Android com Flutter"}
                        >
                            Desenvolvimento IOS e Android<br/> com Flutter
                        </CardCourse>
                    </section>
                    <button>INSCREVA-SE</button>                    
                </div>
            </div>
            <div className="section3">
                <div className="box">
                    <h2>O que ofereçemos para você</h2>
                    <section className="categories-box">
                        <CardCategory title=" BACK-END" courses="22 Cursos" color="red" />
                        <CardCategory title=" BANCO DE DADOS" courses="2 Cursos" color="yellow" />
                        <CardCategory title=" SEGURANÇA" courses="22 Cursos" color="purple" />
                        <CardCategory title=" MOBILE" courses="17 Cursos" color="blue" />
                        <CardCategory title=" FRONT-END" courses="12 Cursos" color="green" />
                        <CardCategory title=" CLOUD-COMPUTING" courses="8 Cursos" color="orange" />
                    </section>
                </div>
            </div>
            <div className="section4">
                <div className="box">
                    <h2>Depoimentos</h2>
                    <div className="image-review">
                        <img src={userReview} alt=""/>
                    </div>
                    <div className="review">
                        <img src={markLeft} alt=""/>
                        <p>Professor extremamente didático e com amplos conhecimentos e o curso tem conteúdo que permite exercitar o que é ensinado!</p>
                        <img src={markRight} alt=""/>
                    </div>
                    <div className="user-review">
                        <h4>Joaquim</h4>
                    </div>
                </div>
            </div>
            <footer>
                <p>
                    &copy; Luke Code - Alguns direitos reservados - { new Date().getFullYear() }
                </p>

            </footer>
        </>
    );
}

export default Home;