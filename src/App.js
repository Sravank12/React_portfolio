import Home from "./components/Home";
import NavBar from "./components/NavBar";
import SaocialLinks from "./components/SaocialLinks";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
function App() {
  return (
    <div>
    <NavBar />
    <Home />
    <SaocialLinks/>
    <About />
    <Portfolio />
    <Experience />
    <Contact />
    </div>
  )
}

export default App