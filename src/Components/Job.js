import React, { useContext } from 'react'
import { dataContext } from '../data/DataContextProvider'

function Job() {
  const { careerData } = useContext(dataContext)


  function toggleText() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var button = document.getElementById("button");

    if (dots.classList.contains("hidden")) {
        // Show the dots
        dots.classList.remove("hidden");

        // Hide the more text
        moreText.classList.add("hidden");

        // change text of the button
        button.innerHTML = "Read more";
    } else {
        // Hide the dots
        dots.classList.add("hidden");

        // hide the more text
        moreText.classList.remove("hidden");

        // change text of the button
        button.innerHTML = "Read less";
    }
}
  
  const displayCareerData = () => {



    return careerData.map((career) => {

      // const det = career.details
      // det.splice()
      return (
        <div className="border p-6 max-w-2xl rounded-lg space-y-5 m-2">
          <div>
              <h4 className="hover:underline font-bold text-xl">{career.title}</h4>
              <p className="text-lg">{career.company}</p>
              <p className="text-lg">{career.location}</p>
              <div class="p-5 bg-amber-200">
        <h1 class="mb-3 text-4xl font-light">Welcome to KindaCode.com</h1>

       
        <p>{career.details}

         
            <span id="dots">...</span>

            
            <span id="more" class="hidden">{career.description}
                </span>
        </p>

        <button onClick={toggleText} id="button"
            class="mt-3 px-5 py-2 bg-rose-500 text-white duration-300 hover:bg-rose-700">Read
            more</button>
    </div>

   
     
  
          </div>

          <div>
              <span className="bg-gray-300 mr-3 p-2 rounded-md">$1900</span>
              <span className="bg-gray-300 mr-3 p-2 rounded-md">Full-Time</span>
          </div>

          <div>
              <p className="font-light mt-8">Acts Conscientiously: Demonstrates concern for quality, product integrity, and safety of one’s own and others’ work and impact to the stores.</p>
          </div>
      </div>
      )
    })
  }

  return (
    <div className="flex flex-col items-center">
      {displayCareerData()}
    </div>
  )
}

export default Job
