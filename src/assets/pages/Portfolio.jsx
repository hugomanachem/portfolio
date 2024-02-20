import Navbar from "../../components/Navbar";
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

        <div className="toggle-next-container">
          <p>On fait connaissance ?</p>
          <Link>
            <img src="src\assets\arrow-down.png" alt="arrow down" />
          </Link>
        </div>
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

    </>
  );
}

export default Portfolio;
