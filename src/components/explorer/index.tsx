import { FC } from 'react';
import Grid from '@mui/material/Grid';

import './explorer.scss';

const gridStyle = {
  item: true,
  xs: 12,
  md: 4,
  lg: 4,
  xl: 3,
};

const Explorer: FC = () => {
  return (
    <Grid {...gridStyle} className="explorer">
      <h1 className="explorer__title">Explorer</h1>
    </Grid>
  );
};

export default Explorer;
