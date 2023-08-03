// import React from "react";

// function About() {
//   return (
//     <div className="about-us">
//       <h1>
//         About Us
//       </h1>
//       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam similique autem non eius magni. Mollitia non qui, excepturi laborum nulla omnis voluptate labore facere magni error est minus assumenda repudiandae! Similique magnam maxime itaque nesciunt sunt sapiente sint doloremque iste minima, cupiditate enim necessitatibus nemo aperiam pariatur error nihil natus.
    
//       </p>
//     </div>
//   )

// }

// export default About;
// src/components/About.js
import React, { useState } from "react";
import "./About.css";

const About = () => {
  const tabs = ["Mission", "Vision", "Achievements"];
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="about">
      <div className="row">
        <div className="column">
        <img
            className="about-img"
            src={require("./Images/img.png") }
            alt=""
          />
          {/* <div className="about-img"></div> */}
        </div>

        <div className="column">
          <div className="tabs">
            {tabs.map((tab) => (
              <div
                key={tab}
                className={`single-tab ${activeTab === tab ? "active" : ""}`}
                onClick={() => handleTabClick(tab)}
              >
                <h2>{tab}</h2>
              </div>
            ))}
          </div>

          <div className="tab-content">
            {/* About Content */}
            {activeTab === "Mission" && (
              <div className="content">
                <h2>Mission</h2>
                <p>
                Skill Hunter empowers careers globally, connecting talent with opportunities. We revolutionize job searches through innovation and personalized support, fostering diversity and professional growth. Our mission is to celebrate individual talents, enabling everyone to unlock their full potential and find success in their dream careers. Together, we shape a future where possibilities are limitless.
                </p>
            
              </div>
            )}

            {/* Skills Content */}
            {activeTab === "Vision" && (
              <div className="content">
                <h2>Vision</h2>
                <p>
                Empowering global careers. Skill Hunter envisions a future where talents are recognized, opportunities abound, and individuals thrive in fulfilling and meaningful careers.

                </p>
              </div>
            )}

            {/* Experiences Content */}
            {activeTab === "Achievements" && (
              <div className="content">
                <h2>Achievements</h2>
                <p>
                <p>1. Skill Hunter has connected thousands of job seekers with their dream opportunities across various industries.</p>
               <p> 2. Our innovative platform has received accolades for its user-friendly interface and personalized job search experience.</p>
               <p> 3. Skill Hunter's commitment to diversity and inclusion has resulted in a diverse and vibrant community of talented individuals.</p>
               <p> 4. We take pride in empowering countless individuals to unlock their potential and advance their careers on a global scale. </p>
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

