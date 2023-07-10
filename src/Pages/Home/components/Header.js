import "./Header.css";
import Skola from "../../../components/img/skola.jpg";
import Ig from "../../../components/img/image 9.png";
import Facebook from "../../../components/img/image 10.png";
import Mail from "../../../components/img/image 11.png";
import youtube from "../../../components/img/image 12.png";
import { Link } from "react-router-dom";
import { SocialIcon } from 'react-social-icons';
import {faEnvelope} from "@fortawesome/free-solid-svg-icons"
import { faFacebook, faInstagram, faMailchimp, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function Header() {
  return (
    <>
      <section className="Hero-Sec">
        <div id="Hero-text">
          <h1>Elektrotehnička škola <br /><span>“Vaso Aligrudic”</span></h1>
          <p>Elektrotehnička škola je mjesto gdje možeš naučiti kako stvoriti i kontrolirati tehnologiju koja mijenja svijet.</p>
        </div>
        <div id="Hero-photo">
          <span id="circle1"></span>
          <img src={Skola} />
        </div>
      </section>
      <div className="socialNetwork">
        <h2>Socijalne Mreže</h2>
        <Link to="https://www.instagram.com/elektrotehnicka_skola_pg/"><img src={Ig} /></Link>
        <img src={Facebook} />
        <img src={Mail} />
        <img src={youtube} />
      </div>
      <div className="socialNetworkMb">
       <Link to="https://instagram.com/elektrotehnicka_skola_pg"><FontAwesomeIcon icon={faInstagram} color="#211E61"/></Link> 
       <Link to="https://www.facebook.com/elektropg"><FontAwesomeIcon icon={faFacebook} color="#211E61"/></Link> 
       <Link to="https://gmail.com/skola@ets-pg.edu.me"><FontAwesomeIcon icon={faEnvelope} color="#211E61"/></Link> 
       <Link to="https://www.youtube.com/elektropg"><FontAwesomeIcon icon={faYoutube} color="#211E61"/></Link> 
      </div>
     
    </>
  );
};

export default Header;
