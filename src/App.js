import "./App.css";
import Navbar from "./layout/Navbar";
import Skills from "./pages/Skills";
import Home from "./pages/Home";
import "aos/dist/aos.css";
import aos from "aos";
import React from "react";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
function App() {
  React.useEffect(() => {
    aos.init(3000);
  }, []);
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Skills />
      <Projects />
      <About />
      <Contact />
    </div>
  );
}

export default App;
