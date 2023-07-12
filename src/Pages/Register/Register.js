import "./Register.css";
import Logo from "../../components/img/logo.svg";
import { Link } from "react-router-dom";
import Select from 'react-select'
import {motion} from "framer-motion"
function Login() {
    const PolOptions = [
        {
            value: "Muski",
        }, 
        {
            value: "Zenski",
        },
        {
            value: "Ostalo",
        }
      ]
      const SmjerOptions = [
        {
            value: "Eektrotehnicar racunarskih sistema i mreza",
        }, 
        {
            value: "Eektrotehnicar elektronskih komunikacija",
        },
        {
            value: "Eektrotehnicar energetike",
        },
        {
            value: "Eektrotehnicar elektronike",
        },
        {
            value: "Eektrotehnicar za razvoj veb i mobilnih aplikcaija",
        },
        
      ]
      const OdljOptions = [
      
            {
                value: "S1A",
            }, 
            {
                value: "S1B",
            },
            {
                value: "S1C",
            },
            {
                value: "S1D",
            },
            
          
      ]
	return (
		<motion.section 
		initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
		 className="Register">
			
			<div id="inp">
				<header>
                <Link to="/"><img src={Logo} /></Link>

					<h1>Kreiraj nalog</h1>
				</header>

				<h3 id="vasoAligrudic"><span>Vaso Aligrudić</span></h3>

				<div id="form">
                    <div class="twoInp">
                        <label>
                            Ime
                            <input type="text" placeholder="Ime" />
                        </label>
                        <label>
                            Prezime
                            <input type="text" placeholder="Prezime" />
                        </label>
                    </div>
					
                    <label>
						Mail
						<input type="email" placeholder="Email" />
					</label>
                    <label>
						Password
						<input type="Password" placeholder="Password" />
					</label>
                    <label>
						Confirm Password
						<input type="Password" placeholder="Password" />
					</label>
                    <div class="twoInp">
                    <label>
						Smjer
						<select>
                            <option disabled selected >Smjer</option>
                            {SmjerOptions.map((Options) => {
                                return(<option placeholder="Pol" value={Options.value}>{Options.value}</option>)
                            })}
                        </select>
					</label>
                    <label>
						Odeljenje
						<select>
                            <option disabled selected >Odeljenje</option>
                            {OdljOptions.map((Options) => {
                                return(<option placeholder="Pol" value={Options.value}>{Options.value}</option>)
                            })}
                        </select>
					</label>
                    </div>
					
					<label>
						Pol
						<select>
                            <option disabled selected >Pol</option>
                            {PolOptions.map((Options) => {
                                return(<option placeholder="Pol" value={Options.value}>{Options.value}</option>)
                            })}
                        </select>
					</label>
					
					<button>Registruj se</button>
                    
					<h4>Imate nalog? <Link to="/Login">Prijavi se</Link></h4>
				</div>
			</div>
            <div id="photo">
                
			</div>
		</motion.section>
	);
}

export default Login;