import React from "react";
import { useContext, useState } from "react";
import { dataContext } from "../data/DataContextProvider";
import Card from "./Card";
import { Route, Routes } from "react-router-dom";
import CareerDetails from "./CareerDetails";

function Home() {
  // const [jobs, setJobs] = useState(carr)
  const { careerData, setCareerData } = useContext(dataContext);
  const [isDisplayed, setIsDisplayed] = useState(false);
  const [careerId, setCareerId] = useState();

  function getCareerIdFromCard(id) {
    // console.log(id);
    setCareerId(id);
  }
  const displayCareerdata = careerData.map((career) => {
    return (
      <span key={career.id}>
        {" "}
        <Card onButtonClick={getCareerIdFromCard} career={career} />
      </span>
    );
  });

  // console.log(displayCareerdata);
  return (
    <>
      <div>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>

        <div className="grid grid-cols-2 justify-center">
          <div>
            <section class="py-24 lg:pb-36 bg-gray-100 overflow-hidden">
              <div class="container px-4 mx-auto">{displayCareerdata}</div>
            </section>
          </div>

          <div className="max-w-1xl px-4 py-4 mx-auto ">
            <CareerDetails careerData={careerData} careerId={careerId} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
