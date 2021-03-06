import React from "react";
import { ToastContainer } from "react-toastify";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Skills from "./Components/Skills";
import Work from "./Components/Works";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
      <Footer />
      <ToastContainer />
    </>
  );
};

export default App;
