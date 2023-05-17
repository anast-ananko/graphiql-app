import { FC } from 'react';
import { Typography, Grid, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import './not-found.scss';

const NotFound: FC = () => {
  const navigate = useNavigate();

  return (
    <div className="not-found">
      <Grid
        container
        justifyContent="center"
        maxWidth={{ xs: '90%', sm: '550px' }}
        className="not-found__container"
      >
        <Typography variant="h2">404</Typography>
        <Typography variant="h4" textAlign="center">
          Great shot kid. That was one in a million.
        </Typography>
        <Button variant="contained" onClick={() => navigate('/')}>
          Let`s get you home
        </Button>
      </Grid>
    </div>
  );
};

export default NotFound;
