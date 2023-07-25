import Home from "./Pages/Home/Home";

import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Nav from "./components/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";


function App() {
  return (
    <AnimatePresence  mode="wait">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/" >
          <Route path="login" element={<Login />} />
        </Route>
        <Route path="/" >
          <Route path="register" element={<Register />} />
      
        </Route>
      </Routes>
    </BrowserRouter>
    </AnimatePresence>
  );
}

export default App;
