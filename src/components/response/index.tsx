import { FC } from 'react';
import Grid from '@mui/material/Grid';

import { IResponse } from '../../interfaces/responseComponent';

import { gridResponseStyle } from './response.style';
import './response.scss';

const Response: FC<IResponse> = ({ data, isError, isFetching }) => {
  return (
    <Grid {...gridResponseStyle} className="response">
      {isError && <h2>Error</h2>}
      {!isError && isFetching && <h2>Loading...</h2>}
      {!isError && (
        <div className="response__container">
          <pre className="response__code">{data}</pre>
        </div>
      )}
    </Grid>
  );
};

export default Response;
