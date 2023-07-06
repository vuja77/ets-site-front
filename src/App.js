import Home from "./Pages/home.js";
import Login from "./Pages/Login.js";
import Nav from "./components/nav.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Nav />}>
        <Route index element={<Home />} />
      </Route> 
       <Route path="/" >
         
          <Route path="login" element={<Login />} />
        </Route>
    </Routes>
    </BrowserRouter>
  
  );
}

export default App;
