import "./App.css";
import Buttons from "./Components/Buttons.jsx";
import Image from "./Components/Picture.jsx";

// import Header from "./Components/Header.jsx";
import Home from "./Components/Home.jsx";
// import About from "./Components/About.jsx";
// import Education from "./Components/Education.jsx";
// import Experience from "./Components/Experience.jsx";

function App() {
  return (
    <div className="App">
      <header>
        <div className="container">
          <h5>Hello, I'm</h5>
          <h1>Sonia Abbas</h1>
          <h3>Junior FullStack Web Developer</h3>
          <br />
          <br />
          <Home />
          <Buttons />
          <br />
          <br />
          <Image />
          <br />
          <br />
        </div>
      </header>
    </div>
  );
}

export default App;
