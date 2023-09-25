import React from "react";
import { Routes, Route } from "react-router-dom";
import Nav from './components/Nav'
import Home from "./components/Home";
import Biography from "./components/Biography";
import Statistics from "./components/Statistics";

function App() {
    return(
        <div id="main-section">
        <nav>
          <Nav/>
        </nav>
        <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/biography" element={<Biography/>}/>
          <Route path="/statistics" element={<Statistics/>}/>
        </Routes>
      </div>
    )
}

export default App;
