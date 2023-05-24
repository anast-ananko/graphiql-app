import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Grid, Typography, Button } from '@mui/material';

import { AuthType } from '../../types';

import {
  authContainer,
  authImage,
  authButton,
  authRedirectLink,
  preAuthButtonText,
} from './auth.style.ts';
import './auth.scss';
import { NavLink } from 'react-router-dom';
import { APP_ROUTE_PATHS } from '../../constants/appRoutingConstants.ts';

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
            <Typography {...preAuthButtonText}>
              {localize('auth.pageLogin-1')}
              <NavLink to={APP_ROUTE_PATHS.SIGN_UP}>
                <Button {...authButton}>{localize('auth.pageLogin-2')}</Button>
              </NavLink>
            </Typography>
          ) : (
            <Typography {...preAuthButtonText}>
              {localize('auth.pageRegistr-1')}
              <NavLink to={APP_ROUTE_PATHS.SIGN_IN}>
                <Button {...authButton}>{localize('auth.pageRegistr-2')}</Button>
              </NavLink>
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
