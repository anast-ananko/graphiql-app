import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { IResponse } from '../../interfaces/responseComponent';

import { gridResponseStyle } from './response.style';
import './response.scss';

const Response: FC<IResponse> = ({ data, isError, isFetching }) => {
  const { t: localize } = useTranslation();

  return (
    <Grid {...gridResponseStyle} className="response">
      <Typography variant="h4" align="center">
        {isError
          ? localize('titles.error')
          : isFetching
          ? localize('titles.loading')
          : data
          ? localize('titles.results')
          : ''}
      </Typography>

      {!isError && !isFetching && (
        <div className="response__container">
          <pre className="response__code">{data}</pre>
        </div>
      )}
    </Grid>
  );
};

export default Response;
