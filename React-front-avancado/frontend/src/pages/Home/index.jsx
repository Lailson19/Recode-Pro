import React from 'react';
import './styles.css';

import separator from '../../assets/images/separator.svg';
import markRight from '../../assets/images/mark-right.svg';
import markLeft from '../../assets/images/mark-left.svg';
import userReviewImage from '../../assets/images/users/user.png';

import { lazy, Suspense } from 'react';

const Yoda = lazy(() => import('../../components/Splitting/Yoda'));
const CardImg = lazy(() => import('../../components/Splitting/CardImg'));
const Categoria = lazy(() => import('../../components/Splitting/Categoria'));

const Home = () => {
    return (
        <>
            {/* <Animation /> */}
            <div className="section-1">
                <div className="box">
                    <header className="header">
                        <h2>Luke Code</h2>
                        <nav>
                            <button>
                                FAZER LOGIN
                            </button>
                            <button>
                                INSCREVA-SE
                            </button>
                            <button className="btn-menu">
                                <i className="fas fa-bars"></i>
                            </button>
                        </nav>
                    </header>
                    <main>
                        <section>
                            <h1>Se torne um mestre <br/> da programação!</h1>
                            <img src={separator} alt="" />
                            <p>
                                De o próximo passo para o seu futuro, <br />
                                que a força esteja com você.
                            </p>
                        </section>                        
                        <Suspense fallback={ <p className="carregandoImg">Carregando imagem...</p> }>
                            <Yoda />
                        </Suspense>
                    </main>
                </div>
            </div>
            
            <div className="section-2">
                <div className="box">
                    <h2>+3 Cursos Completos</h2>
                    <p>
                        Na Luke code, você tem acesso a 3 cursos gratuitos, basta se cadastrar na plataforma.
                    </p>
                    
                    <Suspense fallback={ <p>Carregando imagem...</p> }>
                        <CardImg />
                    </Suspense>
                    <button>
                        INSCREVA-SE
                    </button>
                </div>
            </div>

            <div className="section-3">
                <div className="box">
                    <h2>O que oferecemos para você</h2>
                    <Suspense fallback={ <p>Carregando imagem...</p> }>
                        <Categoria />
                    </Suspense>
                </div>
            </div>

            <div className="section-4">
                <div className="box">
                    <h2>Depoimentos</h2>
                    <div className="image-review">
                        <img src={userReviewImage} alt="Joaquim" />
                    </div>

                    <div className="review">
                        <img src={markLeft} alt="" />
                        <p>
                            Professor extremamente didático e com amplos conhecimentos e o curso tem conteúdo que permite exercitar o que é ensinado!
                        </p>
                        <img src={markRight} alt="" />
                    </div>

                    <div className="user-review">
                        <h4>
                            Joaquim
                        </h4>
                    </div>
                </div>
            </div>

            <footer>
                <div className="box">
                    &copy;{ new Date().getFullYear() } - Luke Code - Alguns direitos reservados
                </div>
            </footer>
        </>
    );
}

export default Home;