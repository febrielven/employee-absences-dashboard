import React, { useState, useEffect } from "react";
import moment from "moment";
import { makeStyles } from "@material-ui/core/styles";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

import { Drawer, Main, Table } from "../general/components";
import { Text } from "../general/core-ui";
import fetchApi from "../general/helpers/fetchApi";

type Items = {
  nik: string;
  fullname: string;
  date_in: string;
  date_out: string;
  selfie: string;
};

export default function Dashboard() {
  const classes = useStyles();
  const rowTable: Array<string> = [
    "NIK",
    "NAME",
    "DETE IN",
    "DATE OUT",
    "SELFIE",
  ];

  let [items, setItems] = useState([] as Items[]);

  const GetAbsences = async () => {
    let { data, statusCode } = await fetchApi("/api/absences");
    if (statusCode === 200) {
      setItems(data);
    }
  };

  useEffect(() => {
    GetAbsences();
  }, [items]);

  return (
    <div className={classes.root}>
      <Drawer />
      <Main>
        <Text size="large" bold>
          {" "}
          Absences Lists
        </Text>
        <Table lists={rowTable}>
          {items.map((row) => (
            <TableRow key={row.nik}>
              <TableCell>{row.nik}</TableCell>
              <TableCell>{row.fullname}</TableCell>
              <TableCell>
                {row.date_in &&
                  moment(row.date_in).format("MMMM Do YYYY, h:mm:ss a")}
              </TableCell>
              <TableCell>
                {row.date_out &&
                  moment(row.date_out).format("MMMM Do YYYY, h:mm:ss a")}
              </TableCell>
              <TableCell>
                <img
                  style={{ width: 200 }}
                  src={`data:image/png;base64,${row.selfie}`}
                  alt="selfie"
                />
              </TableCell>
            </TableRow>
          ))}
        </Table>
      </Main>
    </div>
  );
}

const useStyles = makeStyles({
  root: {
    display: "flex",
  },
  table: {
    minWidth: 650,
  },
});
