import React, { useState } from "react";

interface ArrayLikeType {
  [key: number]: string[];
}

const obj: ArrayLikeType = {
  0: ["창문1", "천장1", "부엌1", "화장실1"],
  1: ["창문2", "천장2", "부엌2", "화장실2"],
  2: ["창문3", "천장3", "부엌3", "화장실3"],
  3: ["창문4", "천장4", "부엌4", "화장실4"],
};

const arr = ["기본 정보", "외부 시설", "내부 시설", "내 항목"];

function CheckList() {
  const [id, setId] = useState<number>(0);

  const clickCategory = (idx: number) => {
    setId(idx);
  };
  const clickSubCategory = (idx: number) => {
    // setId(idx);
    console.log("subcategory");
  };

  return (
    <div className="wrapper">
      <ul className="tabs">
        {arr.map((text, idx) => {
          return (
            <li key={idx} className="tab" onClick={() => clickCategory(idx)}>
              {text}
            </li>
          );
        })}
      </ul>
      <div className="content">
        <ul className="tabs">
          {obj[id].map((text, idx) => {
            return (
              <li
                key={idx}
                className="tab"
                onClick={() => clickSubCategory(idx)}
              >
                {text}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default CheckList;
