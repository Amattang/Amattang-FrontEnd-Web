import React from "react";
import { IProps } from "./Button.types";
import * as Button from "./Button.styles";

function TypeMButton({ answer }: IProps) {
  return (
    <>
      <Button.ButtonsWrapper>
        {answer.map((answerItem) => (
          <>
            <Button.TypeBButtonWrapper>
              {answerItem.type}
            </Button.TypeBButtonWrapper>
          </>
        ))}
      </Button.ButtonsWrapper>
    </>
  );
}

export default TypeMButton;
