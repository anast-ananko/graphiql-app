import { FC } from 'react';
import { Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';

import './explorer.scss';

const gridStyle = {
  item: true,
  xs: 12,
  md: 4,
  lg: 4,
  xl: 3,
};

const Explorer: FC = () => {
  const { t } = useTranslation();

  return (
    <Grid {...gridStyle} className="explorer">
      <h1 className="explorer__title">{t('main.explorer')}</h1>
    </Grid>
  );
};

export default Explorer;
