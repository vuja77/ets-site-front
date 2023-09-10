import { Outlet, Link } from "react-router-dom";
import "./Nav.scss";
import { useNavigate } from "react-router-dom";

import Logo from ".././components/img/logo.svg";
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faClose, faAngleDown, faRightFromBracket, faGears } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useEffect } from "react";
import axios from "axios";
import Config from "../Config";
import Cookies from 'universal-cookie';
import { useLocation } from "react-router-dom";

function Nav() {
  const Navigate = useNavigate();
  const location = useLocation();
  let cookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)token*\=\s*([^;]*).*$)|^.*$/, "$1");
  const [userMail, setMail] = useState();
  const [userRole, setRole] = useState();
  let [activeMeni, setActive] = useState("1");
  const [UserDropMeni, setDropMeni] = useState(false);
  const [ServisiDropMeni, setServisiDropMeni] = useState(false);

  const LogOut = () => {
    const cookies = new Cookies();
    cookies.remove('token');
    setDropMeni(!UserDropMeni);

    Navigate("/", {
      state: "Uspjesno ste se odjavili",
    });
  }
  useEffect(() => {
    const fetchApiData = async () => {
      await axios.get(Config.apiUrl + "/details", {
        headers: {
          Authorization: `Bearer ${cookieValue}`
        }
      })
        .then((response) => {
          setMail(response.data.success.first_name + " " + response.data.success.last_name)
          setRole(response.data.success.role_id);
        })
    }
    if (cookieValue !== "") {
      fetchApiData();
    }

  }, []);
  return (
    <>
      <nav className={activeMeni === "2" ? "active" : ""}>
        <Link to="/"><img src={Logo} alt="logo" /></Link>
        <ul>
          <li className={location.pathname === "/" ? "active" : ""}> <Link to="/">Početna</Link> </li>
          <li className={location.pathname === "/materijali" ? "active" : ""}> <Link to="https://elektropg.online/ets/course/index.php?categoryid=55">Materijali</Link> </li>
          <li className={location.pathname === "/o-skoli" ? "active" : ""}> <Link to="/o-skoli">O školi</Link> </li>
          <li onClick={() => setServisiDropMeni(!ServisiDropMeni)} id={ServisiDropMeni === true ? "opened" : ""}> Servisi <FontAwesomeIcon icon={faAngleDown} /></li>
          
         {/*<li id="Login" className={cookieValue !== "" ? "hide" : ""}> <Link to="/Login"><button>Log in</button></Link> </li> */} 
          <li id="Login" className={cookieValue !== "" ? "hide" : ""}> <a href="https://elektropg.online/ets/login/index.php"><button className="Login">Prijavi se</button></a> </li>

          <li onClick={() => setDropMeni(!UserDropMeni)} id={UserDropMeni === true ? "opened" : ""} className={cookieValue !== "" ? "UserInf" : "hide"} >{userMail} <FontAwesomeIcon icon={faAngleDown} /></li>
          <li id="Hambuger">
            <button aria-label="Hambuger" onClick={() => activeMeni === "2" ? setActive("1") : setActive("2")} className={activeMeni === "2" ? "active" : ""}><FontAwesomeIcon icon={faBars} id="bars" size="2x" /><FontAwesomeIcon id="close" icon={faClose} size="2x" /></button>
          </li>
        </ul>
      </nav>
      <div className="UserDrop" id={UserDropMeni === true ? "" : "hide"}>
        <ul>

         {userRole === 3 ? <li className={userRole === 1 ? "hide" : ""} ><FontAwesomeIcon icon={faGears} /> Admin panel</li> :null} 

          <li onClick={() => LogOut()}><FontAwesomeIcon icon={faRightFromBracket} /> Logout</li>
        </ul>
      </div>
      <div className="ServisiDrop" id={ServisiDropMeni === true ? "" : "hide"}>
        <ul>
        <Link to="https://elektropg.online/ets/"> <li>Moodle</li></Link>
        <Link to="zasto-cutis"> <li>Zašto ćutiš</li></Link>
        <Link to="prijavi-stetu"> <li> Prijavi štetu</li></Link>

        <Link to="obavjestenja"><li> Obavještenja</li></Link>
    
        </ul>
      </div>
      <ul id="MobileMeni" className={activeMeni === "2" ? "active" : ""}>
        <li className="active">
          <Link to="/" id="active">Home</Link>
        </li>
        <li>
          <Link to="https://elektropg.online/ets/course/index.php?categoryid=55">Materijali</Link>
        </li>
        <li>
          <Link to="/o-skoli">O školi</Link>
        </li>
        <li>
          <Link to="/servisi">Servisi</Link>
        </li>
      </ul>
      <Outlet />
    </>
  )
};
export default Nav;