import React, { useState } from "react";
import * as CL from "./checkList.styles";
import { IProps } from "./checkList.types";
import TypeAButton from "../CheckListButton/TypeAButton";
import TypeBButton from "../CheckListButton/TypeBButton";
import TypeCButton from "../CheckListButton/TypeCButton";
import TypeDButton from "../CheckListButton/TypeDButton";
import TypeMButton from "../CheckListButton/TypeMButton";

function CheckList({ checkLists }: IProps) {
  console.log(checkLists);
  return (
    <>
      {checkLists.map((checkList) => (
        <>
          <CL.Wrapper>
            <CL.Question>{checkList.question}</CL.Question>
            {checkList.rule && (
              <CL.Description>
                <CL.Emoji>📘</CL.Emoji>
                {checkList.rule}
              </CL.Description>
            )}
            {checkList.description && (
              <CL.Description>
                <CL.Emoji>👀</CL.Emoji>
                {checkList.description}
              </CL.Description>
            )}

            {checkList.type === "A" && (
              <TypeAButton answer={checkList.answer} />
            )}
            {checkList.type === "B" && (
              <TypeBButton answer={checkList.answer} />
            )}
            {checkList.type === "C" && (
              <TypeCButton answer={checkList.answer} />
            )}
            {checkList.type === "D" && (
              <TypeDButton answer={checkList.answer} />
            )}
            {checkList.type === "M" && (
              <TypeMButton answer={checkList.answer} />
            )}
          </CL.Wrapper>
        </>
      ))}
    </>
  );
}

export default CheckList;
