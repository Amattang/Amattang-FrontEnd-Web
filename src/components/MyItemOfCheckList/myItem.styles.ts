import styled from "styled-components";

export const ElementWrapper = styled.div`
  color: ${(props) => props.color};
  background-color: ${(props) =>
    props.color === "white" ? "#373772" : "white"};
  display: flex;
  align-items: center;
  height: 50px;
  margin-bottom: 10px;
  border-radius: 10px;
  padding-top: 5px;
  padding-left: 25px;
`;

export const ElementContent = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 20px;
  margin-bottom: 10px;
  justify-content: flex-start;
  align-items: center;
`;

export const ElementContentText = styled.p`
  margin-left: 10px;
`;

export const ElementContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
