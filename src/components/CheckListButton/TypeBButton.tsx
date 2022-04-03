import React from "react";
import { IProps } from "./Button.types";
import * as Button from "./Button.styles";

function TypeBButton({ answer }: IProps) {
  return (
    <>
      <Button.ButtonsWrapper>
        {answer.map((answerItem, index) => (
          <>
            <Button.TypeBButtonWrapper>
              {answerItem.type}
            </Button.TypeBButtonWrapper>
            {answerItem.description}
          </>
        ))}
      </Button.ButtonsWrapper>
    </>
  );
}

export default TypeBButton;
