import "./Login.scss";
import Logo from "../../components/img/logo.svg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {motion} from "framer-motion";
import { useState,useEffect } from "react";
import axios from "axios";
import Cookies from 'universal-cookie';
import Config from "../../Config";
import { ToastContainer, toast } from 'react-toastify';

function Login() {
	const Navigate =useNavigate();
	useEffect(() => {
        let cookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)token*\=\s*([^;]*).*$)|^.*$/, "$1");
        if(cookieValue !== "") {
          Navigate("/");
        }
    })	
	const notify2 = () => toast.error("Mail ili lozinka nisu tačni.Pokušajte ponovo", {position: "bottom-right",theme: "colored", toastId: 'B'});
	
const cookies = new Cookies();
const [LoginInputs, setInputs] = useState([]);



/*Get inputs value*/
const HandleInput = (event) => {
	setInputs({...LoginInputs, [event.target.name]: event.target.value});
	console.log(LoginInputs);
}
/*Send login request*/
const LoginRequest = async (event) => {
	event.preventDefault();
	console.log("a");
	await axios.post(Config.apiUrl+"/login", LoginInputs)
	.then((response) => {
		console.log(response.data.success.token);
		/*set token cookie*/
		const token = response.data.success.token;
		cookies.set('token', token);
		/*redirect to homepage*/
		Navigate("/", {
			state: "Uspjesno ste se prijavili",
		});
	
	})
	.catch((error) => {
		
		notify2();
	})
} 
	return (
		<>
		<ToastContainer enableMultiContainer toastId={'B'}/>
		<motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.6 }} className="Login">
	<div id="photo">
			</div>
			<form id="inp" autoComplete="on">
				<header>
					<Link to="/"><img src={Logo} alt="logo"/></Link>
					<h1>Prijavi se na svoj profil</h1>
                    <div class="helper"></div>

				</header>
				<h3 id="vasoAligrudic"><span>Vaso Aligrudić</span></h3>
				<div id="form">
					<label for="mail">
						Mail
						<input name="mail" onChange={HandleInput} type="email" placeholder="Email" />
					</label>
					<label for="password">
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
		
		</>
	);
}

export default Login;