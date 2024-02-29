import { Link } from "react-router-dom";
import React from "react";
import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import cv from "../assets/CV_Hugo_MANACHEM.pdf";
import arrow_down from "../assets/arrow-down.png";
import games_wiki_img from "../assets/games-wiki-img.png";
import date_flow_img from "../assets/date-flow-img.png";
import trick_or_treat_img from "../assets/trick-or-treat-img.png";
import dev_front_end_logo from "../assets/dev_front_end_logo.png";
import dev_back_end_logo from "../assets/dev_back_end_logo.png";
import gestion_projet_logo from "../assets/gestion_projet_logo.png";
import NavbarEN from "../components/NavbarEN";

function PortfolioEN() {
  let homeSectionRef = React.useRef();
  let contactSectionRef = React.useRef();
  let aboutSectionRef = React.useRef();
  let skillsSectionRef = React.useRef();
  let projectsSectionRef = React.useRef();

  function scrollTo(ref) {
    if (!ref.current) return;
    ref.current.scrollIntoView({ behavior: "smooth" });
  }

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      import.meta.env.VITE_MAIL_SERVICE_ID,
      import.meta.env.VITE_MAIL_TEMPLATE_ID,
      e.target,
      import.meta.env.VITE_MAIL_PUBLIC_KEY
    );
    alert("Message send!");

    setName("");
    setEmail("");
    setMessage("");
  };

  const [headline, setHeadline] = useState("");
  const fullHeadline = "Faull-Stack Developer";

  useEffect(() => {
    let index = 0;

    const intervalId = setInterval(() => {
      if (index < fullHeadline.length) {
        setHeadline((prevText) => prevText + fullHeadline.charAt(index));
        index++;
      } else {
        clearInterval(intervalId);
      }
    }, 100); // Adjust the interval duration as needed

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <section ref={homeSectionRef} className="main-section">
        <NavbarEN
          callbackToScrollTo={scrollTo}
          homeSectionRef={homeSectionRef}
          aboutSectionRef={aboutSectionRef}
          skillsSectionRef={skillsSectionRef}
          projectsSectionRef={projectsSectionRef}
        />

        <div className="main-text">
          <h1 className="main-title">Hugo Manachem</h1>
          <h2 className="main-headline">
            <strong>&lt;</strong> {headline} <strong>&#47;&gt;</strong>
          </h2>
        </div>

        <Link className="main-btn" onClick={() => scrollTo(contactSectionRef)}>
          <button className="contact-btn">
            <p>Contact me !</p>
          </button>
        </Link>

        <Link
          onClick={() => scrollTo(aboutSectionRef)}
          className="toggle-next-container"
        >
          <p>Let’s get to know each other</p>
          <div className="arrow-down-container"></div>
        </Link>
      </section>

      <section ref={aboutSectionRef} className="about-section">
        <h2 className="black-colored section-title">About me</h2>
        <div className="about-content">
          <div className="profil-img"></div>
          <div className="about-text">
            <p>
              As a software engineer, my experience in project management as
              well as my web development skills allow me to work effectively in
              a team to build Full-Stack Web applications in a rigorous and
              organized manner.
            </p>
            <div className="ironhack-diplome">
              <div className="ironhack-img"></div>
              <p>Full-Stack Web Development Program</p>
            </div>
            <div className="utt-diplome">
              <div className="utt-img"></div>
              <p>
                Engineering degree in Computer Science and Information Systems
              </p>
            </div>
          </div>
        </div>
        <a
          href={cv}
          download="CV_Hugo_MANACHEM"
          target="_blank"
          rel="noreferrer"
        >
          <button className="cv-btn">Download my resume</button>
        </a>
      </section>

      <section ref={skillsSectionRef} className="skills-section-container">
        <h2 className="white-colored section-title">My skills</h2>
        <div className="skills-list">
          <div className="skill-item">
            <img src={dev_front_end_logo} />
            <h4>Dev Front End</h4>
            <p className="skill-text">
              HTML, CSS, Javascript (ES8), React, Responsive Design
            </p>
          </div>
          <div className="skill-item">
            <img src={dev_back_end_logo} />
            <h4>Dev Back End</h4>
            <p className="skill-text">
              Node JS, ExpressJS, MongoDB, MYSQL, API Rest
            </p>
          </div>
          <div className="skill-item">
            <img src={gestion_projet_logo} />
            <h4>Project Management</h4>
            <p className="skill-text">
              Analysis of customer needs Modeling and testing of solutions,
            </p>
            <p className="skill-text">Jira, Trello, Miro</p>
          </div>
        </div>
      </section>

      <section ref={projectsSectionRef} className="projects-section-container">
        <h2 className="black-colored section-title">My projects</h2>
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
                <a
                  href="https://ironhack-game-wiki.netlify.app/"
                  target="_blank"
                >
                  <img
                    src={games_wiki_img}
                    className="bg-opacity-10 d-block w-100"
                    alt="Games Wiki"
                  />
                </a>
                <div className="carousel-caption d-none d-md-block">
                  <h5>Games Wiki</h5>
                  <p>React, Express, Node, MongoDB</p>
                </div>
              </div>
              <div className="carousel-item">
                <a href="https://dateflow.netlify.app/" target="_blank">
                  <img
                    src={date_flow_img}
                    className="d-block w-100"
                    alt="Date Flow"
                  />
                </a>
                <div className="carousel-caption d-none d-md-block">
                  <h5>Date Flow</h5>
                  <p>React, Javascript, CSS, HTML</p>
                </div>
              </div>
              <div className="carousel-item">
                <a
                  href="https://hugomanachem.github.io/trick-or-treat/"
                  target="_blank"
                >
                  <img
                    src={trick_or_treat_img}
                    className="d-block w-100"
                    alt="Trick or Treat"
                  />
                </a>
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

      <section ref={contactSectionRef} className="contact-section-container">
        <h2 className="white-colored section-title">Contact me !</h2>
        <div className="personal-infos-container">
          <h3>Hugo Manachem</h3>
          <p>06 11 28 68 50</p>
          <p id="email">hugomanachem.pro@gmail.com</p>
        </div>

        <form onSubmit={sendEmail} className="form-container">
          <textarea
            name="message"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            placeholder="Your message..."
          />
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            placeholder="Your name (mandatory)"
            required
          />
          <input
            type="email"
            name="email_from"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Your email (mandatory)"
            required
          />
          <button>Send</button>
        </form>
      </section>

      <footer>
        <p>
          &#169; 2024 Hugo MANACHEM. All rights Reserved. Design by Pauline DENIZET.
        </p>
      </footer>
    </>
  );
}

export default PortfolioEN;
