import { FC } from 'react';
import { Grid } from '@mui/material';

import './response.scss';

interface IResponse {
  data: string | undefined;
  isError: boolean;
  isFetching: boolean;
}

const Response: FC<IResponse> = ({ data, isError, isFetching }) => {
  return (
    <Grid item xs={12} md={12} lg={6} className="response__cont">
      {isError && <h2>Error</h2>}
      {!isError && isFetching && <h2>Loading...</h2>}
      {!isError && (
        <div className="response">
          <pre className="response__code">{data}</pre>
        </div>
      )}
    </Grid>
  );
};

export default Response;
