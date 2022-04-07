import AboutMe from "./components/AboutMe";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";

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
