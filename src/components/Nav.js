import { Outlet, Link } from "react-router-dom";
import "./Nav.css";
import Logo from ".././components/img/logo.svg";
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from "react";

function Nav() {
  let [activeMeni, setActive] = useState("1");

  return (
    <>
      <nav className={activeMeni === "2" ? "active" : ""}>
        <img src={Logo} />

        <ul>
          <li> <Link to="/" id="activePage">Home</Link> </li>
          <li> <Link to="/materijali">Materijali</Link> </li>
          <li> <Link to="/o-skoli">O školi</Link> </li>
          <li> Servisi </li>
          <li id="Login"> <Link to="/Login"><button>Log in</button></Link> </li>
          <li id="Hambuger">
            <button onClick={() => activeMeni === "2" ? setActive("1") : setActive("2")} className={activeMeni === "2" ? "active" : ""}><FontAwesomeIcon icon={faBars} id="bars" size="2x" /><FontAwesomeIcon id="close" icon={faClose} size="2x" /></button>
          </li>
        </ul>

        
      </nav>
      <ul id="MobileMeni" className={activeMeni === "2" ? "active" : ""}>
          <li class="active">
            <Link to="/" id="active">Home</Link>
          </li>
          <li>
            <Link to="/Login">Materijali</Link>
          </li>
          <li>
            <Link to="/Login">O školi</Link>
          </li>
          <li>
            <Link to="/Login">Servisi</Link>
          </li>
        </ul>
      <Outlet />
    </>
  )
};

export default Nav;