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
    },
  },
  typography: {
    fontFamily: ['Rubik'].join(','),
    fontSize: 14,
    h1: {
      fontFamily: 'Russo One',
      fontSize: '6rem',
      '@media (max-width:600px)': {
        fontSize: '4rem',
      },
    },
    h2: {
      fontFamily: 'Russo One',
      fontSize: '2rem',
      '@media (max-width:600px)': {
        fontSize: '1.6rem',
      },
    },
    h3: {
      fontSize: '1.6rem',
      '@media (max-width:600px)': {
        fontSize: '1.25rem',
      },
    },
    h4: {
      fontSize: '1.25rem',
    },
    subtitle1: {
      fontSize: '1.1rem',
    },
    button: {
      fontFamily: 'Russo One',
      fontSize: '1.1rem',
      '@media (max-width:600px)': {
        fontSize: '0.9rem',
      },
    },
    body1: {
      fontSize: '1rem',
    },
  },
};

const appTheme = createTheme(themeConfig);

export { appTheme };
