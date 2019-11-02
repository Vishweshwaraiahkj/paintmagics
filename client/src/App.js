import React from "react";
import "./App.css";
import ControlledCarousel from "./components/home-page/ControlledCarousal";
import NavBar from "./components/common/NavBar";
import OurServieces from "./components/home-page/OurServieces";
import WhatsUnique from "./components/home-page/WhatsUnique";
import AboutUs from "./components/home-page/AboutUs";
import HowItWorks from "./components/home-page/HowItWorks";
import EnquireUs from "./components/home-page/EnquireUs";
import Footer from "./components/common/Footer";

function App() {
  return (
    <div className="App">
      <div className="homeBox">
        <NavBar />
      </div>
      <div className="homeBox">
        <ControlledCarousel />
      </div>
      <div className="homeBox">
        <OurServieces />
      </div>
      <div className="homeBox">
        <WhatsUnique />
      </div>
      <div className="homeBox">
        <AboutUs />
      </div>
      <div className="homeBox">
        <HowItWorks />
      </div>
      <div className="homeBox">
        <EnquireUs />
      </div>
      <Footer />
    </div>
  );
}

export default App;
