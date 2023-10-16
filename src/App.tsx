import HeroCompo from "./components/HeroCompo";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <div className="container mx-auto">
      {/* Navigation Bar */}
      <NavBar />
      {/* Hero Compo */}
      <HeroCompo />
    </div>
  );
};

export default App;
