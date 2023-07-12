import "./Servisi.css";
import dots from "../../../components/img/Group 70.svg";
import { motion } from "framer-motion"
import { LazyMotion, domAnimation, domMax, m } from "framer-motion"

function Servisi() {
	return (
		<section id="servisi">
			
			<div>
				<h1>Šta ti je potrebno?</h1>
			<div id="bckBox"></div>

			</div>
			<LazyMotion features={domAnimation} strict>
			<m.div className="box" transition={{duration: 0.5}}initial={{x: 300}} whileInView={{x: 0}}>
			
				<div className="Srv" id="PrijaviStetu" >
					<div></div>
					<h3>Prijavi štetu</h3>
					<p>Sačuvaj školu i Prijavi štetu</p>
				</div >
				<div className="Srv" id="Lms">
					<div></div>
					<h3>LMS</h3>
					<p>Budi i ti u timu</p>
				</div>
				<div className="Srv" id="Obavjestenja">
					<div></div>
					<h3>Obavještenja</h3>
					<p>Budi obavješten o svemu</p>
				</div>
				<div className="Srv" id="ZastoCutis">
					<div></div>
					<h3>Zašto ćutiš</h3>
					<p>Pobijedi sebe i reci  zašto ćutiš</p>
				</div>
			</m.div>
			</LazyMotion>
			<div id="grayBox"></div>
			
			<img id="dotsImg1" src={dots} />
		</section>

	);
}

export default Servisi;