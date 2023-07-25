import "./Register.scss";
import Logo from "../../components/img/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import {motion} from "framer-motion"
import { useState, useEffect } from "react";
import axios from "axios";
import Cookies from 'universal-cookie';
import Config from "../../Config";
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
const Navigate =useNavigate();
const cookies = new Cookies();
const [classes, setClasess] = useState([]);
const [Edprograms, setEdprograms] = useState([]);
const [RegisterInputs, setInputs] = useState({});

/*Get inputs value*/
const HandleInput = (event) => {
    console.log(RegisterInputs);
    setInputs({...RegisterInputs, [event.target.name]: event.target.value,});
}
/*Send register request*/
const RegisterRequest = async (event) => {
    await axios.post(Config.apiUrl+"/register", RegisterInputs)
    .then((response) => {
        console.log(response.data.success.token);
        console.log(response.data.success.message);
        const token = response.data.success.token;
		cookies.set('token', token, { path: '/' });
		Navigate("/");
    })
    .catch((error) => {
       console.log(error);
    });
}
/*GET edprograms i class*/
useEffect(() => {
    const ClassFetch = async () => {
      const className = await (
        await fetch(Config.apiUrl+"/classes")
      ).json();
      setClasess(className);
      const Ed_programs = await (
        await fetch(Config.apiUrl+"/ed_programs")
      ).json();
      setEdprograms(Ed_programs);
    };
    ClassFetch();
}, [])

	return (
		<motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.6 }} className="Register">
			<div id="inp">
				<header>
                    <Link to="/"><img src={Logo} alt="logo"/></Link>
					<h1>Kreiraj nalog</h1>
				</header>
				<h3 id="vasoAligrudic"><span>Vaso Aligrudić</span></h3>
				<div id="form" >
                    <div className="twoInp">
                        <label for="firs_name">Ime<input name="first_name" onChange={HandleInput}type="text" placeholder="Ime"/></label>
                        <label for="last_name">Prezime<input name="last_name" onChange={HandleInput} type="text" placeholder="Prezime" /></label>
                    </div>	

                    <label for="mail">Mail<input name="mail" onChange={HandleInput} type="email" placeholder="Email" /></label>
                    <label for="password">Password<input name="password" onChange={HandleInput} type="Password" placeholder="Password" /></label>
                    <label for="confirm_password">Confirm Password<input name="confirm_password" onChange={HandleInput} type="Password" placeholder="Password" /></label>

                    <div className="twoInp">
                    <label for="ed_program_id">
                        Smjer
						<select name="ed_program_id" onChange={HandleInput}>
                            <option disabled selected>Smjer</option>
                            {Edprograms.map((Options) => {
                                return(<option placeholder="Odeljenje" value={Options.id}>{Options.name}</option>)
                            })}
                        </select>
					</label>
                    <label for="class_id">
						Odeljenje
						<select name="class_id"onChange={HandleInput}>
                            <option disabled value="odeljenje" selected>Odeljenje</option>
                            {classes.map((Options) => {
                                return(<option placeholder="Odeljenje" value={Options.id}>{Options.name}</option>)
                            })}
                        </select>
					</label>
                    </div>
					<label for="gender">
						Pol
						<select name="gender" onChange={HandleInput}>
                            <option disabled selected >Pol</option>
                            {PolOptions.map((Options) => {
                                return(<option placeholder="Pol" value={Options.value}>{Options.value}</option>)
                            })}
                        </select>
					</label>
					<button onClick={RegisterRequest}>Registruj se</button>
					<h4>Imate nalog? <Link to="/Login" aria-label="Login">Prijavi se</Link></h4>
				</div>
			</div>
            <div id="photo">
                
			</div>
		</motion.section>
	);
}

export default Register;