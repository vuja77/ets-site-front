import "./Header.css";
import Skola from "../../../components/img/skola.jpg";
import dots from "../../../components/img/Group 70.svg";

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

            <p> Elektrotehnička škola igra važnu ulogu u razvoju tehnologije i inovacija. Učenici koji pohađaju ovu školu mogu da razviju nove ideje i tehnologije koje mogu da pomognu u rešavanju problema u društvu i industriji.</p>
            <img id="dotsHeader" src={dots}/> 
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
       <Link to="https://youtube.com/@elektropg1946"><FontAwesomeIcon icon={faYoutube} color="#211E61"/></Link> 
      </div>
      <img id="mbPhoto"src={Skola} />

    </>
  );
};

export default Header;
