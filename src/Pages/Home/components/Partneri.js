import "./Partneri.scss";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Dot2 from "../../../components/img/Dot2.svg";

function Partneri() {
	const SliderItems = [
		{
			id: "cortex",
			h1: "Cortex Akademija",
			p: "Cortex akademija predstavlja program edukacije iz oblasti informacionih tehnologija koji implementira ICT Cortex – klaster za informacione tehnologije, inovacije, edukaciju, dizajn i tehnološki razvoj Crne Gore..",
			link: "https://ictcortex.me/en/",
			dotId: 1,
		},
		{
			id: "vet4web",
			h1: "VET for Western Balkans",
			p: "Cilj V4WB je jačanje saradnje između zemalja Zapadnog Balkana i zemalja članica EU, sve aktivnosti: uspostavljanje zajedničkih radnih grupa, razvoj nastavnog plana i programa, nove strategije, .",
			link: "https://vet4wb.com/",
			dotId: 2,
		},
		{
			id: "rcf",
			h1: "Regionalni Challenge Fond",
			p: "RCF ima za cilj da ojača relevantnost stručnog obrazovanja i obuke  na tržištu rada finansiranjem ulaganja u opremu i infrastrukturu za pružaoce obuke koji se uključuju aktivnosti obuke sa preduzećima.",
			link: "https://rcf-wb6.org/?lang=me",
			dotId: 3,
		},
		{
			id: "amplitudo",
			h1: "Amplitudo",
			p: "Za nas, ovo nije kompanija, već način života, ciklus koji započinje regrutovanjem ljudi i ideja u kojem su obučavani i ohrabreni da budu kreativni i maštoviti, a završava nizom proizvoda koji oblikuju tu maštu u funkcionalnost koja u konačnom- mijenja svijet oko nas.",
			link: "https://amplitudo.me/",
			dotId: 4,
		}
	];
	const [activeSlide, setSlide] = useState(1);
	const ref = useRef(null);
	
	useEffect(() => {
		const slideInt = setInterval(() => {
			if (activeSlide === SliderItems.length) {
				ref.current.scrollLeft -= 4000;
				setSlide(1);
			} else {
				ref.current.scrollLeft += ref.current.offsetWidth;
				setSlide(activeSlide +1);
			}
		}, 7000)
		return () => { clearInterval(slideInt);};
	})
	const scroll = (DotId) => {
		if(DotId === 1) {
			ref.current.scrollLeft = 0;
		} else {
			ref.current.scrollLeft = ref.current.offsetWidth * (DotId-1);
		}
	};
	const scrollPosition = () => {
		let slideNumber = (Math.round((ref.current.scrollLeft) / ref.current.offsetWidth));
		setSlide(slideNumber + 1);
		if (ref.current.scrollLeft > (ref.current.offsetWidth*3)) {
			setSlide(SliderItems.length);
		}
	}
	return (
		<section className="partneri" >
			<h1>Partneri Elektrotehničke škole</h1>
			<div  onScroll={() => scrollPosition()}className="Slider"  ref={ref}>
				{SliderItems.map((Slide, i) => {
					return (
						<div className="cont" key={i}>
							<div id="PartnerBox" >
								<Link target="_blank" to={Slide.link} aria-label="Partners"><div id={Slide.id} className="PartnerLogo"></div></Link>
								<img id="dotsImg" src={Dot2} alt="dots"/>
								<div className="circle"></div>
							</div>
							<div className="PartnerText">
								<h2>{Slide.h1}</h2>
								<p>{Slide.p}</p>
							</div>
						</div>
					);
				})}
			</div>
			<div className="dots">
				{
					SliderItems.map((Dots, i) => {
						return (<button key={i} onClick={() => scroll(Dots.dotId)} className={activeSlide === Dots.dotId ? "active" : ""} aria-label="SliderDot"></button>);
					})
				}
			</div>
		</section>
	);
}
export default Partneri;