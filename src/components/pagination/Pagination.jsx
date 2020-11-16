import React from "react";

import { Range } from "./Range";
import { getPagesRange, getTotalNoOfpages } from "./utils";
import {PaginationContainer, PrevButton, NextButton} from "./styles";

export const Pagination = ({
  currentPageNo = 1,
  onChange,
  recordsPerPage = 10,
  totalRows,
}) => {
  const totalPages = React.useMemo(
    () => getTotalNoOfpages(totalRows, recordsPerPage),
    [recordsPerPage, totalRows]
  );

  const [start, end] = React.useMemo(
    () => getPagesRange(currentPageNo, totalPages),
    [currentPageNo, totalPages]
  );

  return (
    <PaginationContainer>
      {currentPageNo !== 1 && (
        <PrevButton onClick={() => onChange(currentPageNo - 1)}>
          Prev
        </PrevButton>
      )}

      <Range
        currentPageNo={currentPageNo}
        end={end}
        onChange={onChange}
        start={start}
        totalPages={totalPages}
      />

      {currentPageNo !== totalPages && (
        <NextButton onClick={() => onChange(currentPageNo + 1)}>
          Next
        </NextButton>
      )}
    </PaginationContainer>
  );
};
