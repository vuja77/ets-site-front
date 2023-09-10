import "./Servisi.scss";
import dots from "../../../components/img/Group 70.svg";
import { LazyMotion, domAnimation, m } from "framer-motion"
import { Link } from "react-router-dom";
function Servisi() {
	return (
		<section id="servisi">
			<div>
				<h1>Šta ti je potrebno?</h1>
			<div id="bckBox"></div>
			</div>
				<LazyMotion features={domAnimation} strict>
				<m.div className="box" transition={{}}initial={{x: 200}} whileInView={{x: 0}}>
				
				<Link to="/prijavi-stetu"><div className="Srv" id="PrijaviStetu" >
						<div></div>
						<strong>Prijavi štetu</strong>
						<p>Sačuvaj školu i Prijavi štetu</p>
					</div ></Link>	
					<a href={/*Config.lmsUrl*/"https://elektropg.online/ets/"}><div className="Srv" id="Lms">
						<div></div>
						<strong>Moodle</strong>
						<p>Platforma za učenje</p>
					</div></a>	
					<Link to="/obavjestenja"><div className="Srv" id="Obavjestenja">
						<div></div>
						<strong>Obavještenja</strong>
						<p>Budi obavješten o svemu</p>
					</div></Link>
					<Link to="/zasto-cutis"><div className="Srv" id="ZastoCutis">
						<div></div>
						<strong>Zašto ćutiš</strong>
						<p>Pobijedi sebe i reci  zašto ćutiš</p>
					</div></Link>
				</m.div>
				</LazyMotion>
			<div id="grayBox"></div>
			
		</section>
	);
}
export default Servisi;