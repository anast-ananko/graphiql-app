import { FC } from 'react';
import { Container, Typography, Grid, Button } from '@mui/material';
import { notFoundContainer, notFoundImage } from './notFound.style.ts';
import './not-found.scss';

const NotFound: FC = () => {
  return (
    <div className="not-found">
      <Grid className="not-found__container" {...notFoundContainer}>
        <Grid item>
          <Typography variant="h1">404</Typography>
        </Grid>
        <Grid item>
          <Typography variant="h3" textAlign="center">
            Great shot kid. That was one in a million.
          </Typography>
        </Grid>
        <Grid item>
          <Button variant="outlined" href="/">
            Let`s get you home
          </Button>
        </Grid>
      </Grid>
      <Container {...notFoundImage}>
        <img className="not-found__img" src="not-found.png" alt="" />
      </Container>
    </div>
  );
};

export default NotFound;
