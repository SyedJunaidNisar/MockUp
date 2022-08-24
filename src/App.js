import "./App.css";
import HeroSection from "./components/HeroSection/HeroSection";
import TeamSection from "./components/TeamSection/TeamSection";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <HeroSection />
      <TeamSection />
      <Footer />
    </div>
  );
}

export default App;
