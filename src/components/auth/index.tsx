import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Grid, Typography, Link } from '@mui/material';

import { AuthType } from '../../types';

import { authContainer, authImage, authLink, authRedirectLink } from './auth.style.ts';
import './auth.scss';

const Auth: FC<AuthType> = ({ form, isLogin }) => {
  const { t: localize } = useTranslation();

  return (
    <div className="auth">
      <Grid className="auth__container" {...authContainer}>
        <Grid item>
          <Typography variant="h2">
            {isLogin ? `${localize('auth.login')}` : `${localize('auth.createAccount')}`}
          </Typography>
        </Grid>
        <Grid item>{form}</Grid>
        <Grid {...authRedirectLink}>
          {isLogin ? (
            <Typography variant="body1">
              {localize('auth.pageLogin-1')}
              <Link href="/sign-up" {...authLink}>
                {localize('auth.pageLogin-2')}
              </Link>
            </Typography>
          ) : (
            <Typography variant="body1">
              {localize('auth.pageRegistr-1')}
              <Link href="/sign-in" {...authLink}>
                {localize('auth.pageRegistr-2')}
              </Link>
            </Typography>
          )}
        </Grid>
      </Grid>
      <Container {...authImage}>
        <img className="auth__img" src="auth.png" alt="Auth" />
      </Container>
    </div>
  );
};

export default Auth;
