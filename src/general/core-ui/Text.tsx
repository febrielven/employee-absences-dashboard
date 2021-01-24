import React, {ReactNode} from 'react';

import {TEXT as TEXT_COLOR} from '../constants/colors';
import {FONT_SIZE} from '../constants/size';

type FontSize = keyof typeof FONT_SIZE;
type TypeColor = keyof typeof TEXT_COLOR;

type Props = & {
  size?: FontSize;
  typeColor?: TypeColor;
  bold?: boolean;
  italic?: boolean;
  style?: any;
  children?: ReactNode;
};

function Text(props: Props) {
  let {
    size = 'default',
    typeColor = 'default',
    bold,
    italic,
    style,
    children,
    ...otherProps
  } = props;

//   let defaultStyle: StyleProp<TextStyle> = [
//     {
//       fontSize: FONT_SIZE[size],
//       color: TEXT_COLOR[typeColor],
//     },
//     bold && {fontWeight: 'bold'},
//     italic && {fontStyle: 'italic'},
//     style,
//   ];

  return (
    <text style={style} {...otherProps}>
      {children}
    </text>
  );
}

export default Text;
