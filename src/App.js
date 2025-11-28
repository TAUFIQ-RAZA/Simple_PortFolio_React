
import "./App.css";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/Home" element={<Home />} />

          <Route path="/About" element={<About />} />

          <Route path="/Skills" element={<Skills />} />

          <Route path="/Projects" element={<Projects />} />

         <Route path="/Education" element={<Education />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
