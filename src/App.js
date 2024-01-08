import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Signup from "./pages/signup";

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route exact path="" element={<Home/>} />
    <Route exact path="signup" element={<Signup/>} />
    </Routes>

     
    </BrowserRouter>
  );

 
}

export default App;
