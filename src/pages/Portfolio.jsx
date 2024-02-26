import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function Portfolio() {
  return (
    <>
      <section className="main-section">
        <Navbar />

        <div className="main-text">
          <h1 className="main-title">Hugo Manachem</h1>
          <h2 className="main-headline">
            {" "}
            <strong>&lt;</strong> Développeur Full-Stack <strong>/&gt;</strong>
          </h2>
        </div>

        <Link className="main-btn">
          <div className="contact-btn">
            <p>Me contacter !</p>
          </div>
        </Link>

        <Link className="toggle-next-container">
          <p>On fait connaissance ?</p>
          <img src="src\assets\arrow-down.png" alt="arrow down" />
        </Link>
      </section>

      <section className="about-section">
        <h2 className="black-colored section-title">à propos de moi</h2>
        <div className="about-content">
          <div className="profil-img"></div>
          <div className="about-text">
            <p>
              Ingénieur en informatique, mon expérience dans la gestion de
              projet ainsi que mes compétences en développement Web me
              permettant de travailler efficacement en équipe pour construire
              des applications Web Full-Stack de manière rigoureuse et
              organisée.
            </p>
            <div className="ironhack-diplome">
              <div className="ironhack-img"></div>
              <p>Full-Stack Web Development Program</p>
            </div>
            <div className="utt-diplome">
              <div className="utt-img"></div>
              <p>
                Diplôme d’ingénieur en Informatique et Systèmes d’Information
              </p>
            </div>
          </div>
        </div>
        <Link>
          <div className="cv-btn">
            <p>Télécharger mon cv</p>
          </div>
        </Link>
      </section>

      <section className="skills-section-container">
        <h2 className="white-colored section-title">Mes compétences</h2>
      </section>

      <section className="projects-section-container">
        <h2 className="black-colored section-title">Mes projets</h2>
        <div className="bd-example w-75">
          <div
            id="carouselExampleCaptions"
            className="carousel slide"
            data-ride="carousel"
          >
            <ol className="carousel-indicators">
              <li
                data-target="#carouselExampleCaptions"
                data-slide-to="0"
                className="active"
              ></li>
              <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
              <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="src\assets\games-wiki-img.png"
                  className="bg-opacity-10 d-block w-100"
                  alt="Games Wiki"
                />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Games Wiki</h5>
                  <p>React, Express, Node, MongoDB</p>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src="src\assets\date-flow-img.png"
                  className="d-block w-100"
                  alt="Date Flow"
                />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Date Flow</h5>
                  <p>React, Javascript, CSS, HTML</p>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src="src\assets\trick-or-treat-img.png"
                  className="d-block w-100"
                  alt="Trick or Treat"
                />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Trick or Treat</h5>
                  <p>Javascript, CSS, HTML</p>
                </div>
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleCaptions"
              role="button"
              data-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleCaptions"
              role="button"
              data-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </section>

      <section className="contact-section-container">
        <h2 className="white-colored section-title">Contactez-moi !</h2>
        <div className="personal-infos-container">
          <h3>Hugo Manachem</h3>
          <p>06 11 28 68 50</p>
          <p id="email">hugomanachem.pro@gmail.com</p>
        </div>

        <form className="form-container">
          <textarea name="message" placeholder="Votre message..." />
          <input
            type="text"
            name="nom"
            placeholder="Votre nom (Obligatoire)"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Votre adresse mail (Obligatoire)"
            required
          />
          <button>Envoyer</button>
        </form>
      </section>

      <footer>
        <p>2024 - Hugo Manachem</p>
      </footer>
    </>
  );
}

export default Portfolio;
