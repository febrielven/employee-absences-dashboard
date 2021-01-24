import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Drawer, Main } from "../../general/components";

export default function Create() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Drawer />
      <Main>CREATE</Main>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
}));
