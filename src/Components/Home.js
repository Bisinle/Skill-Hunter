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

  // State to hold the search term
  const [searchTerm, setSearchTerm] = useState("")
  // Function to update the search term
  function handleSearch(event) {
    setSearchTerm(event.target.value)
  }
  // Filter the careerData based on the search term
  const searchedData = careerData.filter((career) =>
    career.title.toLowerCase().includes(searchTerm.toLowerCase())
  );


  function getCareerIdFromCard(id) {
    // console.log(id);
    setCareerId(id);
  }
  //changed from careerData to searchedData
  // const displayCareerdata = careerData.map((career) => {
  const displayCareerdata = searchedData.map((career) => {
    return (
      <span key={career.id}>
        {" "}
        <Card onButtonClick={getCareerIdFromCard} career={career} />
      </span>
    );
  });

  console.log(displayCareerdata);
  return (
    <>
      <div>
        <div className="grid grid-cols-2 justify-center">
          <div>
            <section class="py-px lg:pb-18 mb-1 bg-gray-100 overflow-hidden">
              <div class="container px-4 mx-auto">
                {/* {displayCareerdata} */}

       {/* Form input for getting the search term */}
              <form>   
                 <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                 <div class="relative">
                    <input type="search" id="default-search" value={searchTerm} onChange={handleSearch} class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Job Title"/>
                </div>
              </form>
        {/* Render the filtered careers */}
              {displayCareerdata.length === 0 ? (
                <p className="text-red-600">No Result Found</p>
                ) : (
                  displayCareerdata)}


              </div>
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
