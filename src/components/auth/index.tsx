import { FC } from 'react';
import { AuthType } from '../../types';
import { Container, Grid, Typography, Link } from '@mui/material';
import { authContainer, authImage, authLink, authRedirectLink } from './auth.style.ts';
import './auth.scss';

const Auth: FC<AuthType> = ({ form, isLogin }) => {
  return (
    <div className="auth">
      <Grid className="auth__container" {...authContainer}>
        <Grid item>
          <Typography variant="h2">{isLogin ? 'Login' : 'Create account'}</Typography>
        </Grid>
        <Grid item>{form}</Grid>
        <Grid {...authRedirectLink}>
          {isLogin ? (
            <Typography variant="body1">
              If you don`t have account,{' '}
              <Link href="/sign-up" {...authLink}>
                create account
              </Link>
            </Typography>
          ) : (
            <Typography variant="body1">
              If you have account please{' '}
              <Link href="/sign-in" {...authLink}>
                login
              </Link>
            </Typography>
          )}
        </Grid>
      </Grid>
      <Container {...authImage}>
        <img className="auth__img" src="auth.png" alt="" />
      </Container>
    </div>
  );
};

export default Auth;
