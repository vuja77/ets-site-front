import "./Login.css";
import Logo from "../../components/img/logo.svg";
import { Link } from "react-router-dom";

function Login() {
	return (
		<section>
			<div id="photo">

			</div>
			<div id="inp">
				<header>
					<img src={Logo} />
					<h1>Prijavi se na svoj profil</h1>
				</header>

				<h3 id="vasoAligrudic"><span>Vaso Aligrudić</span></h3>

				<div id="form">
					<label>
						Mail
						<input type="email" placeholder="Email" />
					</label>
					<label>
						Password
						<input type="password" placeholder="Password" />
					</label>
					<div>
						<label>
							<input type="checkbox" />
							Zapamti moje podatke
						</label>

						<h5>Zaboravili ste loinku?</h5>
					</div>

					<button>Login</button>
					<h4>Nemate nalog? <Link to="/register">Registruj se</Link></h4>
				</div>
			</div>
		</section>
	);
}

export default Login;