import "./Partneri.css";
import { useState, useEffect } from "react";
import Dot2 from "../../../components/img/Dot2.svg";

function Partneri() {
	const SliderItems = [
		{
			id: "cortex",
			h1: "Cortex Akademija",
			p: "Cortex akademija predstavlja program edukacije iz oblasti informacionih tehnologija koji implementira ICT Cortex – klaster za informacione tehnologije, inovacije, edukaciju, dizajn i tehnološki razvoj Crne Gore..",
		},
		{
			id: "vet4web",
			h1: "VET for Western Balkans",
			p: "Cilj V4WB je jačanje saradnje između zemalja Zapadnog Balkana i zemalja članica EU, sve aktivnosti: uspostavljanje zajedničkih radnih grupa, razvoj nastavnog plana i programa, nove strategije, .",
		},
		{
			id: "rcf",
			h1: "Regionalni Challenge Fond",
			p: "RCF ima za cilj da ojača relevantnost stručnog obrazovanja i obuke  na tržištu rada finansiranjem ulaganja u opremu i infrastrukturu za pružaoce obuke koji se uključuju aktivnosti obuke sa preduzećima.",
		}
	];
	let [activeSlide, setSlide] = useState(1);

	useEffect(() => {
		const slideInt = setInterval(() => {
			if (activeSlide === 3) {
				setSlide(1);
			} else {
				setSlide(activeSlide + 1);
			}

		}, 7000)
		return () => { clearInterval(slideInt); };
	})
	return (
		<section className="partneri" >
			<h1>Partneri Elektrotehničke škole</h1>
			<div className="Slider" id={"sl" + activeSlide}>
				{SliderItems.map((Slide) => {
					return (
						<div className="cont">
							<div id={Slide.id}></div>
							<div>
								<h2>{Slide.h1}</h2>
								<p>{Slide.p}</p>
								<div className="dots">
									<button onClick={() => setSlide(1)} className={activeSlide == "1" ? "active" : ""}></button>
									<button onClick={() => setSlide(2)} className={activeSlide == "2" ? "active" : ""}></button>
									<button onClick={() => setSlide(3)} className={activeSlide == "3" ? "active" : ""}></button>
								</div>
							</div>
							<img id="dot2" src={Dot2} />
							<div className="circle"></div>
						</div>
					);
				})}
			</div>
		</section>
	)
		;
}

export default Partneri;