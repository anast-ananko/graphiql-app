import { FC } from 'react';
import { Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';

import './explorer.scss';

const gridStyle = {
  item: true,
  xs: 12,
  md: 5,
  lg: 4,
  xl: 4,
};

const Explorer: FC = () => {
  const { t: localize } = useTranslation();

  return (
    <Grid {...gridStyle} className="explorer">
      <h1 className="explorer__title">{localize('explorer.title')}</h1>
    </Grid>
  );
};

export default Explorer;
