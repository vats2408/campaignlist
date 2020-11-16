import styled from "styled-components";

export const BaseButton = styled.div`
  outline: 0;
  font-size: 14px;
  cursor: pointer;
  text-transform: capitalize;
  border-radius: 5px;
`;

export const PrimaryButton = styled(BaseButton)``;

export const DefaultButton = styled(BaseButton)`
  background-color: #e0e0e0;
  color: #000000de;
  padding: 5px 8px;

  &:hover {
    background-color: #d5d5d5;
  }
`;

export const PaginationContainer = styled.div`
  margin: 20px 15px;
  display: flex;
`;

export const PrevButton = styled(DefaultButton)`
  margin-right: 20px;
`;

export const NextButton = styled(DefaultButton)`
  margin-left: 20px;
`;

export const PageButton = styled(DefaultButton)`
  margin: 0 5px;

  ${({ selected }) =>
    selected &&
    `
      color: #fff;
      background-color: #3f51b5;

      &:hover {
        background-color: #2c387e;
      }
    `};
`;

export const PageButtonPlaceHolder = styled.div`
  background-color: #e0e0e0;
  color: #000000de;
  padding: 5px 8px;
  border-radius: 5px;
  margin: 0 15px;
`;