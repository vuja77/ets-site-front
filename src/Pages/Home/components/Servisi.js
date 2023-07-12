import "./Servisi.css";
import dots from "../../../components/img/Group 70.svg";
import { motion } from "framer-motion"

function Servisi() {
	return (
		<section id="servisi">
			
			<div>
				<h1>Šta ti je potrebno?</h1>
			<div id="bckBox"></div>

			</div>
			<motion.div className="box" transition={{duration: 1.0}} initial={{x: 300}} whileInView={{x: 0}}>
			
				<motion.div className="Srv" id="PrijaviStetu" whileHover={{scale: 1.1}} >
					<div></div>
					<h3>Prijavi štetu</h3>
					<p>Sačuvaj školu i Prijavi štetu</p>
				</motion.div >
				<motion.div className="Srv" id="Lms" whileHover={{scale: 1.1}}>
					<div></div>
					<h3>LMS</h3>
					<p>Budi i ti u timu</p>
				</motion.div>
				<motion.div className="Srv" id="Obavjestenja" whileHover={{scale: 1.1}}>
					<div></div>
					<h3>Obavještenja</h3>
					<p>Budi obavješten o svemu</p>
				</motion.div>
				<motion.div className="Srv" id="ZastoCutis" whileHover={{scale: 1.1}}>
					<div></div>
					<h3>Zašto ćutiš</h3>
					<p>Pobijedi sebe i reci  zašto ćutiš</p>
				</motion.div>
			</motion.div>
			<div id="grayBox"></div>
			
			<img id="dotsImg1" src={dots} />
		</section>

	);
}

export default Servisi;