import mainCategory from "./src/components/MainCategory";

export type mainCategoryType = "기본정보" | "외부시설" | "내부시설" | "내 항목";
export type subCategoryType =
  | "창문"
  | "천장"
  | "부엌"
  | "화장실"
  | "벽"
  | "현관"
  | "옵션"
  | "";

export interface answerButtonType {
  val?: boolean;
  redType?: boolean;
  description?: string;
  type?: string;
  id?: number;
  main?: boolean;
  url?: string;
  order?: number;
}

export interface answerListType {
  answer: answerButtonType[];
}

export interface checkListTypes extends answerListType {
  subCategory: string | null;
  questionId: number;
  question: string;
  checked?: boolean;
  visibility: boolean;
  emoji: string;
  mainCategory: string | null;
  rule: string | null;
  description: string | null;
  type: "A" | "B" | "C" | "D" | "M";
}

export interface myItemElementType {
  checked: boolean;
  content: string;
  questionId?: string;
}

export interface myItemType {
  categoryName: string;
  categoryId?: string | null;
  questions: myItemElementType[];
}
