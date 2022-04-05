import React from "react";
import { IProps } from "./Button.types";
import * as Button from "./Button.styles";

function TypeMButton({ answer }: IProps) {
  return (
    <>
      <Button.ButtonsWrapper>
        {answer.map((answerItem, index) => (
          <div key={index}>
            <Button.TypeBButtonWrapper>
              {answerItem.type}
            </Button.TypeBButtonWrapper>
          </div>
        ))}
      </Button.ButtonsWrapper>
    </>
  );
}

export default TypeMButton;
