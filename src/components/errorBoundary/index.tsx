import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import { useTranslation } from 'react-i18next';

import { IFallbackProps } from '../../interfaces/fallbackProps';

const Fallback: FC<IFallbackProps> = ({ error, resetErrorBoundary }) => {
  const navigate = useNavigate();
  const { t: localize } = useTranslation();

  const reloadApp = (): void => {
    navigate('/');
  };

  const handleReset = (): void => {
    resetErrorBoundary();
    reloadApp();
  };

  return (
    <div role="alert" className="alert">
      <h3 className="alert__title">{localize('error.errorMainText')}</h3>
      <div className="alert__text">{error.message}</div>
      <Button variant="outlined" onClick={handleReset}>
        {localize('buttons.reload')}
      </Button>
    </div>
  );
};

export { Fallback };
