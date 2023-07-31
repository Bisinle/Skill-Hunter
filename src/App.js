import React from "react";
import "./App.css";
//context
import { useContext, useState } from "react";
import { dataContext } from "./data/DataContextProvider";
//Routes
import { Route, Routes } from "react-router-dom";
//components

import NavBar from "./Components/NavBar";

import RoutingComponent from "./Components/RoutingComponent";

function App() {
  const { careerData, setCareerData } = useContext(dataContext);
  console.log(careerData);
  return (
    <div className="App">
      <NavBar />
      <RoutingComponent />
    </div>
  );
}

export default App;
