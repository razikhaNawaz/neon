import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import "./App.css";
import Clients from "./components/Clients/Clients";
import Services from "./components/Services/Services";
import Previous from "./components/Previous/Previous";
import About from "./components/About/About";
import Contactus from "./components/Contactus/Contactus";
import Footer from "./components/Footer/Footer";

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
      <Previous />
      <Contactus />
      <Footer />
    </div>
  );
}

export default App;
