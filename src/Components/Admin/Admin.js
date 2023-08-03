import React, { useState, useEffect, useRef } from "react";
import View from "./View";
import NewJob from "./NewJob";

function Admin({ jobs, PostFormObjectToServer,deleteFromServer }) {
  const [adminJobs, setAdminJobs] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    setAdminJobs(jobs);
  }, []);



  const btnText = show ? "Close Form" : "Post Job";
  return (
    <div className="grid grid-cols-2 justify-center admin">
      <div>
        {" "}
        <View jobs={jobs} deleteFromServer={deleteFromServer} />
      </div>
      <div>
        <button id="fortmButton" onClick={() => setShow(!show)}>
          {btnText}
        </button>
        {show && <NewJob PostFormObjectToServer={PostFormObjectToServer} />}
      </div>
    </div>
  );
  // const [jobs, setJobs] = useState([]);
  // const leftSectionRef = useRef(null);
  // const rightSectionRef = useRef(null);

  // useEffect(() => {
  //   fetch("http://localhost:3000/careers")
  //     .then((r) => r.json())
  //     .then((data) => setJobs(data));

  //   const leftSection = leftSectionRef.current;
  //   const rightSection = rightSectionRef.current;

  //   if (leftSection && rightSection) {
  //     leftSection.addEventListener("scroll", handleLeftScroll);
  //   }

  //   return () => {
  //     if (leftSection) {
  //       leftSection.removeEventListener("scroll", handleLeftScroll);
  //     }
  //   };
  // }, []);

  // const handleLeftScroll = () => {
  //   const rightSection = rightSectionRef.current;
  //   if (rightSection) {
  //     rightSection.style.top = `${leftSectionRef.current.scrollTop}px`;
  //   }
  // };

  // return (
  //   <div className="grid grid-cols-2 justify-center">
  //     <div ref={leftSectionRef} style={{ overflowY: "auto", height: "82vh" }}>
  //       <View jobs={jobs} />
  //     </div>
  //     <div>
  //       <NewJob />
  //     </div>
  //   </div>

  //   //right section scroll - remove the height property: ref={rightSectionRef} style={{ overflowY: "auto", height: "500px" }}
}

export default Admin;
