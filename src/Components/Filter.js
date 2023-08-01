import { useContext, useState } from "react";
import { dataContext } from "../data/DataContextProvider";
import "./filter.css";

function Filter() {
  const { careerData } = useContext(dataContext);

  // set initial state of filteredCareers to fetched data
  const [filteredCareers, setFilteredCareers] = useState(careerData);

  function handleFilter(e) {

    //Get filter location selected by the user
    const filterLocation = e.target.value;


    // conditional statement to filter careers based on selected location
    if (filterLocation === "") {
      // If no location is selected, show cards for careers -- no location
      // should be selected by default

      setFilteredCareers(careerData);

    } else {

      // Filter careers based on the selected location
      // .toLowerCase() ensures that capitalization won't lead to mismatch hence no results

      const filtered = careerData.filter(
        (career) => career.location.toLowerCase() === filterLocation.toLowerCase()
      );
      setFilteredCareers(filtered); //update state with filtered data
    }
  }

  return (
    <>
        {/* Filter dropdown JSX */}
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

        {/* Render the filtered career cards. Should be merged with Home component cards */}
        {filteredCareers.map((career) => (
            <div class="max-w-3xl mx-auto" key={career.id}>
                <div class="flex flex-wrap">
                    <div class="w-full p-1">
                    <a
                        class="block p-6 bg-white hover:bg-opacity-50 transform hover:-translate-y-1 rounded-lg transition duration-500"
                        href="#"
                    >
                        <div class="flex flex-wrap items-center justify-between -m-2">
                        <div class="w-auto p-2">
                            <h3 class="mb-1 font-semibold tracking-tight">{career.title}</h3>
                            <p className="text-lg">{career.company}</p>
                            <p className="text-lg">{career.location}</p>
                            <div>
                            <span class="bg-gray-300 mr-3 p-2 roundend-md">Full Time: /</span>
                            <span class="bg-gray-300 mr-3 p-2 roundend-md">Salary: {career.salary}</span>
                            </div>
                        </div>
                        <div class="w-auto p-2">
                            <div class="flex flex-row justify-center">
                            <button class="inline-block mx-auto px-4 py-2 text-white font-semibold tracking-tight bg-indigo-500 hover:bg-indigo-600 rounded-lg focus:ring-4 focus:ring-indigo-300 transition duration-200">
                                Check Details
                            </button>
                            </div>
                        </div>
                        </div>
                    </a>
                    </div>
                </div>
            </div>
        ))}
    </>
  );
}

export default Filter;
