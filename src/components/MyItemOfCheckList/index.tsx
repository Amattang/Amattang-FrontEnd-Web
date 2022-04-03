import React from "react";
import { IMyItemProps } from "./myItem.types";
import Element from "./Element";

function MyItemOfCheckList({ myItems }: IMyItemProps) {
  return (
    <>
      {myItems.map((myItem, index) => (
        <div key={index}>
          <Element myItem={myItem} />
        </div>
      ))}
    </>
  );
}

export default MyItemOfCheckList;
