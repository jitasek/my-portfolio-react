import AboutMe from "./components/AboutMe";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";

function App() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <Portfolio />
      <AboutMe />
      <Resume />
    </div>
  );
}

export default App;
