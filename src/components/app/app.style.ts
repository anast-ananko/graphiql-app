import { createTheme } from '@mui/material/styles';

const themeConfig = {
  palette: {
    primary: {
      main: '#fa444b',
    },
    text: {
      primary: '#fff',
    },
  },
  typography: {
    allVariants: {
      color: '#fff',
    },
    fontFamily: ['Russo One'].join(','),
    fontSize: 16,
    h2: {
      fontSize: '6rem',
    },
    subtitle2: {
      fontSize: '1.5rem',
    },
    button: {
      fontSize: '1.05rem',
    },
  },
};

const appTheme = createTheme(themeConfig);

export { appTheme };
