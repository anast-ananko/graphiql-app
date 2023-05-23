import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Typography, Grid, Button } from '@mui/material';

import { notFoundContainer, notFoundImage } from './notFound.style.ts';
import './not-found.scss';
import { NavLink } from 'react-router-dom';
import { APP_ROUTE_PATHS } from '../../constants/appRoutingConstants.ts';

const NotFound: FC = () => {
  const { t: localize } = useTranslation();

  return (
    <div className="not-found">
      <Grid className="not-found__container" {...notFoundContainer}>
        <Grid item>
          <Typography variant="h1">404</Typography>
        </Grid>
        <Grid item>
          <Typography variant="h3" textAlign="center">
            {localize('notFound.text')}
          </Typography>
        </Grid>
        <Grid item>
          <NavLink key="sign-up" to={APP_ROUTE_PATHS.ROOT}>
            <Button variant="outlined">{localize('notFound.button')}</Button>
          </NavLink>
        </Grid>
      </Grid>
      <Container {...notFoundImage}>
        <img className="not-found__img" src="not-found.png" alt="Not-found" />
      </Container>
    </div>
  );
};

export default NotFound;
