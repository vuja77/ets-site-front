import "./Servisi.scss";
import dots from "../../../components/img/Group 70.svg";
import { LazyMotion, domAnimation, m } from "framer-motion"
import Config from "../../../Config";
function Servisi() {
	return (
		<section id="servisi">
			<div>
				<h1>Šta ti je potrebno?</h1>
			<div id="bckBox"></div>
			</div>
				<LazyMotion features={domAnimation} strict>
				<m.div className="box" transition={{}}initial={{x: 200}} whileInView={{x: 0}}>
				
					<div className="Srv" id="PrijaviStetu" >
						<div></div>
						<strong>Prijavi štetu</strong>
						<p>Sačuvaj školu i Prijavi štetu</p>
					</div >
					<a href={Config.lmsUrl}><div className="Srv" id="Lms">
						<div></div>
						<strong>LMS</strong>
						<p>Budi i ti u timu</p>
					</div></a>	
					<div className="Srv" id="Obavjestenja">
						<div></div>
						<strong>Obavještenja</strong>
						<p>Budi obavješten o svemu</p>
					</div>
					<div className="Srv" id="ZastoCutis">
						<div></div>
						<strong>Zašto ćutiš</strong>
						<p>Pobijedi sebe i reci  zašto ćutiš</p>
					</div>
				</m.div>
				</LazyMotion>
			<div id="grayBox"></div>
			<img id="dotsImg1" src={dots} alt="dots" />
		</section>
	);
}
export default Servisi;