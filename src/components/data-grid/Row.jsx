import * as React from "react";
import { Cell } from "./Cell";
import {RowContainer} from "./styles";

export const Row = ({
  columns,
  row,
}) => (
  <RowContainer>
    {columns.map((column) => (
      <Cell
        key={column.fieldName}
        value={row[column.fieldName]}
        width={column.width}
      />
    ))}
  </RowContainer>
);
