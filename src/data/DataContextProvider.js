import React, { Children, createContext } from "react";
import { useContext, useState, useEffect } from "react";

const dataContext = createContext();
function DataContextProvider({ children }) {
  const [careerData, setCareerData] = useState([]);
  const [faqData, setFaqData] = useState([])
  const [isLoading, setIsLoading] = useState(true);
  const [newlyPosted ,setNewlyPosted] =useState(false)
  // const [deletedJobs,setDeletedJobs]=useState()
  const [isDeleted,setIsDeleted]=useState([])

  useEffect(() => {
    fetch(`https://skill-hunter-server.onrender.com/careers`)
      .then((res) => res.json())
      .then((data) => setCareerData(data))
      .finally(setIsLoading(false));

    fetch(`https://skill-hunter-server.onrender.com/faq`)
      .then((res) => res.json())
      .then((data) => setFaqData(data))
      .finally(setIsLoading(false));
  }, [newlyPosted,isDeleted]);
  function PostFormObjectToServer(newFormObject) {
    console.log(newFormObject);
    setNewlyPosted(!newlyPosted);
    fetch(` https://skill-hunter-server.onrender.com/careers`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newFormObject),
    });
    // .then((res) => res.json())
    // .then((data) => (data));
  }
  function deleteFromServer(deleteId){
    console.log(deleteId)
  
      fetch(`https://skill-hunter-server.onrender.com/careers/${deleteId}`,{
        method:"DELETE",
        headers:
        {"content-type":"application/json"},
      })
      .then(res=>res.json())
      .then((data)=>{
      
      })
     .finally(setIsDeleted(true))
    
  }

  const values = {
    careerData,
    setCareerData,
    setIsLoading,
    PostFormObjectToServer,
    deleteFromServer,
    faqData,
    setFaqData
  };
  return <dataContext.Provider value={values}>{children}</dataContext.Provider>;
}

export default DataContextProvider;
export { dataContext };

//https://skill-hunter-server.onrender.com/careers
//http://localhost:3000/careers
