import React from "react";
import { IProps } from "./Button.types";
import * as Button from "./Button.styles";
import { ButtonsCWrapper } from "./Button.styles";

function TypeCButton({ answer }: IProps) {
  // console.log(answer);
  return (
    <>
      {answer && (
        <Button.ButtonsCWrapper>
          {answer.some((answerItem) => answerItem) !== null &&
            answer.map((answerItem, index) => (
              <div key={index}>
                <Button.TypeCButtonWrapper>
                  <Button.TypeCImage src={answerItem.url} />
                </Button.TypeCButtonWrapper>
              </div>
            ))}
        </Button.ButtonsCWrapper>
      )}
    </>
  );
}

export default TypeCButton;
