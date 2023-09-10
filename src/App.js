import Home from "./Pages/Home/Home";

import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Oskoli from "./Pages/Oskoli/Oskoli";
import Nav from "./components/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Config from "./Config";
import axios from "axios";
import Izrada from "./Pages/uIzdradi/Izrada";

function App() {


  let cookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)token*\=\s*([^;]*).*$)|^.*$/, "$1");
  const [userMail, setMail] = useState();
  const [userRole, setRole] = useState();
  
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
    <AnimatePresence  >
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav userMail={userMail} role={userRole}/>}>
          <Route index element={<Home />} />
          <Route path="o-skoli" element={<Oskoli />} />
          <Route path="obavjestenja" element={<Izrada />} />
          <Route path="prijavi-stetu" element={<Izrada />} />
          <Route path="zasto-cutis" element={<Izrada />} />
          

          <Route path="materijali" element={<Izrada />} />
        </Route>
        <Route path="/" >
          <Route path="login" element={<Login />} />
        </Route>
        <Route path="/" >
          <Route path="register" element={<Register />} />
      
        </Route>
        
      </Routes>
    </BrowserRouter>
    </AnimatePresence>
  );
}

export default App;
