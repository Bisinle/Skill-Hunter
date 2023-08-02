import React from "react";
import { useContext, useState, useEffect } from "react";
import { dataContext } from "../data/DataContextProvider";
import Card from "./Card";
import { Route, Routes } from "react-router-dom";
import CareerDetails from "./CareerDetails";
import Filter from "./Filter";

function Home() {
  const { careerData, setCareerData } = useContext(dataContext);
  const [isDisplayed, setIsDisplayed] = useState(false);
  const [careerId, setCareerId] = useState();

   // State to store the selected location from the filter dropdown
  const [selectedLocation, setSelectedLocation] = useState("");

  // State to store the filtered data based on both search term and location
  const [filteredData, setFilteredData] = useState([]);


  // State to hold the search term
  const [searchTerm, setSearchTerm] = useState("")

  // Function to update the search term
  function handleSearch(event) {
    setSearchTerm(event.target.value)
  }

  // Houstin's original code, merged with mine in useEffect
  // Filter the careerData based on the search term
  // const searchedData = careerData.filter((career) =>
  //   career.title.toLowerCase().includes(searchTerm.toLowerCase())
  // );

  // Function to update the selected location based on filter dropdown selection
  function handleLocationFilter(filterLocation) {
    setSelectedLocation(filterLocation);
  }


  // Update the filteredData when careerData, searchTerm, or selectedLocation changes
  
  useEffect(() => {

    // Filter the careerData based on the search term
    const searchedData = careerData.filter((career) =>
    career.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    //set filteredData to searchedData: no location is selected in this case
    let filteredData = searchedData;

    // If a location is selected, further filter based on location
    if (selectedLocation) {
      filteredData = searchedData.filter(
        (career) => career.location.toLowerCase() === selectedLocation.toLocaleLowerCase()
      )
    }

    // Update the filteredData state with the result; search term, location selected, or both
    setFilteredData (filteredData)


  }, [careerData, searchTerm, selectedLocation])


  function getCareerIdFromCard(id) {
    // console.log(id);
    setCareerId(id);
  }

  // Function to handle the filter change and update filteredData
  function handleFilterChange (filteredCareers) {
    setFilteredData (filteredCareers)
  }

  // Create JSX for displaying career cards based on the filteredData
  const displayCareerdata = filteredData.map((career) => {
    return (
      <span key={career.id}>
        {" "}
        <Card onButtonClick={getCareerIdFromCard} career={career} />
      </span>
    );
  });


  return (
    <>
    {/* <Filter onFilter={handleFilterChange} onLocationFilter={handleLocationFilter}/> */}
      <div>
        <div className="grid grid-cols-2 justify-center">
          <div>
            <section className="py-px lg:pb-18 mb-1 bg-gray-100 overflow-hidden">
              <div className="container px-4 mx-auto">

                {/* Search bar and filter dropdown */}
                <div className="relative flex max-w-3xl mb-5 mt-5 mx-auto">
                  <input
                    type="text"
                    id="default-search"
                    value={searchTerm}
                    onChange={handleSearch}
                    placeholder="Search"
                    className="w-full px-4 py-2.5 pl-10 text-sm text-gray-800 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                  />
                  <Filter onFilter={handleFilterChange} onLocationFilter={handleLocationFilter} />
                </div>

                {/* Render the filtered careers */}
                {displayCareerdata.length === 0 ? (
                  <p className="text-red-600">No Result Found</p>
                  ) : (
                    displayCareerdata
                )}

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
