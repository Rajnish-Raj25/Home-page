import { useEffect, useState } from "react";
// import "./App.css";
// import MobileView from "./MobileView";
import "./Flow_chat.css";

function Flow_chart() {
  const [index, setIndex] = useState(0);
  const [newArray, setNewArray] = useState([]);
  const [currentHead, setCurrentHead] = useState("Perfect Match");
  const [secondHead, setSecondHead] = useState("Partial Match");
  const [thirdHead, setThirdHead] = useState("No Match");

  const array = {
    "Perfect Match": [
      {
        id: 0,
        sno: "01",
        message: "JD partially matches the profiles of our existing cohort",
      },
      {
        id: 1,
        sno: "02",
        message:
          "Talent undergoes additional training as per the requirement for 1-4 weeks",
      },
      {
        id: 2,
        sno: "03",
        message: "Interviews are scheduled",
      },
      {
        id: 3,
        sno: "1-4",
        message: "Just in",
        weeks: "weeks",
      },
    ],
    "No Match": [
      {
        id: 0,
        sno: "01",
        message:
          " No Match JD partially matches the profiles of our existing cohort",
      },
      {
        id: 1,
        sno: "02",
        message:
          "No Match Talent undergoes additional training as per the requirement for 1-4 weeks",
      },
      {
        id: 2,
        sno: "03",
        message: "No Match  Interviews are scheduled",
      },
      {
        id: 3,
        sno: "04",
        message: "JD 4",
      },
    ],
    "Partial Match": [
      {
        id: 0,
        sno: "01",
        message:
          " Partial Match JD partially matches the profiles of our existing cohort",
      },
      {
        id: 1,
        sno: "02",
        message:
          "Partial Match Talent undergoes additional training as per the requirement for 1-4 weeks",
      },
      {
        id: 2,
        sno: "03",
        message: "Partial Match  Interviews are scheduled",
      },
      {
        id: 3,
        sno: "04",
        message: "JD 4",
      },
    ],
  };

  const changeCurrentWithSecondHeadFunc = () => {
    setSecondHead(currentHead);
    setCurrentHead(secondHead);
    setNewArray([]);
    setIndex(0);
  };

  const changeCurrentWithThirdHeadFunc = () => {
    setThirdHead(currentHead);
    setCurrentHead(thirdHead);
    setNewArray([]);
    setIndex(0);
  };
  useEffect(() => {
    const tick = () => {
      setIndex((i) => i + 1);
      setNewArray((oldArray) => [...oldArray, array[currentHead][index]]);
    };

    if (index < array[currentHead].length) {
      const id = setInterval(tick, 2000);
      return () => clearInterval(id);
    }
  }, [index]);

  return (
    <>
      <div className=" top_div flex justify-center items-center w-full h-screen bg-[#202020]">
        <div className="App w-[965px] min-h-[513.44px]  bg-[#202020] ">
          <div className="child_div font-medium text-3xl text-white flex justify-center">
            We receive JDs
          </div>
          <div className="child_div1 flex justify-center ">
            <img src="./downArroy.svg" alt="downArroy" />
          </div>
          <div className="Child_div3 flex justify-center items-center  -mt-3">
            <img src="./LeftArroy.svg" alt="downArroy" />
            <div className="child_div4 font-medium text-3xl text-white -mt-24">
              {" "}
              Solution Architect analyzes the requirements{" "}
            </div>
          </div>
          <div className=" child_div5 flex justify-between items-center ">
            <div
              onClick={() => setCurrentHead()}
              value={currentHead}
              className="child_div6 border-b-2 border-white px-4 cursor-pointer text-[#FDBA2F] pointer-events-none font-bold text-3xl"
            >
              {currentHead}
            </div>
            <div
              onClick={() => changeCurrentWithSecondHeadFunc()}
              className="child_div7 border-b-2 border-[#646369] px-4 cursor-pointer text-[#646369]  font-bold text-3xl"
            >
              {secondHead}
            </div>
            <div
              onClick={() => changeCurrentWithThirdHeadFunc()}
              className="child_div8 border-b-2 border-[#646369] px-4 cursor-pointer text-[#646369]  font-bold text-3xl"
            >
              {thirdHead}
            </div>
          </div>
          <div className="child_div9 flex justify-start ">
            <img src="./downArroy.svg" alt="downArroy" />
          </div>
          <div className="child_div10 flex f text-white px-3 gap-x-10">
            {newArray.map((item, idx) => {
              return (
                <div className="child_div11 max-w-[281px] w-auto flex justify-start flex-col ">
                  <div className="child_div12 text-start font-normal text-4xl text-[#FDBA2F]">
                    {item.sno}
                  </div>
                  <div className="child_div13 text-start font-normal text-xl mt-4">
                    {" "}
                    {item.message}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="child_div14 flex justify-start -mt-5 ">
            {newArray.length == 1 && (
              <img src="./FullLineArroy.svg" alt="downArroy" />
            )}
            {newArray.length == 2 && (
              <img src="./SecondLine.svg" alt="downArroy" />
            )}
            {newArray.length >= 3 && (
              <img src="./fisrtline.svg" alt="downArroy" />
            )}
          </div>
        </div>
      </div>
      <div className="child_div15 flex w-full justify-center items-center p-10">
        {/* <MobileView /> */}
      </div>
    </>
  );
}

export default Flow_chart;
