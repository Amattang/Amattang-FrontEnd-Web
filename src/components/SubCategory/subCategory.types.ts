import { mainCategoryType, subCategoryType } from "../../../types";

export interface IProps {
  subCategory: { title: subCategoryType; clicked: boolean };
  onCheckListHandler: (
    mainCategory: mainCategoryType,
    subCategory?: subCategoryType | undefined
  ) => void;
  onSubCheckListClickHandler: (clickedMainCategory: subCategoryType) => void;
  index: number;
}
