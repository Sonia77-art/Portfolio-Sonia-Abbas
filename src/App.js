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
        <br />
        <br />
        <div className="Headings">
          <div id="flex">
            <Image className="Image" />
          </div>
          <br />
          <h6 className="First">Hello, I'm</h6>
          <h2 className="second">Sonia Abbas</h2>
          <h3 className="Third">Junior Full Stack Web Developer</h3>
          <br />
          <Buttons />
          <br />
          <Nav />
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
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
