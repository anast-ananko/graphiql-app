import './header.scss';
import { FC } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase.ts';
import { AppBar, Container, Toolbar, Typography, Button, Grid } from '@mui/material';
import { useAppDispatch } from '../../hooks/hook';
import { authSignOut } from '../../store/auth/authSlice';
import Logo from '../logo';
import { useSelector } from 'react-redux';

const Header: FC = () => {
  const dispatch = useAppDispatch();

  const { uid } = useSelector((state) => state.auth);

  const userSignOut = async () => {
    try {
      await signOut(auth);
      dispatch(authSignOut());
    } catch (error) {
      console.log(error);
    }
  };

  const signOutButton: JSX.Element = (
    <Grid item xs={6}>
      <Grid container justifyContent="flex-end" alignItems="center">
        <Button
          variant="outlined"
          sx={{ backgroundColor: '#F9F871', color: 'black' }}
          onClick={userSignOut}
        >
          Sign out
        </Button>
      </Grid>
    </Grid>
  );

  return (
    <AppBar position="static" className="header">
      <Container maxWidth="xl">
        <Grid container justifyContent="space-between" alignItems="center" spacing={2}>
          <Grid item xs={6}>
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
          </Grid>
          {uid && signOutButton}
        </Grid>
      </Container>
    </AppBar>
  );
};

export default Header;
