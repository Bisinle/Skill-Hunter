import React from "react";
import { useContext, useState } from "react";
import { dataContext } from "../data/DataContextProvider";
//Routes
import { Route, Routes } from "react-router-dom";
//components
import Home from "../Components/Home";
import NavBar from "../Components/NavBar";
import About from "../Components/About";
import Help from "../Components/Help";
import Careers from "../Components/Careers";

function RoutingComponent() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="careers" element={<Careers />} />
      <Route path="about" element={<About />} />
      <Route path="help" element={<Help />} />
    </Routes>
  );
}

export default RoutingComponent;
