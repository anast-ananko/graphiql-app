import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import DocumentationPanel from '../documentation';

import { Grid } from '@mui/material';

import './explorer.scss';

const gridStyle = {
  item: true,
  xs: 12,
  md: 4,
  lg: 4,
  xl: 3,
};

const Explorer: FC = () => {
  const { t: localize } = useTranslation();

  return (
    <Grid {...gridStyle} className="explorer">
      <h1 className="explorer__title">{localize('explorer.title')}</h1>
      <DocumentationPanel></DocumentationPanel>
    </Grid>
  );
};

export default Explorer;
