import { FC } from 'react';
import { Container, Paper, Typography, Grid, Button } from '@mui/material';
import './not-found.scss';

const NotFound: FC = () => {
  return (
    <Paper className="not-found">
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        className="not-found__container"
        rowSpacing={{ xs: 2, sm: 4 }}
        minWidth={{ md: '700px' }}
        sx={{ padding: { xs: '0 10px', sm: '0 30px' } }}
      >
        <Grid item>
          <Typography variant="h1">404</Typography>
        </Grid>
        <Grid item>
          <Typography variant="h3" textAlign="center">
            Great shot kid. That was one in a million.
          </Typography>
        </Grid>
        <Grid item>
          <Button variant="contained" href="/">
            Let`s get you home
          </Button>
        </Grid>
      </Grid>
      <Container sx={{ display: { xs: 'none', md: 'block' } }}>
        <img className="not-found__img" src="not-found.png" alt="" />
      </Container>
    </Paper>
  );
};

export default NotFound;
