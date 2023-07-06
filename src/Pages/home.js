import Servisi from ".././components/servisi.js";
import Partneri from ".././components/partneri.js";
import Footer from ".././components/footer.js";
import Header from "../components/HeroSec.js";

function Home() {
  return (
    <div>
    <Header/>
    <Servisi/>
    <Partneri/>
    <Footer/>
    </div>
  );
}

export default Home;
