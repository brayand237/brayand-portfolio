import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Timeline from "./components/sections/Timeline";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import Credentials from "./components/sections/Credentials";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Timeline />
      <Credentials />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;