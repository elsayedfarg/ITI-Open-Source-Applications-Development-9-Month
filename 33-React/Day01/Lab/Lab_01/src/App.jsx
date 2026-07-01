// import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Hero from "./Hero-Section/Hero";
import AboutMe from "./AboutMe-Section/About";
import Skills from "./Skills-Section/Skills";
import Portfolio from "./Portfolio/Portfolio";
import Footer from "./Footer/Footer";

const App = () => {
  return (
    <>
      <Hero />
      <AboutMe />
      <Skills />
      <Portfolio />
      <Footer />
    </>
  );
};

export default App;
