import { FC } from 'react';
import { Grid } from '@mui/material';

import Editor from '../../components/editor';
import Explorer from '../../components/explorer';
import Response from '../../components/response';

import './main.scss';

const Main: FC = () => {
  return (
    <Grid
      container
      spacing={2}
      maxWidth={{ xs: '300px', sm: '520px', md: '880px', lg: '1180px' }}
      sx={{ margin: '0 auto', backgroundColor: '#e7ebea' }}
      className="main__container"
    >
      <Grid item xs={12} md={4} lg={4}>
        <Explorer />
      </Grid>
      <Grid item container xs={12} md={8} lg={8} className="main__content">
        <Grid
          item
          container
          xs={12}
          md={12}
          lg={6}
          sx={{ mr: { xs: 1, md: 1, lg: 0 }, pt: 1, backgroundColor: '#FFF' }}
          className="explorer"
        >
          <Editor />
        </Grid>
        <Grid item xs={12} md={12} lg={6}>
          <Response />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Main;
