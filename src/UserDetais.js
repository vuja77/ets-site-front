import { useEffect, useState } from "react";
import axios from "axios";
import Config from "./Config";

function UserDetails () {
    let cookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)token*\=\s*([^;]*).*$)|^.*$/, "$1");
    const [dd, setInputs] = useState({});

    useEffect(() => {
        const fetchApiData = async () => {
        await axios.get(Config.apiUrl+"/details", {
          headers: {
            Authorization: `Bearer ${cookieValue}`
          }})
          .then((response) => {
            console.log(response.data);
            setInputs(response.data);

          })
        }
        fetchApiData();
        console.log(dd);

      }, []);
      
      return;
}

export default UserDetails;