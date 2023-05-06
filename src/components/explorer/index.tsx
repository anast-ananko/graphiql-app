import { FC } from 'react';
import { Grid } from '@mui/material';

import './explorer.scss';

const Explorer: FC = () => {
  return (
    <Grid item xs={12} md={4} lg={4} xl={3} className="explorer">
      <h1 className="explorer__title">Explorer</h1>
    </Grid>
  );
};

export default Explorer;
