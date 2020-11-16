import * as React from "react";

// import { EditIcon, TrashIcon } from "../core";

import { Cell } from "./Cell";
// import { Action, IColumn, IRow } from "./types";
// import * as Styled from "./Row.styled";
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
