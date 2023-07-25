import Servisi from "./components/Servisi";
import Partneri from "./components/Partneri";
import Footer from "./components/Footer";
import Header from "./components/Header";
import {motion} from "framer-motion";
function Home() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.6 }}>
      <Header />
      <Servisi />
      <Partneri />
      <Footer />
    </motion.div>
  );
}
export default Home;
