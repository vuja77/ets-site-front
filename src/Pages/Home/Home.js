import Servisi from "./components/Servisi";
import Partneri from "./components/Partneri";
import Footer from "./components/Footer";
import Header from "./components/Header";
import {motion} from "framer-motion";
import { ToastContainer, toast } from 'react-toastify';
import { useLocation } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from "react";

function Home() {
const location = useLocation();
useEffect(() => {
  const notify = () => toast.info(location.state, {position: "top-center",theme: "colored", toastId: 'A'});
  notify();
  window.history.replaceState({}, document.title)

})
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.6 }}>
      <ToastContainer enableMultiContainer toastId={'A'}/>
      <Header />
      <Servisi />
      <Partneri />
      <Footer />
    </motion.div>
  );
}
export default Home;
