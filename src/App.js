import AboutMe from "./components/AboutMe";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";

const getMainComponent = (page) => {
  if (page === "Portfolio") {
    return <Portfolio />;
  } else if (page === "AboutMe") {
    return <AboutMe />;
  }
  return <Resume />;
};

function App() {
  const currentPage = "AboutMe";

  return (
    <div className="flex flex-col">
      <Navbar />
      {getMainComponent(currentPage)}
    </div>
  );
}

export default App;
