import React, { useEffect } from "react";
import { useContext } from "react";
import { dataContext } from "../../data/DataContextProvider";

function View({
  jobs,
  onClickDetails,
  setIsStatic,
  showRenderOnLoad,
  setShowRenderOnLoad,
}) {
  const { careerDetails, setCareerDetail } = onClickDetails;
  const { deleteFromServer } = useContext(dataContext);

  function handleDetails(career) {
    console.log(career);
    setCareerDetail(career);
    setIsStatic(false);
    setShowRenderOnLoad(!showRenderOnLoad);
  }

  function handelDelete(id) {
    deleteFromServer(id);
  }

  const displayCareerdata = jobs.map((career) => {
    return (
      <div class="max-w-3xl mx-auto">
        <div class="flex flex-wrap ">
          <div class="w-full p-1">
            <a
              class="block p-6 bg-white hover:bg-opacity-50 transform hover:-translate-y-1 rounded-lg transition duration-500"
              href="#"
            >
              <div class="flex flex-wrap items-center justify-between -m-2">
                <div className="w-auto p-2">
                  <h3 className="mb-1 font-semibold tracking-tight">
                    {career.title}
                  </h3>
                  <p className="text-lg">{career.company}</p>
                  <p className="text-lg">{career.location}</p>

                  <div className="mt-3">
                    <span className="bg-gray-300 mr-3 px-2.5 py-1.5 rounded-lg">
                      {career.type}
                    </span>
                    <span className="bg-green-100 mr-3 px-2.5 py-1.5 rounded-lg">
                      {" "}
                      <i class="fa fa-money-bills"></i> $
                      {career.salary.toLocaleString()} per year
                    </span>
                    <button
                      type="button"
                      className="text-gray-900 border border-gray-300 px-2 py-1 rounded-lg"
                    >
                      {career.experience}+ years
                    </button>
                  </div>
                  <p className="pt-4">{career.description}</p>
                </div>

                <div class="w-auto p-2">
                  <div class="grid justify-items-end mt-6">
                    <button
                      onClick={() => handleDetails(career)}
                      class="inline-block  w-40 px-4 py-2 text-white font-semibold tracking-tight bg-blue-500 hover:bg-indigo-600 rounded-lg focus:ring-4 focus:ring-indigo-300 transition duration-200"
                      href="#"
                    >
                      Check Details
                    </button>

                    <button
                      class="inline-block mt-2 w-40 px-4 py-2 text-white font-semibold tracking-tight bg-red-500 hover:bg-indigo-600 rounded-lg focus:ring-4 focus:ring-indigo-300 transition duration-200"
                      href="#"
                      onClick={() => handelDelete(career.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    );
  });

  return (
    <>
      <section class="py-24 lg:pb-36 bg-gray-100 overflow-hidden">
        <div class="container px-4 mx-auto">{displayCareerdata}</div>
      </section>
    </>
  );
}

export default View;
