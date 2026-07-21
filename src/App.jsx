import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToHash from "./components/ScrollToHash";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Timeline from "./components/sections/Timeline";
import Credentials from "./components/sections/Credentials";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";

import ProjectDetails from "./pages/ProjectDetails";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Timeline />
      <Credentials />
      <Projects />
      <Contact />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>

  <ScrollToHash />

  <Navbar />

  <Routes>

    <Route path="/" element={<Home />} />

    <Route
      path="/project/:slug"
      element={<ProjectDetails />}
    />

  </Routes>

  <Footer />

</BrowserRouter>
  );
}

export default App;