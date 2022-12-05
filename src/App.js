import "./App.css";
import Buttons from "./Components/Buttons.jsx";
import Image from "./Components/Picture.jsx";
import Projects from "./Components/Projects.jsx";

// import Header from "./Components/Header.jsx";
import Home from "./Components/Home.jsx";
import Nav from "./Components/Nav.jsx";
import Education from "./Components/Education.jsx";
import Social from "./Components/Social";
// import Experience from "./Components/Experience.jsx";

function App() {
  return (
    <div className="App">
      <header>
        <Home />
        <h4>Hello, I'm</h4>
        <h1>Sonia Abbas</h1>
        <h3>Junior FullStack Web Developer</h3>
        <Buttons />
        <br />
        <Image />
        <br />
        <Nav />
        <br />

        <br />
        <div id="flex">
          <Social />
          <Education />
          <Projects />
        </div>
        <br />
      </header>
    </div>
  );
}

export default App;
