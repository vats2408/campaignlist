import * as React from "react";
import { Cell } from "./Cell";

import {HeaderContainer} from "./styles";

export const Header= ({
  columns
}) => (
  <HeaderContainer>
    {columns.map((column) => (
      <Cell
        key={column.fieldName}
        bold
        value={column.fieldName}
        width={column.width}
      />
    ))}
  </HeaderContainer>
);
