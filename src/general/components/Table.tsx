import React, { ReactNode } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Table as TableMaterial } from "@material-ui/core";
import { createStyles, withStyles, WithStyles } from "@material-ui/core";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Text } from "../core-ui";
type Props = WithStyles<typeof styles> & {
  lists: Array<string>;
  children: ReactNode;
};

function Table(props: Props) {
  let { lists, children, classes } = props;

  return (
    <TableContainer component={Paper}>
      <TableMaterial className={classes.table}>
        <TableHead>
          <TableRow>
            {lists.map((data, index) => (
              <TableCell key={index}>
                <Text bold>{data}</Text>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>{children}</TableBody>
      </TableMaterial>
    </TableContainer>
  );
}

// function ItemTable(props: Props) {
//   return (
//     <TableRow>
//       <TableCell>

//       </TableCell>
//     </TableRow>
//   );
// }

const styles = createStyles({
  table: {
    minWidth: 650,
  },
});

export default withStyles(styles)(Table);
