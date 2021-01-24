import React, {ReactNode} from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import {createStyles, WithStyles, withStyles} from '@material-ui/core/styles';

import {MENULIST} from '../constants/colors';

type Props = WithStyles<typeof styleClasses> & {
    onPress:() => void;
    title:string;
    selected?:boolean;
    children: ReactNode;
};


function MenuItem(props: Props) {
  let {title, onPress, children, selected, classes} = props;
  return (
    <div onClick={onPress}>
      <ListItem button>
        <ListItemIcon className={classes.icon}>
            {children}
        </ListItemIcon>
        <ListItemText primary={title}  className={classes.text}/>
      </ListItem>
    </div>
  );
}

const styleClasses = createStyles({
  text: {
    color: MENULIST.default,
  },
  icon: {
    color: MENULIST.default,
  },
});

export default withStyles(styleClasses)(MenuItem);

