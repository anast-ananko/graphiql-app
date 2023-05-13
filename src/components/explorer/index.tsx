import { FC } from 'react';
import { Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';

import './explorer.scss';
import { gridExplorerStyle } from './explorer.style';

const Explorer: FC = () => {
  const { t: localize } = useTranslation();

  return (
    <Grid {...gridExplorerStyle} className="explorer">
      <h1 className="explorer__title">{localize('explorer.title')}</h1>
    </Grid>
  );
};

export default Explorer;
