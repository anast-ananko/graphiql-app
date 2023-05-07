import { FC } from 'react';
import { Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';

import './explorer.scss';

const Explorer: FC = () => {
  const { t } = useTranslation();

  return (
    <Grid item xs={12} md={4} lg={4} xl={3} className="explorer">
      <h1 className="explorer__title">{t('main.explorer')}</h1>
    </Grid>
  );
};

export default Explorer;
