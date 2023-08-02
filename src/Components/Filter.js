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

  return (
    <>
      {/* Filter dropdown's JSX */}
      <div className="container d-flex felx-row justify-content-center align-items-center">
        <div className="d-flex filter">
          <h4>Filter by location: </h4>
          <div>
            {/*onChange event to get selected location
               value="" ensures that there is no selected option by default
            */}
            <select onChange={handleFilter}>
              <option value=""></option>
              <option value="nairobi">Nairobi</option>
              <option value="mombasa">Mombasa</option>
              <option value="kisumu">Kisumu</option>
              <option value="nakuru">Nakuru</option>
              <option value="eldoret">Eldoret</option>
              <option value="machakos">Machakos</option>
              <option value="kisii">Kisii</option>
              <option value="nyeri">Nyeri</option>
              <option value="embu">Embu</option>
              <option value="kakamega">Kakamega</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
}

export default Filter;
