import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import CheckList from "../../components/CheckList";
import MyItemOfCheckList from "../../components/MyItemOfCheckList";
import {
  checkListTypes,
  mainCategoryType,
  subCategoryType,
} from "../../../types";
import MainCategory from "../../components/MainCategory";
import SubCategory from "../../components/SubCategory";
import * as Common from "../common.styles";

import CheckLIstNavigation from "../../components/CheckLIstNavigation";
import * as CheckListWrapper from "./checkListPage.style";

function CheckListPage() {
  const { id } = useParams();
  const [checkLists, setCheckLists] = useState<checkListTypes[]>([]);
  const [clickedCheckList, setClickedCheckList] =
    useState<mainCategoryType>("기본정보");

  const [mainCategoryList, setMainCategoryList] = useState<
    { title: mainCategoryType; clicked: boolean }[]
  >([
    { title: "기본정보", clicked: true },
    { title: "외부시설", clicked: false },
    { title: "내부시설", clicked: false },
    { title: "내 항목", clicked: false },
  ]);

  const [subCategoryList, setSubCategoryList] = useState<
    { title: subCategoryType; clicked: boolean }[]
  >([
    { title: "창문", clicked: true },
    { title: "천장", clicked: false },
    { title: "부엌", clicked: false },
    { title: "화장실", clicked: false },
    { title: "벽", clicked: false },
    { title: "현관", clicked: false },
    { title: "옵션", clicked: false },
  ]);
  const onCheckListHandler = (
    mainCategory: mainCategoryType,
    subCategory?: subCategoryType
  ) => {
    if (mainCategory === "기본정보" || mainCategory === "외부시설") {
      axios
        .get(
          `http://3.38.93.184:8080/api/check-list/${id}/common?mainCategory=${mainCategory}`
        )
        .then((response) => {
          setCheckLists(response.data.data.questionList);
        });
    }

    if (mainCategory === "내부시설" && subCategory === "") {
      axios
        .get(
          `http://3.38.93.184:8080/api/check-list/${id}/common?mainCategory=${mainCategory}&subCategory=창문`
        )
        .then((response) => {
          setCheckLists(response.data.data.questionList);
        });
    } else if (mainCategory === "내부시설" && subCategory) {
      axios
        .get(
          `http://3.38.93.184:8080/api/check-list/${id}/common?mainCategory=${mainCategory}&subCategory=${subCategory}`
        )
        .then((response) => {
          setCheckLists(response.data.data.questionList);
        });
    }

    setClickedCheckList(mainCategory);
  };
  const onMainCheckListClickHandler = (
    clickedMainCategory: mainCategoryType
  ) => {
    setMainCategoryList(
      mainCategoryList.map((mainCategory) =>
        mainCategory.title === clickedMainCategory
          ? { ...mainCategory, clicked: true }
          : { ...mainCategory, clicked: false }
      )
    );
  };

  const onSubCheckListClickHandler = (clickedSubCategory: subCategoryType) => {
    setSubCategoryList(
      subCategoryList.map((subCategory) =>
        subCategory.title === clickedSubCategory
          ? { ...subCategory, clicked: true }
          : { ...subCategory, clicked: false }
      )
    );
  };

  return (
    <Common.Wrapper>
      <Common.inner>
        <CheckLIstNavigation />
        <CheckListWrapper.mainCategoryWrapper>
          {mainCategoryList.map((mainCategory, index) => (
            <>
              <MainCategory
                key={index}
                mainCategory={mainCategory}
                onCheckListHandler={onCheckListHandler}
                onMainCheckListClickHandler={onMainCheckListClickHandler}
              />
            </>
          ))}
        </CheckListWrapper.mainCategoryWrapper>
        <CheckListWrapper.subCategoryWrapper>
          {clickedCheckList === "내부시설" &&
            subCategoryList.map((subCategory, index) => (
              <>
                <SubCategory
                  index={index}
                  subCategory={subCategory}
                  onCheckListHandler={onCheckListHandler}
                  onSubCheckListClickHandler={onSubCheckListClickHandler}
                />
              </>
            ))}
        </CheckListWrapper.subCategoryWrapper>
        {clickedCheckList === "내 항목" ? (
          <MyItemOfCheckList />
        ) : (
          <CheckList checkLists={checkLists} />
        )}
      </Common.inner>
    </Common.Wrapper>
  );
}

export default CheckListPage;
