import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Aboutme from "./Components/Aboutme";
import Skills from "./Components/Skills";

function App() {

  return (
    <div>
      <Navbar />
      <Home />
      <Aboutme />
      <Skills/>
    </div>
  );
}

export default App;
