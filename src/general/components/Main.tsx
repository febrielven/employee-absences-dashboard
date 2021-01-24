import { ReactNode } from "react";
import { makeStyles } from "@material-ui/core/styles";

type Props = {
  children: ReactNode;
};

function Main(props: Props) {
  let { children } = props;
  const classes = useStyles();
  return (
    <main className={classes.content}>
      {children}
    </main>
  );
}

export default Main;

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
    padding:theme.spacing(4),
  },
}));
