import "./Header.scss";
import Skola from "../../../components/img/skola.jpg";
import dots from "../../../components/img/Group 70.svg";
import Ig from "../../../components/img/instagram.png";
import Facebook from "../../../components/img/facebook.png";
import Mail from "../../../components/img/mail.png";
import youtube from "../../../components/img/youtube.png";
import { Link } from "react-router-dom";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons"
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { LazyMotion, domAnimation, m } from "framer-motion"

function Header() {
  return (
    <>
      <section className="Hero-Sec">
      <LazyMotion features={domAnimation} >
          <m.div id="Hero-text" animate={{x: [-300, 0]}} transition={{duration: 0.6}}>
            <h1>Elektrotehnička škola <br /><span>“Vaso Aligrudic”</span></h1>

            <p> Elektrotehnička škola igra važnu ulogu u razvoju tehnologije i inovacija. Učenici koji pohađaju ovu školu mogu da razviju nove ideje i tehnologije koje mogu da pomognu u rešavanju problema u društvu i industriji.</p>
            <img id="dotsHeader" src={dots} alt="dots"/> 
          </m.div>
          </LazyMotion>
          <LazyMotion features={domAnimation} >
          
          <m.div id="Hero-photo" animate={{x: [300, 0]}} transition={{ duration: 0.6}}>
            <span id="circle1"></span>
            <img src={Skola} alt="skola"/>
          </m.div>
          </LazyMotion>

        </section>

        <div className="socialNetwork">
          <h2>Socijalne Mreže</h2>
          <Link to="https://www.instagram.com/elektrotehnicka_skola_pg/" target="_blank" aria-label="Instagram"><img src={Ig} alt="ig"/></Link>
          <Link to="https://www.facebook.com/elektropg" target="_blank" aria-label="Facebook"><img src={Facebook} alt="fb"/></Link>
          <Link to="https://gmail.com/skola@ets-pg.edu.me" target="_blank" aria-label="Mail"><img src={Mail} alt="ml"/></Link>
          <Link to="https://youtube.com/@elektropg1946" target="_blank" aria-label="Youtube"><img src={youtube} alt="https://youtube.com/@elektropg1946"/></Link>
        </div>
    
      <div className="socialNetworkMb">
       <Link to="https://instagram.com/elektrotehnicka_skola_pg" target="_blank" aria-label="Instagram"><FontAwesomeIcon icon={faInstagram} color="#211E61"/></Link> 
       <Link to="https://www.facebook.com/elektropg" target="_blank" aria-label="Instagram"><FontAwesomeIcon icon={faFacebook} color="#211E61"/></Link> 
       <Link to="https://gmail.com/skola@ets-pg.edu.me" target="_blank" aria-label="Instagram"><FontAwesomeIcon icon={faEnvelope} color="#211E61"/></Link> 
       <Link to="https://youtube.com/@elektropg1946" target="_blank" aria-label="Instagram"><FontAwesomeIcon icon={faYoutube} color="#211E61"/></Link> 
      </div>
      <LazyMotion features={domAnimation} >

      <m.img id="mbPhoto"src={Skola} alt="skolaMb" animate={{x: [300, 0]}} transition={{duration: 0.6}}/>
      </LazyMotion>

    </>
  );
};

export default Header;
