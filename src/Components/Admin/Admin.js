import React, { useState, useEffect } from "react";
import View from "./View";
import NewJob from "./NewJob";

function Admin({ jobs, PostFormObjectToServer }) {
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
        <View jobs={jobs} />
      </div>
      <div>
        <button id="fortmButton" onClick={() => setShow(!show)}>
          {btnText}
        </button>
        {show && <NewJob PostFormObjectToServer={PostFormObjectToServer} />}
      </div>
    </div>
  );
}

export default Admin;
