import "./App.css";
import Buttons from "./Components/Buttons.jsx";
import Image from "./Components/Picture.jsx";

// import Header from "./Components/Header.jsx";
import Home from "./Components/Home.jsx";
import Nav from "./Components/Nav.jsx";
import Education from "./Components/Education.jsx";
// import Experience from "./Components/Experience.jsx";

function App() {
  return (
    <div className="App">
      <br />
      <header>
        <Home />
        <h4>Hello, I'm</h4>
        <h1>Sonia Abbas</h1>
        <h3>Junior FullStack Web Developer</h3>
        <Image />
        <br />
        <Nav />
        <br />
        <Education />
        <br />
        <Buttons />
        <br />
        <br />

        <br />
      </header>
    </div>
  );
}

export default App;
