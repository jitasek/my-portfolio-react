import AboutMe from "./components/AboutMeOld";
import Navbar from "./components/NavbarOld";
import Portfolio from "./components/PortfolioOld";
import Contact from "./components/ContactOld";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/FooterOld";

function App() {
  return (
    <div>
      {/* Using routes instead of conditional rendering */}
      <Navbar />
      <Routes>
        <Route path="/aboutme" element={<AboutMe />}></Route>
        <Route path="/portfolio" element={<Portfolio />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="*" element={<AboutMe />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
