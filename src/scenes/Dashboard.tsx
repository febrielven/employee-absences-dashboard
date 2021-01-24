import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

import { Drawer, Main, Table } from "../general/components";
import {Text} from "../general/core-ui";

type Items = {
  nik: string;
  name: string;
  datein: string;
  dateout: string;
  selfie: string;
};

export default function Dashboard() {
  const classes = useStyles();
  const rowTable: Array<string> = [
    "NIK",
    "NAME",
    "DETE IN",
    "DATE OUT",
    "SELFIE"
  ];

  let [items, setItems] = useState<Items[]>([]);

  useEffect(() => {
    let data: Items[] = [
      {
        nik: "1232324",
        name: "Febrianto",
        datein: new Date().toDateString(),
        dateout: new Date().toDateString(),
        selfie: "selfie",
      },
      {
        nik: "4232324",
        name: "Febrianto",
        datein: new Date().toDateString(),
        dateout: new Date().toDateString(),
        selfie: "selfie",
      },
    ];

    setItems(data);
  }, []);

  return (
    <div className={classes.root}>
      <Drawer />
      <Main>
        <Text size="large" bold > Absences Lists</Text>
        <Table lists={rowTable}>
          {items.map((row) => (
            <TableRow key={row.nik}>
              <TableCell>{row.nik}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.datein}</TableCell>
              <TableCell>{row.dateout}</TableCell>
              <TableCell>{row.selfie}</TableCell>
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
