import * as React from "react";
import {useState} from "react";
import {SearchBar} from "../../components/search";
import { DataGrid } from "../../components/data-grid";
import { campaignService } from "../../data-services/campaign-service";

import {Container } from "./styles";

const columns = [
  { fieldName: "name" },
  { fieldName: "type", width: "250px" },
  { fieldName: "company" },
];

const data = campaignService.getAll();


export const CampaignList = () => {

const [dataOnTable, setDataforTable] = useState(data);

  return (<Container>
    <SearchBar 
    setTableData={setDataforTable}
    data={data}/>
    <DataGrid columns={columns} rows={dataOnTable} />
  </Container>)
};
