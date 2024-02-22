import { Link } from "react-router-dom";
import '../navbar.css';

function Navbar() {

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
            <Link>Accueil</Link>
            <Link>à propos de moi</Link>
            <Link>Mes compétences</Link>
            <Link>Mes projets</Link>
      </div>

      <p>FR</p>
    </nav>
  );
}

export default Navbar;
