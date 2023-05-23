import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Typography, Grid, Button } from '@mui/material';

import { notFoundContainer, notFoundImage } from './notFound.style.ts';
import './not-found.scss';

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
          <Button variant="outlined" href="/">
            {localize('notFound.button')}
          </Button>
        </Grid>
      </Grid>
      <Container {...notFoundImage}>
        <img className="not-found__img" src="not-found.png" alt="Not-found" />
      </Container>
    </div>
  );
};

export default NotFound;
