import React from 'react';

import { Pagination } from "../pagination";
import { Header } from "./Header";
import { Rows } from "./Rows";
import {DataGridContainer} from "./styles";

export const DataGrid = ({
  columns,
  rows,
  recordsPerPage = 10,
}) => {
  const [pageNo, setPageNo] = React.useState(1);

  const data = React.useMemo(() => rows.slice((pageNo - 1) * 10, pageNo * 10), [
    pageNo,
    rows,
  ]);

  return (
    <DataGridContainer>
      <Header columns={columns}/>

      <Rows columns={columns} rows={data} />

      <Pagination
        currentPageNo={pageNo}
        onChange={setPageNo}
        recordsPerPage={recordsPerPage}
        totalRows={rows.length}
      />
    </DataGridContainer>
  );
};