import { ThemeOptions, createTheme } from '@mui/material/styles';

import { PRIMARY_FONT, SECONDARY_FONT } from '../../constants/fontsConstants';

const themeConfig: ThemeOptions = {
  palette: {
    mode: 'dark',
    primary: {
      main: '#d50032',
      contrastText: '#fff',
    },
    secondary: {
      main: '#ffe919',
      contrastText: '#fff',
    },
    background: {
      paper: '#000000',
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
    // For code: article header and etc.
    subtitle1: {
      fontSize: '1.1rem',
      '@media (max-width:600px)': {
        fontSize: '1.05rem',
      },
    },
  },
};

const appTheme = createTheme(themeConfig);

export { appTheme };
