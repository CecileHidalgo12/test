import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/landing1"; 
import Home from "./pages/home1";
import Araneta from "./pages/araneta"; 
import Moa from "./pages/moa1"; 
import PhArena from "./pages/philarena1";
import "./App.css";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* Landing page */}
          <Route path="/" element={<Landing />} />

          {/* Home page */}
          <Route path="/home1" element={<Home />} />

          {/* Araneta page */}
          <Route path="/araneta" element={<Araneta />} />

           {/* Moa page */}
          <Route path="/moa1" element ={<Moa />} /> 
          {/* Phil Arena page */} 
          <Route path="/philarena1" element={<PhArena  />} />
           
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}
