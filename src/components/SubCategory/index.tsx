import React from "react";
import { IProps } from "./subCategory.types";
import * as Sub from "./subCategory.styles";

function SubCategory({
  subCategory,
  onCheckListHandler,
  onSubCheckListClickHandler,
  index,
}: IProps) {
  const emojiList = ["🖼", "💡", "🍳", "🚽", "📌", "🔑", "🎁"];
  return (
    <>
      <Sub.subCategoryElement
        color={subCategory.clicked ? "#373772" : "white"}
        onClick={() => {
          onCheckListHandler("내부시설", subCategory.title);
          onSubCheckListClickHandler(subCategory.title);
        }}
      >
        {subCategory.clicked && <Sub.emoji>{emojiList[index]}</Sub.emoji>}
        {subCategory.title}
      </Sub.subCategoryElement>
    </>
  );
}

export default SubCategory;
