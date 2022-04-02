import styled from "styled-components";

export const mainCategoryElement = styled.li`
  text-align: center;
  justify-content: center;
  align-items: center;
  width: 25%;
`;

export const focusedBox = styled.div`
  margin-top: 20px;
  height: 2.5px;
  background-color: #373772;
`;

export const mainCategoryElementText = styled.p`
  color: ${(props) => props.color};
`;
