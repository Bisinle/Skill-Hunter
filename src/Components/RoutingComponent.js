import React from "react";
import { useContext, useState } from "react";
import { dataContext } from "../data/DataContextProvider";
//Routes
import { Route, Routes } from "react-router-dom";
//components
import Home from "../Components/Home";
import NavBar from "../Components/NavBar";
import About from "../Components/About";
import Help from "./help/Help";
import Careers from "./careers/Careers";
import Faq from "./help/Faq";
import ContactUs from "./help/ContactUs";
import CareerDetails from "./careers/CareerDetails";
import CareerLayout from "./careers/CareerLayout";
import CareerNotFound from "./careers/CareerNotFound";

 function RoutingComponent() {
//   const [careerIdState, setCareerIdState] = useState()
//   function getIdFromCareers(id){
//     console.log(id);
//     setCareerIdState(id)
//   }
  return (
    <Routes>
      <Route index element={<Home />} />


      <Route 
      path="/careers" element={<CareerLayout />} errorElement={<CareerNotFound />}  >
        <Route index element={<Careers  />} />
        <Route  path="careers/:id"  element={<CareerDetails />} 
        />
      </Route>

      <Route path="about" element={<About />} />
        <Route path="help" element={<Help />} >
          <Route path="faq" element={<Faq/>}/>
          <Route path="contact" element={<ContactUs/>}/>
        </Route>
    </Routes>
  );
}

export default RoutingComponent;
