import React, { useState } from "react";
import "./App.css";
import "./index.css";
//toaster
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
        pauseOnHover
        theme="dark"
      />
      <NavBar />
      <RoutingComponent />
      <Footer />
    </div>
  );
}

export default App;
