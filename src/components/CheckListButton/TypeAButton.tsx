import React from "react";
import * as Button from "./Button.styles";
import { IProps } from "./Button.types";

function TypeAButton({ answer }: IProps) {
  return (
    <Button.ButtonsWrapper>
      {answer.map((answerItem, index) => (
        <Button.TypeAButtonWrapper
          color={answerItem.val ? "clicked" : "none"}
          title={answerItem.redType ? "red" : "blue"}
          key={index}
        >
          {answerItem.type}
        </Button.TypeAButtonWrapper>
      ))}
    </Button.ButtonsWrapper>
  );
}

export default TypeAButton;
