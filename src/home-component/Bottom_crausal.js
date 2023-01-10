import React from "react";
import "./Bottom_crausal.css";
import CrausalComp from "./CrausalComp";

const Bottom_crausal = () => {
  return (
    <div className="bottom_crausal mt-5">
      <div className="row d-none d-lg-block">
        <div className="col-lg-1"></div>
        <div className="col-lg-10 ">
          <p className="bottom_para">
            <span className="looking">Looking</span> for the right{" "}
            <span className="tech_talent looking"> tech talent</span> to scale
            your business?
          </p>
        </div>
        <div className="col-lg-1"></div>
      </div>
      <div className="row mt-5">
        <div className="col-lg-1"></div>
        <div className="col-lg-10">
          <div className="row">
            {/* for large screen  */}
            <div className="col-lg-8 d-none d-lg-block">
              <p className="paragraph">
                <span className="bottom">100</span> Job postings.. <br />{" "}
                <span className="bottom">1000s</span> of interviews.. <br />
                <span className="bottom">Months long</span> hiring process..
              </p>
              <div className="row mt-5">
                <p className="Why">
                  And still not getting the right tech talent!
                  <span className="why1">Why?</span>
                </p>
              </div>
            </div>
            <div className="col-lg-4 d-none d-lg-block">
              <CrausalComp />
            </div>

            {/* for mobile screen  */}
            <div className="col-12 d-block d-lg-none mt-5">
              <div className="row">
                <div className="col-12 bottom_background">
                  <p>
                    Looking for the right tech talent to scale your business?
                  </p>
                </div>
                {/* <div className="col-1"></div> */}
              </div>
              <div className="row mt-4">
                <div className="col-1"></div>
                <div className="col-10">
                  <div className="row">
                    <div className="col-4">
                      <h1 className="India">India</h1>
                    </div>
                    <div className="col-8">
                      <p className="lineUp">
                        brings out <span className="styletext">15 lakh</span>{" "}
                        engineering graduates every year & <br />
                        has the <span className="styletext">2nd </span> largest
                        english speaking population
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-1"></div>
              </div>
            </div>
            <div className="col-12 d-block d-lg-none">
              <div className="row">
                <div className="col-1"></div>
                <div className="col-11 text_col">
                  <p className="crausal_text">
                    Yet thousands of vacancies in tech roles!{" "}
                    <span className="why"> Why ?</span>
                  </p>
                </div>
                {/* <div className="col-1"></div> */}
              </div>
            </div>
            <div className="col-12 d-block d-lg-none">
              <div className="row">
                <div className="col-1"></div>
                <div className="col-10 crosl">
                  <CrausalComp />
                </div>
                <div className="col-1"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-1"></div>
      </div>
    </div>
  );
};

export default Bottom_crausal;
