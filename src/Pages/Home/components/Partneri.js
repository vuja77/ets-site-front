import "./Partneri.css";
import { useState, useEffect } from "react";
import Dot2 from "../../../components/img/Dot2.svg";

function Partneri() {
	const SliderItems = [
		{
			id: "cortex",
			h1: "Cortex Akademija",
			p: "Cortex akademija predstavlja program edukacije iz oblasti informacionih tehnologija koji implementira ICT Cortex – klaster za informacione tehnologije, inovacije, edukaciju, dizajn i tehnološki razvoj Crne Gore..",
			dotId: 1,
		},
		{
			id: "vet4web",
			h1: "VET for Western Balkans",
			p: "Cilj V4WB je jačanje saradnje između zemalja Zapadnog Balkana i zemalja članica EU, sve aktivnosti: uspostavljanje zajedničkih radnih grupa, razvoj nastavnog plana i programa, nove strategije, .",
			dotId: 2,
		},
		{
			id: "rcf",
			h1: "Regionalni Challenge Fond",
			p: "RCF ima za cilj da ojača relevantnost stručnog obrazovanja i obuke  na tržištu rada finansiranjem ulaganja u opremu i infrastrukturu za pružaoce obuke koji se uključuju aktivnosti obuke sa preduzećima.",
			dotId: 3,
		}
	];
	const [activeSlide, setSlide] = useState(1);
	let activeSlideId = "sl" + activeSlide;
		
	useEffect(() => {
		const slideInt = setInterval(() => {
			if (activeSlide === 3) {
				setSlide(1);
			} else {
				setSlide(activeSlide + 1);
			}

		}, 3000)
		return () => { clearInterval(slideInt); };
	})
	return (
		<section className="partneri" >
			<h1>Partneri Elektrotehničke škole</h1>
			<div className="Slider" id={activeSlideId}>
				{SliderItems.map((Slide) => {
					return (
						<div className="cont">
							<div id={Slide.id}></div>
							<div>
								<h2>{Slide.h1}</h2>
								<p>{Slide.p}</p>
								<div className="dots">
									{
										SliderItems.map((Dots) => {
											return (<button onClick={() => setSlide(Dots.dotId)} className={activeSlide === Dots.dotId ? "active" : ""}></button>);
										})
									}
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