import React from "react";
import { IMyItemProps } from "./myItem.types";
import Element from "./Element";

function MyItemOfCheckList({ myItems }: IMyItemProps) {
  return (
    <>
      {myItems.map((myItem) => (
        <>
          <Element myItem={myItem} />
        </>
      ))}
    </>
  );
}

export default MyItemOfCheckList;
