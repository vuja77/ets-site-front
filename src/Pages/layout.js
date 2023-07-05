import { Outlet, Link } from "react-router-dom";
import "./nav.css";
import Logo from ".././components/img/logo.svg";
const Layout = () => {
  return (
    <>
      <nav>
      <img src={Logo}/>
        <ul>
          <li>
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
          <li id="Hambuger">
            <Link ><button>Meni</button></Link>
          </li>
          <li>
            <Link to="/Login"><button>Login</button></Link>
          </li>
          
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;