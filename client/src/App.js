import React from "react";
import { Route, Routes } from 'react-router-dom'
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Singup from "./Pages/Singup";
function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/userHome" element={<Home />} />
        <Route path="/singup" element={<Singup />} />
      </Routes>
    </div>
  );
}

export default App;
