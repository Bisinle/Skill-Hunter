import React from "react";
import { useContext, useState } from "react";
import { dataContext } from "../data/DataContextProvider";



function Home() {
  // const [jobs, setJobs] = useState(carr)
  const { careerData, setCareerData } = useContext(dataContext);

// State to hold the search term entered by the user
const [searchTerm, setSearchTerm] = useState("")
// Filter the 'careerData' and return titles that match the 'searchTerm'
const searchedData = careerData.filter((career) =>
career.title.toLowerCase().includes(searchTerm.toLowerCase())
)
// Function to handle changes in the search input and update the 'searchTerm'
function handleSearch(event) {
  setSearchTerm(event.target.value);
}

 const displayCareerdata=  searchedData.map((career)=>{


  return (
    <>

<div class="max-w-3xl mx-auto">
      <div class="flex flex-wrap ">
        <div class="w-full p-1">
          <a class="block p-6 bg-white hover:bg-opacity-50 transform hover:-translate-y-1 rounded-lg transition duration-500" href="#">
            <div class="flex flex-wrap items-center justify-between -m-2">
              <div class="w-auto p-2">
                <h3 class="mb-1 font-semibold tracking-tight">{career.title}</h3>
                <p className="text-lg">{career.company}</p>
                <p className="text-lg">{career.location}</p>


          <div>
          <span class="bg-gray-300 mr-3 p-2 roundend-md">Full Time: {} /</span>
          <span class="bg-gray-300 mr-3 p-2 roundend-md"> Salary: {career.salary}</span>
          </div>
                
              </div>
              <div class="w-auto p-2">
                <div class="flex flex-row justify-center">
                  <button class="inline-block mx-auto px-4 py-2 text-white font-semibold tracking-tight bg-indigo-500 hover:bg-indigo-600 rounded-lg focus:ring-4 focus:ring-indigo-300 transition duration-200" href="#">Check Details</button>
                </div>
              </div>
            </div>
          </a>
        </div>
      
     
      </div>
    </div>
    </>
  )})
  
 

  
    
      
   
  return (

    <>
    <div>
        <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>

    <div className='grid grid-cols-2 justify-center'>
<div>
<section class="py-10 lg:pb-20 bg-gray-100 overflow-hidden">
  <div class="container px-4 mx-auto">
     {/* Form input for getting the 'searchTerm' */}
    <form>
        <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
         <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
              </div>
                  <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="  Search Job" value={searchTerm} onChange={handleSearch} required />
              </div>
    </form>

      {/* Condition to display the searched careerData that matches the searchTerm, or display "No Result Found" if there are no matches */}
      {searchedData.length === 0 ? (
                  <p className="text-red-600">No Result Found</p>
                ) : (displayCareerdata)}
 
</div>
</section>
</div>


<div>
<div className='max-w-1xl px-4 py-4 mx-auto '>
   <div class="max-w-2xl px-8 mt-4 py-4 mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800" >
     <div class="flex items-center justify-between">
      <span class="text-sm font-light text-gray-600 dark:text-gray-400">Jan 15, 2022</span> 
       <a class="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-200 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500">JavaScript</a>
     </div> 
  <div class="mt-2">
    <a href="https://stackdiary.com/" class="text-2xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline">How to sanitiz array() in JS</a> 
    <p class="mt-2 text-gray-600 dark:text-gray-300">Dui urna vehicula tincidunt pretium consequat luctus mi, platea fermentum conubia tempus ac orci. Pellentesque dictum malesuada cubilia faucibus dignissim mi nascetur senectus, augue ad libero efficitur dolor duis lobortis, non etiam sociosqu.</p>
  </div> 
  <div class="flex items-center justify-between mt-4">

  <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Apply</button>
<button type="button" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Save</button>
<a href="#" class="text-blue-600 dark:text-blue-400 hover:underline">Read more ⟶</a> 
    <div class="flex items-center">
      <img src="https://stackdiary.com/140x100.png" alt="Author Photo" class="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block" /> 
      <a class="font-bold text-gray-700 cursor-pointer dark:text-gray-200">John Doe</a>
    </div>
  </div>
  
</div>
<div className='max-w-2xl px-8 mt-4 text-left py-4 mx-auto'>
<p>Since its founding over 80 years ago, Krispy Kreme’s focus has remained the same - making fresh, premium quality doughnuts inspired by their founder’s original recipe. The brand’s iconic Hot Light lets guests know when doughnuts are being made fresh in shop so they can enjoy hot doughnuts fresh off the line. To make Krispy Kreme’s in-shop experience even sweeter, many shops across the globe feature the brands one-of-a-kind doughnut theatre, an immersive, interactive experience through which guests can see Krispy Kreme’s melt-in-your-mouth doughnuts being made right before their eyes.
   To be successful in this role, you should be well-organized, have exceptional time management skills, discretion, and be able to act without guidance.</p>

<p></p>



</div>


</div>

</div>

     </div>
    </div>
    </>
  );
}

export default Home;
