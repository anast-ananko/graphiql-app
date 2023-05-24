import { ThemeOptions, createTheme } from '@mui/material/styles';

import { PRIMARY_FONT, SECONDARY_FONT } from '../../constants/fontsConstants';

const themeConfig: ThemeOptions = {
  palette: {
    mode: 'dark',
    primary: {
      main: '#d50032',
      light: '#d50032',
      dark: '#d50032',
      contrastText: '#fff',
    },
    secondary: {
      main: '#ffe919',
      contrastText: '#fff',
    },
    background: {
      paper: '#000000',
      default: '#000000',
    },
  },
  typography: {
    fontFamily: PRIMARY_FONT,
    fontSize: 14,
    // The biggest headline
    h1: {
      fontFamily: SECONDARY_FONT,
      fontSize: '6rem',
      '@media (max-width:600px)': {
        fontSize: '4rem',
      },
    },
    // Main header in page
    h2: {
      fontFamily: SECONDARY_FONT,
      fontSize: '1.8rem',
      '@media (max-width:600px)': {
        fontSize: '1.4rem',
      },
    },
    // Section header
    h3: {
      fontSize: '1.5rem',
      '@media (max-width:600px)': {
        fontSize: '1.25rem',
      },
      fontWeight: 700,
    },
    // Small header
    h4: {
      fontSize: '1.25rem',
      '@media (max-width:600px)': {
        fontSize: '1.1rem',
      },
    },
    // Button
    button: {
      fontFamily: SECONDARY_FONT,
      fontSize: '1.1rem',
      '@media (max-width:600px)': {
        fontSize: '0.9rem',
      },
    },
    caption: {
      fontSize: '14px',
    },
    // For code: article header and etc.
    subtitle1: {
      fontSize: '1.1rem',
      '@media (max-width:600px)': {
        fontSize: '1.05rem',
      },
    },
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        input: {
          '&:-webkit-autofill': {
            WebkitBoxShadow: '0 0 0 100px #0d0d0de3 inset',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: '#000000',
          backgroundImage: 'inherit',
        },
      },
    },
  },
};

const appTheme = createTheme(themeConfig);

export { appTheme };
