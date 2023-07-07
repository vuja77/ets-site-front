import "./Header.css";
import Skola from "../../../components/img/skola.jpg";
import Ig from "../../../components/img/image 9.png";
import Facebook from "../../../components/img/image 10.png";
import Mail from "../../../components/img/image 11.png";
import youtube from "../../../components/img/image 12.png";
import { Link } from "react-router-dom";

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
    </>
  );
};

export default Header;
