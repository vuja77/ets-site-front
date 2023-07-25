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
						Vasa Raičkovića
						<br />
						Broj ulice 26 Podgorica 81000
					</p>
				</div>
				<div>
					<h3>Djelatnost </h3>
					<p>8532 Srednje stručno i tehničko obrazovanje</p>
				</div>
				<div>
					<h3>Kontakt</h3>
					<a href="tel:+382-020-237-120"><p>Tel : (+382) 020 237 120.0 </p></a>
				</div>
			</div>
			<h6>ETŠ & Amplitudo 2023</h6>
		</footer>
	);


}

export default Footer;
