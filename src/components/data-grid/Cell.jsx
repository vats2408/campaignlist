import * as React from "react";

import {CellContainer} from "./styles";


export const Cell = ({
  children,
  value,
  ...rest
}) => (
  <CellContainer {...rest}>
    {value}
    {children}
  </CellContainer>
);
