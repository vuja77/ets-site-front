import "./Oskoli.css";
import Logo from "../components/img/logo.svg";
import Djeca from "../components/img/Oskoli.png";
import { Link } from "react-router-dom";

function Oskoli() {

    return (
        <section className="Osk">
            <nav>
                <img src={Logo} />
                <ul>
                    <li> <Link to="/">Home</Link> </li>
                    <li> <Link to="/materijali">Materijali</Link> </li>
                    <li> <Link to="/" id="activePage">O školi</Link> </li>
                    <li> Servisi </li>
                    <li id="Login"> <Link to="/Login"><button>Log in</button></Link> </li>
                </ul>
            </nav>

            <div id="photosk">
                <img src={Djeca}></img>
            </div>

            <div class="textsk">
                <h1>O skoli</h1>
                <p>
                    Sledeći strategiju razvoja stručnog obrazovanja u Crnoj Gori, Srednja stručna škola elektroinženjeringa "Vaso Aligrudić" iz Podgorice promoviše i koristi najnovije obrazovne programe i tehnologije, sprovodi radionice i obuke kako bi doprinela kvalitetu metoda nastave i pružila stručne kvalifikacije studentima i kontinuirani razvoj nastavnicima. Osoblje škole čine brojni nagrađivani nastavnici, mentori i savetnici.<br></br>
                    Kroz organizaciju i učešće u mnogim domaćim i međunarodnim takmičenjima, Srednja stručna škola elektroinženjeringa "Vaso Aligrudić" dokazuje da je veliki broj učenika i nastavnika spreman da se suoči s raznim teškoćama i izazovima na tržištu. Škola je licencirana za obrazovanje odraslih i koristi obrazovne programe (Izgradnja i održavanje elektronskih sigurnosnih sistema, instalacija i održavanje elektrokomunikacionih sistema, Popravka i održavanje elektronskih komercijalnih uređaja itd.) sprovedene novom metodologijom koja se sastoji od modula, rezultata i ključnih kompetencija potrebnih za stručne kvalifikacije, kako bi se zadovoljile potrebe poslodavaca i tržišta.<br></br>
                    Iako je ovo prvi put da učestvujemo u projektu Evropske komisije, postigli smo odlične rezultate posvećenim i napornim radom. Učešćem u projektu VET4WB uspeli smo da zainteresujemo ne samo naše učenike i nastavnike za uključivanje, već i celu lokalnu zajednicu. Prepoznati smo od strane vodećeg partnera kao vredni i kao neko kome se drugi mogu ugledati.<br></br>
                    Upravo smo započeli implementaciju vrednog projekta RCF, koji će našoj školi doneti nove opreme i učionice-radionice vredne više od 500.000. Velika korist ovog projekta ogleda se u saradnji s vodećim kompanijama u regionu, koje će pružiti našim učenicima praktične časove u stvarnim uslovima. Naši nastavnici će takođe imati priliku za stručno usavršavanje.<br></br>
                    Kroz ove projekte smo pokazali da smo spremni za napredak i da naporno radimo kako bismo pre svega omogućili našim učenicima što uspešnije obrazovanje. Srednja stručna škola elektroinženjeringa "Vaso Aligrudić" ima 123 zaposlena i 1120 učenika.
                </p>

            </div>
            
            <footer>
			<img src={Logo}></img>
			<div>
				<h3>Osnovne informacije</h3>
				<p>VASO ALIGRUDIĆ
					<br />
					Vasa Raičkovića
					<br />
					Br 2681000
				</p>
			</div>
			<div>
				<h3>Djelatnost </h3>
				<p>8532 Srednje stručno i tehničko obrazovanje</p>
			</div>
			<div>
				<h3>Kontakt</h3>
				<p>Tel : (+382) 020 237 120.0 </p>
			</div>
		</footer>

        </section>
     );

}

export default Oskoli;