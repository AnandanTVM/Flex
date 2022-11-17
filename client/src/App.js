import React, { Fragment } from "react";
import { Route, Routes } from 'react-router-dom'
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Singup from "./Pages/Singup";
import Admin from './Pages/AdminLogin';
import AdminHome from "./Pages/AdminHome";
import AdminUserinfo from "./Pages/AdminUserinfo";
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
          <Route path="/userinfo" element={<AdminUserinfo />} />
        </Routes>
      </div>
    </Fragment>
  );
}

export default App;
