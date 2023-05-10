import { FC } from 'react';
import { useSelector } from 'react-redux';
import { Button, Grid } from '@mui/material';
import { NavLink } from 'react-router-dom';
import './welcome.scss';

const Welcome: FC = () => {
  const { uid } = useSelector((state) => state.auth);

  const buttons: JSX.Element = uid ? (
    <Grid container columnGap={1} justifyContent="flex-end" alignItems="center">
      <NavLink to="/main">
        <Button variant="outlined">Go to main page</Button>
      </NavLink>
    </Grid>
  ) : (
    <Grid container columnGap={1} justifyContent="flex-end" alignItems="center">
      <NavLink to="/login">
        <Button variant="outlined">Sign in</Button>
      </NavLink>
      <NavLink to="/registration">
        <Button variant="outlined">Sign up</Button>
      </NavLink>
    </Grid>
  );

  return (
    <>
      <h1>Welcome page</h1>
      {buttons}
    </>
  );
};

export default Welcome;
