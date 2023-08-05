import { ThemeOptions, createTheme } from '@mui/material/styles';
import { createTheme as codeMirrorCreateTheme } from '@uiw/codemirror-themes';
import { tags as t } from '@lezer/highlight';
import red from '@mui/material/colors/red';
import yellow from '@mui/material/colors/yellow';
import common from '@mui/material/colors/common';

import { PRIMARY_FONT, SECONDARY_FONT } from '../../constants/fontsConstants';

const themeConfig: ThemeOptions = {
  palette: {
    mode: 'dark',
    primary: {
      main: red[800],
      light: red[800],
      dark: red['A700'],
      contrastText: common['white'],
    },
    secondary: {
      main: yellow[500],
      contrastText: common['white'],
    },
    background: {
      paper: common['black'],
      default: common['black'],
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
          backgroundColor: common['black'],
          backgroundImage: 'inherit',
        },
      },
    },
  },
};

const appTheme = createTheme(themeConfig);

const codeMirrorTheme = codeMirrorCreateTheme({
  theme: 'dark',
  settings: {
    background: common['black'],
    caret: common['white'],
  },
  styles: [{ tag: t.keyword, color: red['A700'] }],
});

export { appTheme, codeMirrorTheme };
