import logo from "./logo.svg";
import "./App.css";
import "./index.css";

import Navbar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";

function App() {
  return (
    <>
      <Navbar />
      <div>
        <Home />
      </div>

      <div>
        <About/>
      </div>
    </>
  );
}

export default App;
