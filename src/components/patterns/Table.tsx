import { table } from "console";
import React from "react";
import Text from "../atoms/Text";

interface TableHeaders {
  text: string;
  dataField: string;
}
type TableProps = {
  tableHeaders: TableHeaders[];
  values: Array<any>;
  type?: "horizontal" | "vertical";
};

const Table = ({ tableHeaders, values, type = "vertical" }: TableProps) => {
  return (
    <table className="regular-table">
      <tbody>
        {tableHeaders.map((tableHeader) => {
          return (
            <tr key={tableHeader.dataField}>
              <th>{tableHeader.text}</th>
              {values.map((value,index) => <td key={index}>{value[tableHeader.dataField]}</td>)}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
