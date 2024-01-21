import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import OurTeam from "./pages/OurTeam";
import Testimonials from "./pages/Testimonials";
import VehicleModels from "./pages/vehicleModels";
import NoPage from "./pages/noPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/OurTeam" element={<OurTeam />} />
        <Route path="/Testimonials" element={<Testimonials />} />
        <Route path="/VehicleModels" element={<VehicleModels />} />
        <Route path="/NoPage" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
