export interface IElementProps {
  myItem: myItemType;
}

export interface IMyItemProps {
  myItems: myItemType[];
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

export interface myItemClickHandlerType {
  myItem: myItemType;
  myItemElement: myItemElementType;
}

export interface myItemElementHandlerType {
  onChangedQuestionElement: string;
  clickedMyItemElement: myItemElementType;
}
