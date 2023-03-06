import React from "react";

import AppBar from "./AppBar";
import Dashboard from "./Dashboard";
import Login from "./Login";
import RegisterUser from "./RegisterUser";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
      
        <Routes>
          <Route exact path="/" element={<AppBar />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/dashboard" element={<Dashboard />}></Route>
          <Route exact path="/Register" element={<RegisterUser />}></Route>
        </Routes>
      </BrowserRouter>
      {/* <Dashboard/> */}
      {/* <RegisterUser/> */}
      {/* <Login/> */}
      
    </div>
  );
};

export default App;
