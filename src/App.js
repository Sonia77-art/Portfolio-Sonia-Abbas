import "./App.css";
import Buttons from "./Components/Buttons.jsx";
import Image from "./Components/Picture.jsx";

// import Header from "./Components/Header.jsx";
import Home from "./Components/Home.jsx";
// import About from "./Components/About.jsx";
import Education from "./Components/Education.jsx";
// import Experience from "./Components/Experience.jsx";

function App() {
  return (
    <div className="App">
      <header>
        <h4>Hello, I'm</h4>
        <h1>Sonia Abbas</h1>
        <h3>Junior FullStack Web Developer</h3>
        <Image />
        <br />
        <Education />
        <br />
        <Buttons />
        <br />
        <br />
        <Home />
        <br />
      </header>
    </div>
  );
}

export default App;
