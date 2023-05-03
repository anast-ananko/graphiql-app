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
      maxWidth={{ xs: '300px', sm: '520px', md: '880px', lg: '1180px', xl: '1500px' }}
      className="main__container"
    >
      <Explorer />
      <Grid item container xs={12} md={8} lg={8} xl={9} className="main__content">
        <Editor />
        <Grid item xs={12} md={12} lg={6}>
          <Response />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Main;
