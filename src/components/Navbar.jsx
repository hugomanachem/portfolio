import { Link } from "react-router-dom";
import '../navbar.css';

function Navbar(props) {

    function myFunction() {
        var x = document.getElementById("navbar");
        if (x.className === "navbar-container") {
          x.classList.toggle("responsive");
        } else {
            x.classList.toggle("responsive");
        }
      }


  return (
    <nav id="navbar" className="navbar-container">
      <Link onClick={myFunction}><img className='hamburger-icon' src='src\assets\hamburger-menu.png' alt='hamburger-menu'/></Link>

      <div  className="navbar-links">            
            <Link onClick={() => props.callbackToScrollTo(props.homeSectionRef)}>Accueil</Link>
            <Link onClick={() => props.callbackToScrollTo(props.aboutSectionRef)} >à propos de moi</Link>
            <Link onClick={() => props.callbackToScrollTo(props.skillsSectionRef)}>Mes compétences</Link>
            <Link onClick={() => props.callbackToScrollTo(props.projectsSectionRef)}>Mes projets</Link>
      </div>

      <p>FR</p>
    </nav>
  );
}

export default Navbar;
