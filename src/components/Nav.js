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

function Nav() {
  const Navigate =useNavigate();
  let cookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)token*\=\s*([^;]*).*$)|^.*$/, "$1");
  const [userMail, setMail] = useState();
  const [userRole, setRole] = useState();
  let [activeMeni, setActive] = useState("1");
  const [UserDropMeni, setDropMeni] = useState(false);

  const toggleDropMeni = () => {
    setDropMeni(!UserDropMeni);
    console.log(UserDropMeni);
  }
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
    await axios.get(Config.apiUrl+"/details", {
      headers: {
        Authorization: `Bearer ${cookieValue}`
      }})
      .then((response) => {
        setMail(response.data.success.first_name + " " + response.data.success.last_name)
        setRole(response.data.success.role_id);
      })
    }
    if(cookieValue !== "") {
      fetchApiData();
    }
   
  }, []);
  return (
    <>
      <nav className={activeMeni === "2" ? "active" : ""}>
        <img src={Logo} alt="logo"/>
        <ul>
          <li> <Link to="/" id="activePage">Home</Link> </li>
          <li> <Link to="/materijali">Materijali</Link> </li>
          <li> <Link to="/o-skoli">O školi</Link> </li>
          <li> Servisi </li>
          <li id="Login" className={cookieValue !== "" ? "hide" : ""}> <Link to="/Login"><button>Log in</button></Link> </li>
          <li onClick={()=> toggleDropMeni()} id={UserDropMeni === true ? "opened" : ""} className={cookieValue !== "" ? "UserInf" : "hide"} >{userMail} <FontAwesomeIcon icon={faAngleDown}/></li>
          <li id="Hambuger">
            <button aria-label="Hambuger" onClick={() => activeMeni === "2" ? setActive("1") : setActive("2")} className={activeMeni === "2" ? "active" : ""}><FontAwesomeIcon icon={faBars} id="bars" size="2x" /><FontAwesomeIcon id="close" icon={faClose} size="2x" /></button>
          </li>
        </ul>
      </nav>
      <div className="UserDrop" id={UserDropMeni === true ? "" : "hide"}>
        <ul>
          <li className={userRole == 1 ? "hide" : ""} ><FontAwesomeIcon icon={faGears}/> Admin panel</li>
          <li onClick={() => LogOut()}><FontAwesomeIcon icon={faRightFromBracket}/> Logout</li>
        </ul>
      </div>
      <ul id="MobileMeni" className={activeMeni === "2" ? "active" : ""}>
          <li className="active">
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