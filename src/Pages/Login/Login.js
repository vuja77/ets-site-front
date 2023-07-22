import "./Login.scss";
import Logo from "../../components/img/logo.svg";
import { Link, json } from "react-router-dom";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import {motion} from "framer-motion";
import { useState } from "react";
import axios from "axios";
import Cookies from 'universal-cookie';
function Login() {
	
const cookies = new Cookies();
const [LoginInputs, setInputs] = useState([]);
const Navigate =useNavigate();

/*Get inputs value*/
const HandleInput = (event) => {
	setInputs({...LoginInputs, [event.target.name]: event.target.value});
	console.log(LoginInputs);
}
/*Send login request*/
const LoginRequest = async (event) => {
	event.preventDefault();
	await axios.post("http://127.0.0.1:8000/api/login", LoginInputs)
	.then((response) => {
		console.log(response.data.success.token);
		/*set token cookie*/
		const token = response.data.success.token;
		cookies.set('token', token, { path: '/' });
		/*redirect to dashboard*/
		Navigate("/dashboard");
	})
	.catch((error) => {
		console.log(error);
	})
} 
	return (
		<motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.6 }} className="Login">
	<div id="photo">
			</div>
			<form id="inp" autoComplete="on">
				<header>
					<Link to="/"><img src={Logo} /></Link>
					<h1>Prijavi se na svoj profil</h1>
				</header>
				<h3 id="vasoAligrudic"><span>Vaso Aligrudić</span></h3>
				<div id="form">
					<label>
						Mail
						<input name="mail" onChange={HandleInput} type="email" placeholder="Email" />
					</label>
					<label>
						Password
						<input name="password" onChange={HandleInput} type="password" placeholder="Password" />
					</label>
					<div>
						<label>
							<input type="checkbox" />
								Zapamti moje podatke
						</label>
						<h5>Zaboravili ste loinku?</h5>
					</div>
					<button onClick={LoginRequest}>Login</button>
						<h4>Nemate nalog? <Link to="/register">Registruj se</Link></h4>
				</div>
			</form>
		</motion.section>
	);
}

export default Login;