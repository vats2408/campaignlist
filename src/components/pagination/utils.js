/**
 *
 * Returns [start, end] range.
 *
 * At any given currentPageNo we should generate pages with 5 buttons
 * e.g
 * current page no is 1 => [1, 5]
 * current page no is 4 => [4, 5]
 * current page no is 5 => [3, 7]
 * This gives us to decide when to show 1st and last page buttons
 *
 * @param currentPageNo currentPageNo for which we need range of start, end
 * @param totalNoPages total no of pages
 */
export function getPagesRange(currentPageNo, totalNoPages) {
  if (totalNoPages < 5) {
    return [1, totalNoPages];
  }

  let start = 1;

  if (currentPageNo > 4) {
    start = currentPageNo - 2;
  }

  const end = start + 4;

  if (end > totalNoPages) {
    return [totalNoPages - 5 + 1, totalNoPages];
  }

  return [start, end];
}

/**
 * Returns the no of pages.
 * @param totalRows total no of rows
 * @param recordsPerPage records per page
 */
export const getTotalNoOfpages = (totalRows, recordsPerPage = 10) =>
  Math.ceil(totalRows / recordsPerPage);
