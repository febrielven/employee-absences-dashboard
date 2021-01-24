/**
 * Main Color
 */
const BLACK = '#333333';
const BLUE = '#3f51b5';
const SOFt_BLUE = '#90caf9';
const DARK_BLUE = '#094B88';
const SOFT_GRAY = '#BDBDBD';
const BLUE_GRAY = '#EEF1F3';
const WHITE = '#FFFFFF';
const WHITE_SMOKE = '#F1F1F1';
const SOFT_YELLOW = '#F79931';

/**
 * Opacity main colors in solid hex values
 */
const BLACK50 = 'rgba(0, 0, 0, 0.5)';
const BLUE50 = 'rgba(5, 85, 159, 0.5)';
const GRAY30 = '#CDCFD0';
const GRAY80 = '#CCCCCC';
const GRAY90 = '#E5E5E5';

/**
 * Contextual color names based on usage
 */
export const PRIMARY = BLUE;

export const TEXT = {
  default: BLACK,
  primary: PRIMARY,
  secondary: WHITE,
  disable: SOFT_GRAY,
};

export const TEXT_INPUT = {
  disable: GRAY90,
};

export const BUTTON = {
  default: {
    background: BLACK,
    text: WHITE,
    hover: BLACK,
    loading: WHITE,
    border: BLACK,
  },
  primary: {
    background: WHITE,
    text: GRAY30,
    hover: GRAY90,
    loading: BLACK,
    border: GRAY30,
  },
  secondary: {
    background: SOFT_YELLOW,
    text: WHITE,
    hover: SOFT_YELLOW,
    loading: WHITE,
    border: SOFT_YELLOW,
  },
};

export const CHECKBOX = {
  default: SOFT_GRAY,
  disable: GRAY90,
  check: BLUE,
};

export const MENULIST = {
  default: WHITE,
  disable: GRAY90,
  check: BLUE,
};


