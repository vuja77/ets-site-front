import "./servisi.css"
import dots from "./img/Group 70.svg";
function Servisi() {

	return(
		<section id="servisi">
			<div>
				<h1>Šta ti je potrebno?</h1>
			</div>
			<div className="box">
				<div class="Srv" id="a">
					<div></div>
					<h3>Prijavi štetu</h3>
					<p>sacuvaj skolu i Prijavi stetu</p>
				</div>
				<div class="Srv"id="b"><div></div>
					<h3>Lms</h3>
					<p>Budi i ti u timu</p></div>
				<div class="Srv"id="v"><div></div>
					<h3>Obavještenja</h3>
					<p>Budi obavješten o svemu</p></div>
				<div class="Srv"id="c"><div></div>
					<h3>Zasto cutis</h3>
					<p>Pobijedi sebe i reci  zašto ćutiš</p></div>
			</div>
			<div id="gr"></div>
			<div id="bck-box"></div>
			<img id="dots"src={dots}/>
			
		</section>
		
	);
}

export default Servisi;