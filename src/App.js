import React from "react";
import Sign from "./components/Sign";
import Land from "./components/Land";
import Sign_up from "./components/Sign_up";
import { Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";
import Create from "./components/Create";
import './App.css'

function App() {
  return (
    <div style={{ overflowX: "hidden" }}>
      <Routes>
      <Route path="/" element={<Land />} />
        <Route path="/signup" element={<Sign_up />} />
        <Route path="/signin" element={<Sign />} />
        <Route path="/profile" element={<Create />} />
        <Route path="/sign" element={<Signup />} />
      </Routes>      
    </div>
  );
}

export default App;
