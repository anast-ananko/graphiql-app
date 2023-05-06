import './header.scss';
import { FC } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase.ts';
import { NavLink } from 'react-router-dom';
import { AppBar, Container, Toolbar, Typography, ThemeProvider, Button } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import Logo from '../logo';

const Header: FC = ({ user }) => {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#00acc1',
      },
    },
  });

  const userSignOut = () => {
    signOut(auth)
      .then(() => console.log('sign out successful'))
      .catch((error) => console.log(error));
  };

  const buttons: JSX.Element = user ? (
    <Button
      variant="outlined"
      sx={{ backgroundColor: '#F9F871', color: 'black' }}
      onClick={userSignOut}
    >
      Sign out
    </Button>
  ) : (
    <>
      <NavLink to="/login">
        <Button variant="outlined" sx={{ backgroundColor: '#B9F181', color: 'black' }}>
          Sign in
        </Button>
      </NavLink>
      <NavLink to="/registration">
        <Button variant="outlined" sx={{ backgroundColor: '#B9F181', color: 'black' }}>
          Sign up
        </Button>
      </NavLink>
    </>
  );

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
                // display: { xs: 'none', md: 'flex' },
                fontFamily: 'Nunito',
                fontWeight: 700,
                letterSpacing: '.1rem',
                color: '#B9F181',
                textDecoration: 'none',
              }}
            >
              GraphiQL
            </Typography>
            {buttons}
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};

export default Header;
