import "./Footer.scss";
import Logo from "../../../components/img/logo.svg";

function Footer() {
	return (
		<footer>
			<div className="container">
				<img src={Logo} alt="logo"></img>
				<div>
					<h3>Osnovne informacije</h3>
					<p>VASO ALIGRUDIĆ
						<br />
						ul. Vasa Raičkovića 26
						<br />
						Podgorica 81000
					</p>
				</div>
				<div>
					<h3>Djelatnost </h3>
					<p>8532 Srednje stručno i tehničko obrazovanje</p>
				</div>
				<div>
					<h3>Kontakt</h3>
					<a href="tel:+382-020-237-120"><p>Tel : <span id="telefon">(+382) 020 237 120</span></p></a>
				</div>
			</div>
			<h4>ETŠ & Amplitudo 2023</h4>
		</footer>
	);


}

export default Footer;
