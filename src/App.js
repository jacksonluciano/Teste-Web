import "./App.css";
import "./responsive.css";
import logoImg from "./images/logo.svg";
import slide from "./images/slide.png";
import aluno from "./images/aluno.png";
import videoFrame from "./images/video-frame.png";
import Frame from "./images/Frame.png";
import Frame2 from "./images/Frame2.png";
import hamburgerIcon from "./images/hamburger-icon.svg";
import searchIcon from "./images/search-icon.svg";
import topGrid from "./images/top-grid.png";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faYoutube,
  faFacebookF,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  return (
    <div className="App">
      <div className="main">
        <header className="header">
          <div className="container">
            <div className="row adjust-between">
              <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                <img src={logoImg} alt="Logo" />
              </div>
              <div className="d-none d-lg-block col-md-8 adjust-center">
                <nav className="menu-header">
                  <ul>
                    <li>
                      <a href="./">Ensino Médio</a>
                    </li>
                    <li>
                      <a href="./">Pré Vestibular</a>
                    </li>
                    <li>
                      <a href="./">O que é alta performance?</a>
                    </li>
                    <li>
                      <a href="./">Só o bertoni tem</a>
                    </li>
                    <li>
                      <a href="./">Quero saber mais</a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="col-md-2 adjust-right col-sm-4 col-6">
                <a href="./" className="search-icon">
                  <img src={searchIcon} alt="" />
                </a>
                <a href="./" className="hamburger-icon">
                  <img src={hamburgerIcon} alt="" />
                </a>
              </div>
            </div>
          </div>
        </header>

        <section className="slider purple-bg">
          <div className="container pos-relative">
            <div className="row">
              <div className="col-lg-12 align-center">
                <img className="img-responsive" src={slide} alt="Logo" />
              </div>
              <div className="col-lg-12 align-center">
                <a href="./" className="bt orange">
                  Quero alta performance
                </a>
              </div>
              <span className="prev">
                <FontAwesomeIcon icon={faChevronLeft} />
              </span>
              <span className="next">
                <FontAwesomeIcon icon={faChevronRight} />
              </span>
            </div>
          </div>
        </section>

        <section className="content content-2 orange-bg">
          <div className="container">
            <div className="row">
              <div className="col-md-6 align-center">
                <img className="img-responsive" src={aluno} alt="Logo" />
              </div>
              <div className="col-md-6">
                <p>
                  O Bertoni Med é uma escola de ensino de alta performance, com
                  turmas de Ensino Médio (1ª, 2ª e 3ª séries), que prepara o
                  aluno para as universidades mais concorridas do Brasil e do
                  mundo.
                </p>
                <p>
                  Com foco na excelência, a escola conta com a Turma
                  Pré-Medicina e com a Turma Prime: uma turma reduzida e com
                  atendimento personalizado.
                </p>
                <p>
                  Além disso, a Bertoni Med também possui uma Turma Pré-Militar
                  (EsPCEx) e uma Turma Pré-Exatas (ITA, IME, EN, AFA, EFOMM).
                </p>
                <p>
                  Tudo pensando no conhecimento como chave para um futuro
                  brilhante de nossos alunos.
                </p>
                <p>Venha conhecer!</p>
                <a href="./" className="bt purple">
                  Quero alta performance
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="content content-3">
          <div className="container">
            <div className="row">
              <div className="video-frame align-center">
                <a href="./">
                  <img className="img-responsive" src={videoFrame} alt="Logo" />
                </a>
              </div>
            </div>
            <div className="row">
              <div className="video-text">
                <h2>
                  VENHA ESTUDAR COM A GENTE E TENHA ACESSO ÀS MELHORES
                  UNIVERSIDADES DO PAÍS E DO MUNDO.
                </h2>
              </div>
            </div>
          </div>
        </section>

        <section className="content content-4">
          <div className="container">
            <div className="wrapper">
              <div className="row">
                <div className="col-md-7 align-center">
                  <img className="img-responsive" src={Frame} alt="Logo" />
                </div>
                <div className="col-md-5">
                  <div className="testimonials">
                    <h2>DEPOIMENTOS</h2>
                    <p>
                      Com o ensino de alta performance você vai virar a página
                      do ensino tradicional! O primeiro lugar de 2021 da
                      Medicina da UFCSPA é nosso! Confira os depoimentos de quem
                      já estudou no Colégio Bertoni Med e no Elite
                      Pré-Vestibular e faça o mesmo: rompa limites com
                      possibilidades reais. Venha nos conhecer!
                    </p>
                    <a href="./" className="bt orange">
                      Agende sua visita
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="content content-5 purple-bg">
          <div className="container">
            <div className="wrapper">
              <div className="row">
                <div className="col-md-5">
                  <div className="estrutura">
                    <h2>ESTRUTURA</h2>
                    <p>
                      Devemos considerar que os nossos alunos passam boa parte
                      dos seus anos de vida dentro de uma escola e isso compõe
                      uma parte importante da sua formação. Por isso é tão
                      importante uma estrutura física completa, com projeto
                      arquitetônico criado para beneficiar o método do ensino,
                      estimulando o aprendizado e o gosto pelo estudo.
                    </p>
                    <a href="./" className="bt orange">
                      Agende sua visita
                    </a>
                  </div>
                </div>
                <div className="col-md-7 align-center">
                  <img className="img-responsive" src={Frame2} alt="Logo" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="content content-6 orange-bg">
          <div className="container pos-relative bertoni-tem">
            <div className="row">
              <div className="col-md-12 align-center med-tem">
                <h2>SÓ O BERTONI MED TEM:</h2>
              </div>

              <div className="col-lg-12 align-center">
                <div className="grid">
                  <img src={topGrid} className="top-grid" alt="Top Grid" />
                  <div className="grid-wrapper">
                    <div className="paper-slide">
                      <div className="note">
                        <p>
                          Ensino de <span>alta performance</span> para medicina
                        </p>
                      </div>
                      <div className="note">
                        <p>
                          Professores inspiradores com{" "}
                          <span>Mestrado e Doutorado</span>
                        </p>
                      </div>
                      <div className="note">
                        <p>
                          {" "}
                          <span>Espaços individuais</span> de estudo em tempo
                          integral
                        </p>
                      </div>
                      <div className="note">
                        <p>
                          Desenvolvimento do pensamento matemático{" "}
                          <span>sem decoreba</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <span className="prev">
                <FontAwesomeIcon icon={faChevronLeft} />
              </span>
              <span className="next">
                <FontAwesomeIcon icon={faChevronRight} />
              </span>
            </div>
          </div>
        </section>

        <section className="content content-7 blue-bg">
          <div className="container">
            <div className="row">
              <div className="col-md-12 align-center">
                <div className="matricula">
                  <h1>MATRÍCULAS ABERTAS</h1>
                </div>
              </div>
              <div className="col-md-12 align-center">
                <form className="form-matricula">
                  <div className="row">
                    <div className="col-6 col-md-6 col-sm-12 col-12">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Nome"
                      />
                    </div>
                    <div className="col-6 col-md-6 col-sm-12 col-12">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                      />
                    </div>
                    <div className="col-6 col-md-6 col-sm-12 col-12">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Telefone"
                      />
                    </div>
                    <div className="col-6 col-md-6 col-sm-12 col-12">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Ano de interesse"
                      />
                    </div>
                    <div className="col-12">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="matriculaCheck"
                      />
                      <label class="form-check-label" for="matriculaCheck">
                        <span></span> Ao continuar, indico que aceito a Política
                        de Privacidade do Bertoni Med.
                      </label>
                    </div>
                    <button className="formSubmit bt orange">
                      Vem para Bertoni Med
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        <footer className="header">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <img src={logoImg} alt="Logo" />
              </div>
              <div className="col-md-4 adjust-center">
                <p>Bertoni Med, 2021. Todos os direitos reservados</p>
              </div>
              <div className="col-md-4 adjust-center">
                <div className="social-icons">
                  <a href="./">
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                  <a href="./">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </a>
                  <a href="./">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                  <a href="./">
                    <FontAwesomeIcon icon={faYoutube} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
