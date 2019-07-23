const theme = {
  breakpoints: ['40em', '52em', '64em'],
  fontSizes: {
    '100': '0.75rem',
    '200': '0.875rem',
    '300': '1rem', // base font-size: 16px
    '350': '1.25rem', // base font-size: 16px
    '400': '1.5rem',
    '500': '2rem',
    '600': '3rem',
    '700': '4rem',
    '800': '6rem',
    '900': '8rem',
  },
  space: {
    '100': 0,
    '200': '0.25rem',
    '300': '0.5rem',
    '400': '1rem',
    '425': '1.25rem',
    '450': '1.5rem',
    '500': '2rem',
    '575': '3.5rem',
    '600': '4rem',
    '700': '8rem',
    '800': '16rem',
  },
  fonts: {
    sans: "'DM Sans', sans-serif",
    mono: "'Anonymous Pro', monospace",
  },
  colors: {
    white: '#FFFFFF',
    black: '#231B23',
    gray100: '#EBEBF5',
    gray200: '#ACB1C3',
    gray300: '#6B728A',
    gray400: '#3E4456',
    green100: '#B7F1DA',
    green200: '#8AD397',
    green300: '#576B56',
    tan100: '#DCBCAC',
    tan200: '#C68982',
    orange100: '#FFE0D7',
    orange200: '#FC977A',
    orange300: '#EC685A',
    orange400: '#925646',
    yellow100: '#FCF8F3',
    pink100: '#ECD0F2',
    pink200: '#756B8A',
    pink300: '#36293B',
    pink400: '#231B23',
  },
  borders: {
    whiteLine: 'solid 2px white',
  },
  radii: {
    none: '0px',
    '100': '2px',
    '200': '5px',
    '300': '8px',
    '400': '16px',
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
