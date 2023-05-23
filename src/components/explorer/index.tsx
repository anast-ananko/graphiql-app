import { FC, Suspense, lazy, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Grid from '@mui/material/Grid';
import LinearProgress from '@mui/material/LinearProgress';
import Button from '@mui/material/Button';

import './explorer.scss';
import { gridExplorerStyle, gridExplorerStylesSx } from './explorer.style';

const LazyDocumentation = lazy(() => import('../documentationPanel'));

const Explorer: FC = () => {
  const { t: localize } = useTranslation();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function openDocumentation() {
    setIsOpen(true);
  }

  return (
    <Grid {...gridExplorerStyle} className="explorer">
      {!isOpen && (
        <Button onClick={openDocumentation} hidden={isOpen} size="large">
          {localize('buttons.openDocumentation')}
        </Button>
      )}
      <Suspense
        fallback={
          <>
            <LinearProgress />
          </>
        }
      >
        {isOpen && <LazyDocumentation openState={isOpen} />}
      </Suspense>
    </Grid>
  );
};

export default Explorer;
