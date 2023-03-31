import React from "react";
import "./Browse.scss";

const Browse = () => {
  const jobs = [
    "curious",
    "Podcaster",
    "FrontEnd developer",
    "JS Master",
    "Manager",
    "Product Manager",
    "Bold",
    "Web3",
    "Fase paced",
    "Backend Developer",
    "Collabrating",
    "Marketer",
    "designer",
    "Ui/Ux Designer",
    "Customer Support",
  ];
  return (
    <div className="browse">
      <div className="wrapper container">
        <h2>Browse job</h2>
        <div className="job">
          {jobs.map((job, idx) => (
            <span key={idx}> {job}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Browse;
