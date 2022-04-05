import React from "react";
import { IProps } from "./Button.types";
import * as Button from "./Button.styles";

function TypeDButton({ answer }: IProps) {
  return (
    <>
      <Button.ButtonsDWrapper>
        {answer.map((answerItem, index) => (
          <Button.TypeDButtonWrapper
            color={answerItem.val ? "clicked" : "none"}
            title={answerItem.redType ? "red" : "blue"}
            key={index}
          >
            {answerItem.type}
          </Button.TypeDButtonWrapper>
        ))}
      </Button.ButtonsDWrapper>
    </>
  );
}

export default TypeDButton;
