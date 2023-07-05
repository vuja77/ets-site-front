import "./partneri.css";
import { useState, useEffect } from "react";
import Cortex from "./img/cortex.jpg";
import Dot2 from "./img/Dot2.svg";

function Partneri() {


	
	const items = [
	{
		id: "cnt1",
		h1: "Cortex Akademija",
		p: "Cortex akademija predstavlja program edukacije iz oblasti informacionih tehnologija koji implementira ICT Cortex – klaster za informacione tehnologije, inovacije, edukaciju, dizajn i tehnološki razvoj Crne Gore..",
	},
	{
		id: "cnt2",
		h1: "VET for Western Balkans",
		p: "Cilj V4WB je jačanje saradnje između zemalja Zapadnog Balkana i zemalja članica EU, sve aktivnosti: uspostavljanje zajedničkih radnih grupa, razvoj nastavnog plana i programa, nove strategije, .",
	},
	{
		id: "cnt3",
		h1: "Regionalni Challenge Fond",
		p: "RCF ima za cilj da ojača relevantnost stručnog obrazovanja i obuke  na tržištu rada finansiranjem ulaganja u opremu i infrastrukturu za pružaoce obuke koji se uključuju aktivnosti obuke sa preduzećima.",
	}
	];
		let [act, setAct] = useState(1);
	
/*useState(() => {
		setAct(newindex);
})*/
useEffect(() => {
	const slideInt = setInterval(() => {	
		if(act === 3) {
			setAct(1);
		} else {
			setAct(act+1);
		}

	}, 7000)
	return () => { clearInterval(slideInt); };
})
	return(
		<section className="partneri" >
			<h1>Partneri Elektrotehničke škole</h1>
			<div className="Slider" id={"sl"+act}>
				{items.map((item) => {
				return (<div className="cont">
				<div id={item.id}></div>
				<div>
					<h2>{item.h1}</h2>
			   		<p>{item.p}</p>
					<div className="dots">
						<button onClick={() => setAct(1)} className={act == "1" ? "active" : ""}></button>
						<button onClick={() => setAct(2)} className={act == "2" ? "active" : ""}></button>
						<button onClick={() => setAct(3)} className={act == "3" ? "active" : ""}></button>
					</div>
				</div>
				<img id="dot2"src={Dot2}/>
				<div className="circle"></div>
			</div>);
				})}
			</div>
			
		</section>
	)
	;
}

export default Partneri;