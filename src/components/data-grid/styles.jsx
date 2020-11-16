import styled from "styled-components";

export const DataGridContainer = styled.div`
  border: 1px solid #d3d3d3;
  border-radius: 5px;
`;

export const CellContainer = styled.div`
  padding: 15px;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-transform: capitalize;
  border-bottom: 1px solid #d3d3d3;
  width: ${props => props.width};
  flex: 1;
`;

export const HeaderContainer = styled.div`
  display: flex;
`;

export const RowContainer = styled.div`
  font-size: 14px;
  display: flex;
`;

export const ActionButton = styled.button`
  cursor: pointer;
  outline: none;
  background: transparent;
  border: none;
  padding: 0;
`;
