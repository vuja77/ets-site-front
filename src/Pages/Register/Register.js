import "./Register.scss";
import Logo from "../../components/img/logo.svg";
import { Link } from "react-router-dom";
import {motion} from "framer-motion"
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import Cookies from 'universal-cookie';
function Register() {
    const PolOptions = [
        {
            value: "Muski",
        }, 
        {
            value: "Zenski",
        },
        {
            value: "Ostalo",
        }
    ]
const cookies = new Cookies();
const [classes, setClasess] = useState([]);
const [Edprograms, setEdprograms] = useState([]);
const [RegisterInputs, setInputs] = useState({});
const [errorInputs, setError] = useState({});
/*Get inputs value*/
const HandleInput = (event) => {
    console.log(RegisterInputs);
    setInputs({...RegisterInputs, [event.target.name]: event.target.value,});
}
/*Send register request*/
const RegisterRequest = async (event) => {
    await axios.post("http://127.0.0.1:8000/api/register", RegisterInputs)
    .then((response) => {
        console.log(response.data.success.token);
        console.log(response.data.success.message);
        /*const token = response.data.success.token;
        cookies.set('token', token, { path: '/' });*/
    })
    .catch((error) => {
       console.log(error);
         /*Object.entries(error.response.data.error).map((errorNames)=> {
                console.log(errorNames);
            });*/
    });
}
/*GET edprograms i class*/
useEffect(() => {
    const ClassFetch = async () => {
      const className = await (
        await fetch("http://127.0.0.1:8000/api/classes")
      ).json();
      setClasess(className);
      const Ed_programs = await (
        await fetch("http://127.0.0.1:8000/api/ed_programs")
      ).json();
      setEdprograms(Ed_programs);
    };
    ClassFetch();
}, [])

	return (
		<motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.6 }} className="Register">
			<div id="inp">
				<header>
                    <Link to="/"><img src={Logo} /></Link>
					<h1>Kreiraj nalog</h1>
				</header>
				<h3 id="vasoAligrudic"><span>Vaso Aligrudić</span></h3>
				<div id="form" >
                    <div className="twoInp">
                        <label>Ime<input name="first_name" onChange={HandleInput}type="text" placeholder="Ime" className={errorInputs[0] === "first_name" ? "error" : ""}/></label>
                        <label>Prezime<input name="last_name" onChange={HandleInput} type="text" placeholder="Prezime" /></label>
                    </div>	

                    <label>Mail<input name="mail" onChange={HandleInput} type="email" placeholder="Email" /></label>
                    <label>Password<input name="password" onChange={HandleInput} type="Password" placeholder="Password" /></label>
                    <label>Confirm Password<input name="confirm_password" onChange={HandleInput} type="Password" placeholder="Password" /></label>

                    <div className="twoInp">
                    <label>
                        Smjer
						<select name="ed_program_id" onChange={HandleInput}>
                            <option disabled selected>Smjer</option>
                            {Edprograms.map((Options) => {
                                return(<option placeholder="Odeljenje" value={Options.id}>{Options.name}</option>)
                            })}
                        </select>
					</label>
                    <label>
						Odeljenje
						<select name="class_id"onChange={HandleInput}>
                            <option disabled value="odeljenje" selected>Odeljenje</option>
                            {classes.map((Options) => {
                                return(<option placeholder="Odeljenje" value={Options.id}>{Options.name}</option>)
                            })}
                        </select>
					</label>
                    </div>
					<label>
						Pol
						<select name="gender" onChange={HandleInput}>
                            <option disabled selected >Pol</option>
                            {PolOptions.map((Options) => {
                                return(<option placeholder="Pol" value={Options.value}>{Options.value}</option>)
                            })}
                        </select>
					</label>
					<button onClick={RegisterRequest}>Registruj se</button>
					<h4>Imate nalog? <Link to="/Login">Prijavi se</Link></h4>
				</div>
			</div>
            <div id="photo">
                
			</div>
		</motion.section>
	);
}

export default Register;