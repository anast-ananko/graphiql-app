import { FC } from 'react';
import { Container, Grid, Typography, Link } from '@mui/material';
import { AuthType } from '../../types';
import './auth.scss';

const Auth: FC<AuthType> = ({ form, isLogin }) => {
  return (
    <div className="auth">
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        className="not-found__container"
        rowSpacing={{ xs: 4, sm: 6 }}
        minWidth={{ md: '700px' }}
        sx={{ padding: { xs: '0 10px', sm: '0 30px' } }}
      >
        <Grid item>
          <Typography variant="h2">{isLogin ? 'Login' : 'Create account'}</Typography>
        </Grid>
        <Grid item>{form}</Grid>
        <Grid item container justifyContent="center">
          {isLogin ? (
            <Typography variant="body1">
              If you don`t have account,{' '}
              <Link href="/sign-up" color="secondary" underline="none">
                create account
              </Link>
            </Typography>
          ) : (
            <Typography variant="body1">
              If you have account please{' '}
              <Link href="/sign-in" color="secondary" underline="none">
                login
              </Link>
            </Typography>
          )}
        </Grid>
      </Grid>
      <Container sx={{ display: { xs: 'none', md: 'block' } }}>
        <img className="auth__img" src="auth.png" alt="" />
      </Container>
    </div>
  );
};

export default Auth;
