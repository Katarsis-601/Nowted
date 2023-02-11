import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import Preview from "./components/Preview";
import Elipse_1 from "./assets/Ellipse 1.png";
import Elipse_2 from "./assets/Ellipse 2.png";
function App() {
  return (
    <div className="App">
      <img src={Elipse_2} alt="" className="bg-1" />
      <img src={Elipse_1} alt="" className="bg-2" />
      <NavBar />
      <Banner />
      <Preview />
    </div>
  );
}

export default App;
