import { useContext, useState } from "react";
import { dataContext } from "../data/DataContextProvider";
import "./filter.css";

function Filter({ onFilter, onLocationFilter }) {
  const { careerData } = useContext(dataContext);

  function handleFilter(e) {
    const filterLocation = e.target.value;
    onLocationFilter(filterLocation);
    onFilter(filterData(filterLocation));
  }

  function filterData(filterLocation) {
    if (!filterLocation) {
      // If no location is selected, return all cards
      return careerData;
    } else {
      // Filter careers based on the selected location
      return careerData.filter(
        (career) => career.location.toLowerCase() === filterLocation.toLowerCase()
      );
    }
  }

  //making the location for filtering dynamic
  const locations = [
    "Nairobi",
    "Mombasa",
    "Kisumu",
    "Nakuru",
    "Eldoret",
    "Machakos",
    "Kisii",
    "Nyeri",
    "Embu",
    "Kakamega",
  ];

  return (
    <>
      {/* Filter dropdown's JSX */}
      <div className="container d-flex felx-row justify-content-center align-items-center">
        <div className="d-flex filter">
          <h4>Filter: </h4>
          <div>
            {/*onChange event to get selected location
               value="" ensures that there is no selected option by default
            */}
            <select
              onChange={handleFilter}
              className="text-sm text-gray-800 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
            >
              <option value="">Filter by location:</option>
              {locations.map((location) => (
                <option key={location} value={location}>
                  {location}
                </option>
              ))}
            </select>

          </div>
          
        </div>
      </div>
    </>
  );
}

export default Filter;
