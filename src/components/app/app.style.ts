import { createTheme } from '@mui/material/styles';
import { cyan } from '@mui/material/colors';

const themeConfig = {
  palette: {
    primary: {
      main: cyan[600],
      light: cyan[200],
      dark: cyan[900],
      contrastText: '#fff',
    },
  },
};

const appTheme = createTheme(themeConfig);

export { appTheme };
