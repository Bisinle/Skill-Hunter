import React, { Children, createContext } from "react";
import { useContext, useState, useEffect } from "react";

const dataContext = createContext();
function DataContextProvider({ children }) {
  const [careerData, setCareerData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [newlyPosted, setNewlyPosted] = useState(true);

  useEffect(() => {
    fetch(` https://skill-hunter-server.onrender.com/careers`)
      .then((res) => res.json())
      .then((data) => setCareerData(data))
      .finally(setIsLoading(false));
  }, [newlyPosted]);

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

  const values = {
    careerData,
    setCareerData,
    setIsLoading,
    PostFormObjectToServer,
  };
  return <dataContext.Provider value={values}>{children}</dataContext.Provider>;
}

export default DataContextProvider;
export { dataContext };

//https://skill-hunter-server.onrender.com/careers
