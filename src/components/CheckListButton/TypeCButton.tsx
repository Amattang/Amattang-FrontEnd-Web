import React from "react";
import { IProps } from "./Button.types";
import * as Button from "./Button.styles";
import { ButtonsCWrapper } from "./Button.styles";

function TypeCButton({ answer }: IProps) {
  console.log(answer);
  return (
    <>
      <Button.ButtonsCWrapper>
        {answer.some((answerItem) => answerItem) &&
          answer.map((answerItem) => (
            <>
              <Button.TypeCButtonWrapper>
                <Button.TypeCImage src={answerItem.url} />
              </Button.TypeCButtonWrapper>
            </>
          ))}
      </Button.ButtonsCWrapper>
    </>
  );
}

export default TypeCButton;
