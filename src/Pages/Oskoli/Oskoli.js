import "./Oskoli.scss";

import Djeca from "../../components/img/Oskoli.png";
import { motion } from "framer-motion";
import {faEnvelope, faAngleLeft,faAngleRight} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Footer from "../Home/components/Footer";
import { useState } from "react";
function Oskoli() {
    const [current, setCurrnet] = useState(0);
   /* setInterval(() => {
        if(current > Images.length) {
            setCurrnet(0)
        } else {
            setCurrnet(current+1)
        }
    }, 3000)*/
    const next = () => {
        console.log(current);
        if(current >= Images.length -1) {
            console.log("ff"); 
            setCurrnet(0)
         }else {
            setCurrnet(current+1);

        }
    }
    const prevous = () =>  {
        console.log(current);
        if(current === 0) {
            console.log("ff"); 
            setCurrnet(Images.length -1)
         }else {
            setCurrnet(current-1);

        }
    }
const Images = [
    {
        name: "IMG-b3bfec76d88e0adef0fbcd08679bd63c-V.jpg"
    },
    {
        name: "IMG-6165250007c0876730352cf000e10c8a-V.jpg"
    },
    {
       
        name: "IMG-28c5dd3e1940feed80b1cd27a8cb3e7e-V.jpg"

    }, 
    {
        name: "IMG-e05d0497db7a6213162d9966e8deb065-V.jpg"
    },
    {
        name: "IMG-d92055a1fee54e6dcb5556734655bdc8-V.jpg"
    },
    {
        name: "IMG-75426a27ddefd394015432580d4cc3a5-V.jpg"
    },
    {
        name: "IMG-6453fcf39408d816fb2f5ff43f0a1ac6-V.jpg"
    },
    {
        name: "IMG-05113d5a3de1d4da93ff86145eccb1b9-V.jpg"
    },
    {
        name: "IMG-203bc7101822939574b0d1dc35009c19-V.jpg"
    },
    {
        name: "IMG-97d0915a2cbbaf14340bdb1dd4663062-V.jpg"
    },
    {
        name: "IMG-90e7c8bda101122c740dfaf880890919-V.jpg"
    },
    {
        name: "IMG-81ace6e5d1e8cbfe64bdd3d9de3503f1-V.jpg"
    },
    {
        name: "IMG-2cc3ba6bcab59706a4c705f7a3bc2d6c-V.jpg"
    },
    {
        name: "IMG-5b3c0fdb344ec729f2fe68abba941e9b-V.jpg"
    },
    {
        name: "IMG-7cffdd0103de9e8e6187ef660e716b76-V.jpg"
    },
    {
        name: "IMG-fbb01a8a1e3ef96bc80e56b380eae554-V.jpg"

    }
]
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.6 }}>
        <section className="Osk">
          <div className="Slider">
            <button onClick={() => prevous()}><FontAwesomeIcon icon={faAngleLeft} size="3x"></FontAwesomeIcon></button>
            {
            Images.map((item, index) => {
               
                return  <img key={index} className={current == index ? 'Oskoli active' : 'Oskoli'} src={require("../../components/img/"+item.name)} alt="Oskoli"></img>
      
            })
           }
            <button onClick={() => next()}><FontAwesomeIcon icon={faAngleRight} size="3x"></FontAwesomeIcon></button>

          </div>
           
          
            

            <div class="txt">
                <div className="Back">
                    <h1>O školi</h1>
                    <p>
                        Sledeći strategiju razvoja stručnog obrazovanja u Crnoj Gori, Srednja elektrotehnička škola "Vaso Aligrudić" iz Podgorice promoviše i koristi najnovije obrazovne programe i tehnologije, sprovodi radionice i obuke kako bi doprinijela kvalitetu metoda nastave i pružila stručne kvalifikacije studentima i kontinuirani razvoj nastavnicima. Osoblje škole čine brojni nagrađivani nastavnici, mentori i savjetnici.<br/><br/><br/>
                        Kroz organizaciju i učešće u mnogim domaćim i međunarodnim takmičenjima, Srednja elektrotehnička škola "Vaso Aligrudić" dokazuje da je veliki broj učenika i nastavnika spreman da se suoči s raznim teškoćama i izazovima na tržištu. Škola je licencirana za obrazovanje odraslih i koristi obrazovne programe (Izgradnja i održavanje elektronskih sigurnosnih sistema, instalacija i održavanje elektrokomunikacionih sistema, Popravka i održavanje elektronskih komercijalnih uređaja itd.) sprovedene novom metodologijom koja se sastoji od modula, rezultata i ključnih kompetencija potrebnih za stručne kvalifikacije, kako bi se zadovoljile potrebe poslodavaca i tržišta.<br/><br/><br/>
                        Iako je ovo prvi put da učestvujemo u projektu Evropske komisije, postigli smo odlične rezultate posvećenim i napornim radom. Učešćem u projektu VET4WB uspjeli smo da zainteresujemo ne samo naše učenike i nastavnike za uključivanje, već i cijelu lokalnu zajednicu. Prepoznati smo od strane vodećeg partnera kao vrijedni i kao neko kome se drugi mogu ugledati.<br/><br/><br/>
                        Upravo smo započeli implementaciju vrednog projekta RCF, koji će našoj školi donijeti nove opreme i učionice-radionice vredne više od 500.000. Velika korist ovog projekta ogleda se u saradnji s vodećim kompanijama u regionu, koje će pružiti našim učenicima praktične časove u stvarnim uslovima. Naši nastavnici će takođe imati priliku za stručno usavršavanje.<br/><br/><br/>
                        Kroz ove projekte smo pokazali da smo spremni za napredak i da naporno radimo kako bismo pre svega omogućili našim učenicima što uspješnije obrazovanje. Srednja elektrotehnička škola "Vaso Aligrudić" ima 123 zaposlena i 1120 učenika.
                    </p>
                </div>
               
            <div className="circle1"></div>
                
            </div>

            <Footer/>

        </section>
        </motion.div>
     );

}

export default Oskoli;