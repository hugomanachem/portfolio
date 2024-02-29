import { Link } from "react-router-dom";
import '../navbar.css';
import hamburger_menu_img from "../assets/hamburger-menu.png";
import language_arrow_down from "../assets/language_arrow_down.png";

function NavbarFR(props) {

    function ToggleResponsiveNavbar() {
        let navbarElm = document.getElementById("navbar");
        if (navbarElm.className === "navbar-container") {
          navbarElm.classList.toggle("responsive");
        } else {
            navbarElm.classList.toggle("responsive");
        }
      }
    
      function ToggleResponsiveLanguageSelector() {
        let langugageSelectorElm = document.getElementById("language-selector");
        if (langugageSelectorElm.className === "language-selector") {
          langugageSelectorElm.classList.toggle("responsive");
        } else {
            langugageSelectorElm.classList.toggle("responsive");
        }
      }


  return (
    <nav id="navbar" className="navbar-container">
      <Link onClick={ToggleResponsiveNavbar}><img className='hamburger-icon' src={hamburger_menu_img} alt='hamburger-menu'/></Link>

      <div  className="navbar-links">            
            <Link onClick={() => props.callbackToScrollTo(props.homeSectionRef)}>Accueil</Link>
            <Link onClick={() => props.callbackToScrollTo(props.aboutSectionRef)} >à propos de moi</Link>
            <Link onClick={() => props.callbackToScrollTo(props.skillsSectionRef)}>Mes compétences</Link>
            <Link onClick={() => props.callbackToScrollTo(props.projectsSectionRef)}>Mes projets</Link>
      </div>

      <div className="language-selector-container">
        <Link onClick={ToggleResponsiveLanguageSelector} id="language-selector" className="language-selector">
          <p>FR</p>
          <img src={language_arrow_down}/>
        </Link>
          <div className="language-choice">
            <Link onClick={ToggleResponsiveLanguageSelector}><p>FR</p></Link>
            <Link to={"/en"}><p>EN</p></Link>
          </div>
      </div>

    </nav>
  );
}

export default NavbarFR;
