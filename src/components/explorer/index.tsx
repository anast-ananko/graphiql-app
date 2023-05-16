import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import DocumentationPanel from '../documentation';

import { Grid } from '@mui/material';

import './explorer.scss';
import { gridExplorerStyle } from './explorer.style';

const Explorer: FC = () => {
  const { t: localize } = useTranslation();

  return (
    <Grid {...gridExplorerStyle} className="explorer">
      <h1 className="explorer__title">{localize('explorer.title')}</h1>
      <DocumentationPanel></DocumentationPanel>
    </Grid>
  );
};

export default Explorer;
