import React, { Fragment } from "react";
import { Route, Routes } from 'react-router-dom'
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Singup from "./Pages/Singup";
import Admin from './Pages/AdminLogin';
import AdminHome from "./Pages/AdminHome";
function App() {
  return (
    <Fragment>
      <div className="App">

        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/userHome" element={<Home />} />
          <Route path="/singup" element={<Singup />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/adminHome" element={<AdminHome />} />
        </Routes>
      </div>
    </Fragment>
  );
}

export default App;
