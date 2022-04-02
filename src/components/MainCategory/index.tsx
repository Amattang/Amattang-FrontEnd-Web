import React from "react";
import { IProps } from "./mainCategory.types";
import * as Main from "./mainCategory.styles";
import { mainCategoryElementText } from "./mainCategory.styles";

function MainCategory({
  mainCategory,
  onCheckListHandler,
  onMainCheckListClickHandler,
}: IProps) {
  return (
    <Main.mainCategoryElement
      onClick={() => {
        onCheckListHandler(mainCategory.title, "");
        onMainCheckListClickHandler(mainCategory.title);
      }}
    >
      <Main.mainCategoryElementText
        color={mainCategory.clicked ? "#373772" : "#D6D4D4"}
      >
        {mainCategory.title}
      </Main.mainCategoryElementText>
      {mainCategory.clicked && <Main.focusedBox />}
    </Main.mainCategoryElement>
  );
}

export default MainCategory;
