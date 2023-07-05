import Servisi from ".././components/servisi.js";
import Partneri from ".././components/partneri.js";
import Foote from ".././components/footer.js";
import Header from ".././components/header.js";

function Home() {
  return (
    <div>
    <Header/>
    <Servisi/>
    <Partneri/>
    <Foote/>
    </div>
  );
}

export default Home;
