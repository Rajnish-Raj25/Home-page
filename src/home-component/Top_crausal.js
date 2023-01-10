import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import CrausalComp from "./CrausalComp";
import "./Top_crausal.css";

const Top_crausal = () => {
  const [textArray, setTextArray] = useState([
    "brings out 15 lakh engineering graduates every year &",
    "has the 2nd largest english speaking population",
  ]);
  const [temp, setTemp] = useState(
    "brings out 15 lakh engineering graduates every year &"
  );
  // const [textTime, setTextTime] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      if (temp == textArray[0]) {
        setTemp(textArray[1]);
      } else {
        setTemp(textArray[0]);
      }
    }, 2000);

    // const interval = setInterval(() => {
    //   console.log("This will run every second!");
    //   setTextTime(!textTime);
    // }, 5000);
    // return () => clearInterval(interval);
  }, [temp]);
  // brings out 15 lakh engineering graduates every year &
  // has the 2nd largest english speaking population
  let splittemp = temp.split(" ");
  return (
    <div className="top_crausal">
      <div className="row mt-5">
        <div className="col-lg-1"></div>
        <div className="col-lg-10">
          <div className="row">
            {/* for large screen  */}
            <div
              className="col-lg-8 d-none d-lg-block"
              style={{ border: "1px solid red" }}
            >
              <h1 className="India">India</h1>
              <h3 style={{ color: "#FBF9F9" }}>
                brings out <span style={{ color: "#FDBA2F" }}>15 lakh</span>{" "}
                engineering graduates every year & <br />
                has the <span style={{ color: "#FDBA2F" }}>2nd</span> largest
                english speaking population
              </h3>
              <h3 className="mt-5" style={{ color: "#FBF9F9" }}>
                Yet thousands of vacancies in tech roles!{" "}
                <span style={{ color: "#FDBA2F" }}>Why ?</span>
              </h3>
            </div>
            <div className="col-lg-4 d-none d-lg-block">
              <CrausalComp />
            </div>

            {/* for mobile screen  */}
            <div className="col-12 d-block d-lg-none mt-5">
              <div className="row">
                <div className="col-1"></div>
                <div className="col-10">
                  <div className="row">
                    <div className="col-4">
                      <h1 className="India">India</h1>
                    </div>
                    <div className="col-8">
                      <p className="lineUp">
                        {temp == textArray[0] &&
                          splittemp.slice(0, 2).join(" ")}{" "}
                        <span className="styletext">
                          {temp == textArray[0] &&
                            splittemp.slice(2, 4).join(" ")}
                        </span>{" "}
                        {temp == textArray[0] &&
                          splittemp.slice(4, 9).join(" ")}{" "}
                        <br />
                        {temp == textArray[0] &&
                          splittemp.slice(9, 11).join(" ")}{" "}
                        <span className="styletext">
                          {" "}
                          {temp == textArray[0] &&
                            splittemp.slice(11, 12).join(" ")}{" "}
                        </span>{" "}
                        {temp == textArray[0] &&
                          splittemp.slice(12, 16).join(" ")}
                        {/* second one */}
                        {temp == textArray[1] &&
                          splittemp.slice(0, 2).join(" ")}{" "}
                        <span className="styletext">
                          {temp == textArray[1] &&
                            splittemp.slice(2, 4).join(" ")}
                        </span>{" "}
                        {temp == textArray[1] &&
                          splittemp.slice(4, 7).join(" ")}{" "}
                        <br />
                        {/* brings out <span className="styletext">15 lakh</span>{" "}
                        engineering graduates every year & <br />
                        has the <span className="styletext">2nd </span> largest
                        english speaking population */}
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

export default Top_crausal;
