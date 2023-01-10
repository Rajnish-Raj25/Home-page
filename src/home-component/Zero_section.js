import React from "react";
import Vector from "../images/Vector.png";
import "./Zero_section.css";

// import "./Zero_section.css";

const Zero_section = () => {
  return (
    <div className="Zero_section">
      <div className="row mt-5">
        <div className="col-lg-1"></div>
        <div className="col-10 text">
          <p className="para">
            <span className="background">Upskill </span>with Futurense
            <span className="bacg"> at </span>
            <span className="background">ZERO cost</span>and get deployed with
            Fortune 500 companies..
          </p>
        </div>

        <div className="col-lg-1"></div>
      </div>
      <div className="row mt-3">
        <div className="col-lg-1"></div>
        <div className="col-lg-10 background_video">
          <img src={Vector} alt="" />
        </div>
        <div className="col-lg-1"></div>
      </div>
    </div>
  );
};

export default Zero_section;
