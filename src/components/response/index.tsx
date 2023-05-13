import { FC } from 'react';
import { Grid } from '@mui/material';

import { IResponse } from '../../interfaces/responseComponent';

import './response.scss';

const Response: FC<IResponse> = ({ data, isError, isFetching }) => {
  return (
    <Grid item xs={12} md={12} lg={6} className="response">
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
