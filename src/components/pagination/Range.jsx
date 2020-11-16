import * as React from "react";

import {PageButton, PageButtonPlaceHolder} from "./styles";

export const Range= ({
  currentPageNo,
  end,
  onChange,
  start,
  totalPages,
}) => {
  const pageButtons = React.useMemo(() => {
    const buttons = [];

    for (let idx = start; idx <= end; idx++) {
      buttons.push(
        <PageButton
          key={idx}
          onClick={() => onChange(idx)}
          selected={idx === currentPageNo}
        >
          {idx}
        </PageButton>
      );
    }

    return buttons;
  }, [currentPageNo, end, onChange, start]);

  return (
    <>
      {/* First button + Placeholder */}
      {start !== 1 && (
        <>
          <PageButton
            onClick={() => onChange(1)}
            selected={1 === currentPageNo}
          >
            {1}
          </PageButton>

          <PageButtonPlaceHolder>...</PageButtonPlaceHolder>
        </>
      )}

      {/* Button ranges - 5 button in all scenarios */}
      {pageButtons}

      {/* Placeholder + Last button */}
      {end !== totalPages && (
        <>
          <PageButtonPlaceHolder>...</PageButtonPlaceHolder>

          <PageButton
            onClick={() => onChange(totalPages)}
            selected={totalPages === currentPageNo}
          >
            {totalPages}
          </PageButton>
        </>
      )}
    </>
  );
};
