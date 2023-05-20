import { createTheme } from '@mui/material/styles';

const themeConfig: object = {
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
    fontFamily: ['Rubik', 'sans serif'].join(','),
    fontSize: 14,
    h1: {
      fontFamily: ['Russo One', 'arial'].join(','),
      fontSize: '6rem',
      '@media (max-width:600px)': {
        fontSize: '4rem',
      },
    },
    h2: {
      fontFamily: ['Russo One', 'arial'].join(','),
      fontSize: '1.8rem',
      '@media (max-width:600px)': {
        fontSize: '1.4rem',
      },
    },
    h3: {
      fontSize: '1.4rem',
      '@media (max-width:600px)': {
        fontSize: '1.2rem',
      },
      fontWeight: 700,
    },
    h4: {
      fontSize: '1.25rem',
    },
    subtitle1: {
      fontSize: '1.1rem',
    },
    button: {
      fontFamily: ['Russo One', 'arial'].join(','),
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
