import { FC, useState } from 'react';
import { Grid } from '@mui/material';

import Editor from '../../components/editor';
import Explorer from '../../components/explorer';
import Response from '../../components/response';
import { useGetGraphqlQuery } from '../../store/services/graphQlApi';
import { useAppSelector, useAppDispatch } from '../../hooks/hook';
import { validateHeaders } from '../../helpers/validateHeaders';
import { addError } from '../../store/features/errorsSlice';

import './main.scss';

const Main: FC = () => {
  const [graphqlQuery, setGraphqlQuery] = useState<string>('');
  const { query, variablesString } = useAppSelector((state) => state.editorReducer);
  const { value } = useAppSelector((state) => state.userHeaders);

  const dispatch = useAppDispatch();

  let variables;
  try {
    variables = JSON.parse(variablesString);
  } catch {}

  const { data, isError, isFetching } = useGetGraphqlQuery(
    {
      queryString: graphqlQuery,
      variables,
    },
    { skip: !graphqlQuery }
  );

  const getData = (): void => {
    const errors = validateHeaders(value);

    if (errors.length === 0) {
      setGraphqlQuery(query);
    } else {
      errors.forEach((error) => {
        dispatch(addError({ name: error, message: error }));
      });
    }
  };

  return (
    <Grid
      container
      spacing={2}
      maxWidth={{ xs: '300px', sm: '520px', md: '880px', lg: '1180px', xl: '1500px' }}
      className="main__container"
    >
      <Explorer />
      <Grid item container xs={12} md={8} lg={8} xl={9} className="main__content">
        <Editor getData={getData} />
        <Response data={data} isError={isError} isFetching={isFetching} />
      </Grid>
    </Grid>
  );
};

export default Main;
