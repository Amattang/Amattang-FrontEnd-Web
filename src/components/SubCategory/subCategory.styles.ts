import styled from "styled-components";

export const subCategoryElement = styled.li`
  padding: 10px 20px;
  display: flex;
  font-size: 14px;
  justify-content: center;
  align-items: baseline;
  width: auto;
  white-space: nowrap;
  margin: 10px 10px 20px 10px;

  background-color: white;
  border-radius: 15px;
  border-width: 2px;
  border-style: solid;
  border-color: ${(props) => props.color};
`;

export const emoji = styled.p`
  margin-right: 10px;
`;
