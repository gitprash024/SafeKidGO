import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Statistics from "../../components/Statistics/Statistics";
import Demo from "../../components/Demo/Demo";
import Features from "../../components/Features/Features";
import About from "../../components/About/About";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";


import "./Home.css";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Statistics />
      <Demo />
      <Features />
      <About />
      <Contact />
      <Footer />
  
    </>
  );
}

export default Home;