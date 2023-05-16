import { createTheme } from '@mui/material/styles';

const themeConfig = {
  palette: {
    mode: 'dark',
    primary: {
      main: '#d50032',
      dark: '#ff003c',
      contrastText: '#fff',
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
    subtitle2: {
      fontSize: '1.5rem',
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
