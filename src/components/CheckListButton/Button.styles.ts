import styled from "styled-components";

export const ButtonsWrapper = styled.div`
  margin-top: 70px;
  display: flex;
  align-items: center;
`;

export const ButtonsCWrapper = styled.div`
  margin-top: 70px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
`;
export const ButtonsDWrapper = styled.div`
  margin-top: 70px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: flex-start;
`;
export const TypeDButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  border-radius: 7px;
  padding: 12px 25px;
  margin-right: 10px;
  min-height: 20px;
  margin-bottom: 10px;
  color: ${(props) => (props.color === "clicked" ? "white" : "gray")};
  background-color: ${(props) =>
    props.color === "clicked"
      ? props.title === "red"
        ? "#FF5D53"
        : "#373772"
      : "#f1f1f6"};
`;

export const TypeAButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  border-radius: 7px;
  padding: 12px 25px;
  margin-right: 10px;
  min-height: 20px;

  color: ${(props) => (props.color === "clicked" ? "white" : "gray")};
  background-color: ${(props) =>
    props.color === "clicked"
      ? props.title === "red"
        ? "#FF5D53"
        : "#373772"
      : "#f1f1f6"};
`;

export const TypeBButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  border-radius: 7px;
  padding: 12px 25px;
  margin-right: 10px;
  color: #999999;
  min-width: 50px;
  min-height: 25px;

  background-color: #f1f1f6;
`;

export const TypeCButtonWrapper = styled.div`
  min-width: 32%;
  position: relative;
  margin-bottom: 2%;
  &:after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }
`;
export const TypeCImage = styled.img`
  border-radius: 10px;
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
