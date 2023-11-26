import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import "./App.css";
import Clients from "./components/Clients/Clients";
import Services from "./components/Services/Services";
import Previous from "./components/Previous/Previous";
import About from "./components/About/About";
import Contactus from "./components/Contactus/Contactus";
import Footer from "./components/Footer/Footer";
import { useEffect } from "react";


function App() {
  function smoothScroll(distance, duration) {
    const startingY = window.scrollY;
    const diff = distance;
    let start;

    window.requestAnimationFrame(function step(timestamp) {
      if (!start) start = timestamp;
      const time = timestamp - start;
      const percent = Math.min(time / duration, 1);

      window.scrollTo(0, startingY + diff * percent);

      if (time < duration) {
        window.requestAnimationFrame(step);
      }
    });
  }

  function scrollToSection(targetId) {
    const target = document.getElementById(targetId);
    console.log(targetId);
    if (target) {
      const targetPosition = target.offsetTop;
      const startPosition = window.scrollY;
      const distance = targetPosition - startPosition;
      smoothScroll(distance, 500);
    }
  }

  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
        <Header NavigateFun={scrollToSection} />
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="clients">
        <Clients  />
      </div>
      <div id="services">
        <Services  />
      </div>
      <div id="previous">
        <Previous  />
      </div>
      <div id="contact">
        <Contactus  />
      </div>
      <Footer />
    </div>
  );
}

export default App;