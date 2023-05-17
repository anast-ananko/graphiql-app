import { createTheme } from '@mui/material/styles';

const themeConfig = {
  palette: {
    mode: 'dark',
    primary: {
      main: '#d50032',
      dark: '#ff003c',
      contrastText: '#fff',
    },
    secondary: {
      main: '#ffe919',
    },
    background: {
      paper: '#000',
      default: '#000',
    },
  },
  typography: {
    fontFamily: ['Russo One'].join(','),
    fontSize: 14,
    h2: {
      fontSize: '6rem',
    },
    h4: {
      fontSize: '1.5rem',
    },
    subtitle1: {
      fontSize: '1.1rem',
    },
    button: {
      fontSize: '1.05rem',
    },
    caption: {
      fontSize: '1.2rem',
    },
  },
};

const appTheme = createTheme(themeConfig);

export { appTheme };
