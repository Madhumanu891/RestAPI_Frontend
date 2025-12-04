import React from "react";
import Nav from "./component/Nav";
import Login from "./component/Login";
import Register from "./component/Register";
import Allprofiles from "./component/Allprofiles";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="mx-auto flex flex-col">
      <Nav />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Allprofiles />} />
      </Routes>
    </div>
  );
};

export default App;
