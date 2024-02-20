import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";

function Portfolio () {
    return (<>
        <section className='main-section'>
          <Navbar/>
  
          <div className='main-text'>
            <h1 className='main-title'>Hugo Manachem</h1>
            <h2 className='main-headline'> <strong>&lt;</strong> Développeur Full-Stack <strong>/&gt;</strong></h2>
          </div>
  
          <Link className='main-btn'>
                <div className="contact-btn"><p>Me contacter !</p></div>
          </Link>

          <div className="toggle-next-container">
            <p>On fait connaissance ?</p>
            <Link><img src="src\assets\arrow-down.png" alt="arrow down"/></Link>
          </div>
          
        </section>
      </>);
}

export default Portfolio;