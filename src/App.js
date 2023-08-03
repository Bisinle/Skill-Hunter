import React from "react";
import "./App.css";
import "./index.css";
//context
import { useContext } from "react";
import { dataContext } from "./data/DataContextProvider";
//Routes
import { Route, Routes } from "react-router-dom";
//components
import NavBar from "./Components/NavBar";
import "./Components/Navbar.css";
import Help from "./Components/help/Help";

import RoutingComponent from "./Components/RoutingComponent";
import Footer from "./Components/Footer";
function App() {
  const { careerData, setCareerData } = useContext(dataContext);
  // console.log(careerData);
  return (
    <div className="App">
      <NavBar />
      <RoutingComponent />
      <Footer />

    </div>
  );
}

export default App;
