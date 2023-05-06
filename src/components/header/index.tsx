import './header.scss';
import { FC } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase.ts';
import { NavLink } from 'react-router-dom';
import { AppBar, Container, Toolbar, Typography, Button } from '@mui/material';
import Logo from '../logo';

const Header: FC = ({ user }) => {
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
    <AppBar position="static" className="header">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Logo />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            className="header__logo"
            sx={
              {
                // display: { xs: 'none', md: 'flex' },
              }
            }
          >
            GraphiQL
          </Typography>
        </Toolbar>
        {buttons}
      </Container>
    </AppBar>
  );
};

export default Header;
