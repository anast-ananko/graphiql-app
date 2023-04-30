import { FC } from 'react';
import { AppBar, Container, Toolbar, Typography, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';

import Logo from '../logo';

import './header.scss';

const Header: FC = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#00acc1',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static">
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Logo />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                ml: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'Nunito',
                fontWeight: 700,
                letterSpacing: '.1rem',
                color: '#B9F181',
                textDecoration: 'none',
              }}
            >
              GraphiQL
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};

export default Header;
