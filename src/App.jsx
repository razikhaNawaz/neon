import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import "./App.css";
import Clients from "./components/Clients/Clients";
import Services from "./components/Services/Services";
import About from "./components/About/About";
import Contactus from "./components/Contactus/Contactus";

function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
        <Header />
        <Hero />
      </div>
      <About />
      <Clients />
      <Services />
      <Contactus />
    </div>
  );
}

export default App;
