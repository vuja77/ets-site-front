import Home from "./Pages/home.js";
import Login from "./Pages/Login.js";
import Layout from "./Pages/layout.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
    <Routes>
       <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
        </Route>
    </Routes>
    </BrowserRouter>
  
  );
}

export default App;
