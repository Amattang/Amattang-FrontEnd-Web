import React, { useState } from "react";
import { IElementProps } from "./myItem.types";

import check from "../../assets/images/icon-myItemCheck.svg";
import unCheck from "../../assets/images/icon-myItemUncheck.svg";
import * as E from "./myItem.styles";

function Element({ myItem }: IElementProps) {
  // console.log(myItem);
  const [clicked, setClicked] = useState(false);
  return (
    <>
      <E.ElementWrapper
        color={clicked ? "white" : "#373772"}
        onClick={() => setClicked(!clicked)}
      >
        {myItem.categoryName} &nbsp;
        {myItem.questions.length}
      </E.ElementWrapper>
      {clicked && (
        <E.ElementContentWrapper>
          {myItem.questions.map((question, index) => (
            <div key={index}>
              <E.ElementContent>
                {question.checked ? <img src={check} /> : <img src={unCheck} />}
                <E.ElementContentText>{question.content}</E.ElementContentText>
              </E.ElementContent>
            </div>
          ))}
        </E.ElementContentWrapper>
      )}
    </>
  );
}

export default Element;
