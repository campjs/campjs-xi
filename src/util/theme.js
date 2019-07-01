const theme = {
  breakpoints: ['40em', '52em', '64em'],
  // base font-size: 16px
  fontSizes: [
    '0.75rem',
    '0.875rem',
    '1rem',
    '1.5rem',
    '2rem',
    '3rem',
    '4rem',
    '6rem',
    '8rem',
  ],
  space: [0, 4, 8, 16, 32, 64, 128, 256],
  fonts: {
    sans: "'DM Sans', sans-serif",
    mono: "'Anonymous Pro', monospace",
  },
  colors: {
    white: '#FFFFFF',
    black: '#000000',
    gray100: '#EBEBF5',
    gray200: '#B8D0E9',
    gray300: '#6B728A',
    gray400: '#3E4456',
    green100: '#B7F1DA',
    green200: '#8AD397',
    green300: '#576B56',
    orange100: '#FFE0D7',
    orange200: '#FC977A',
    orange300: '#EC685A',
    orange400: '#75624C',
    pink100: '#ECD0F2',
    pink200: '#756B8A',
  },
  borders: {
    whiteLine: 'solid 2px white',
  },
  radii: {
    none: '0px',
    100: '2px',
    200: '5px',
    300: '8px',
    400: '16px',
    round: '9999px',
  },
};

theme.buttons = {
  primary: {
    color: theme.colors.white,
    background: theme.colors.none,
    border: theme.borders.whiteLine,
    borderRadius: theme.radii['none'],
  },
};

export default theme;
