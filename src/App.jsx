import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import "./App.css";
import Clients from "./components/Clients/Clients";
import Services from "./components/Services/Services";

function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
        <Header />
        <Hero />
      </div>
      <Clients />
      <Services />
    </div>
  );
}

export default App;
