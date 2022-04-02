import { mainCategoryType, subCategoryType } from "../../../types";

export interface IProps {
  mainCategory: { title: mainCategoryType; clicked: boolean };
  onCheckListHandler: (
    mainCategory: mainCategoryType,
    subCategory?: subCategoryType | undefined
  ) => void;
  onMainCheckListClickHandler: (clickedMainCategory: mainCategoryType) => void;
}
