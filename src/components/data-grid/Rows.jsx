import * as React from "react";

import { Row } from "./Row";

export const Rows = ({
  columns,
  rows,
}) => {
  return (
    <>
      {rows.map((row, idx) => (
        <Row key={idx} columns={columns} row={row} />
      ))}
    </>
  );
};
