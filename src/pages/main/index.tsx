import { FC, useState } from 'react';

import Editor from '../../components/editor';
import Explorer from '../../components/explorer';
import Response from '../../components/response';
import Grid from '@mui/material/Grid';
import { useGetGraphqlQuery } from '../../store/services/graphQlApi';
import { useAppSelector, useAppDispatch } from '../../hooks/hook';
import { validateHeaders } from '../../utils/validateHeaders';
import { addError } from '../../store/features/errorsSlice';
import { selectQuery, selectVariablesString } from '../../store/features/editorSlice';
import { selectHeaders } from '../../store/features/headersSlice';
import { UserHeaders } from '../../interfaces/headersSlice.interfaces';
import { IValidatedHeaders } from '../../interfaces/validatedHeaders';

import { gridMainContainerStyle, gridMainContentStyle } from './main.style';
import './main.scss';

// For testing error boundary
const ErrorComponent = () => {
  throw new Error('Something went wrong');
};

const Main: FC = () => {
  const [graphqlQuery, setGraphqlQuery] = useState<string>('');
  const [variables, setVariables] = useState<UserHeaders>({});
  const query = useAppSelector(selectQuery);
  const variablesString = useAppSelector(selectVariablesString);
  const value = useAppSelector(selectHeaders);

  const dispatch = useAppDispatch();

  const convertVariables = (): UserHeaders => {
    let variables;

    if (variablesString) {
      try {
        variables = JSON.parse(variablesString);
      } catch {
        dispatch(addError({ name: 'Variables Error', message: 'Invalid object of variables' }));
      }
    }

    return variables;
  };

  const { data, isError, isFetching } = useGetGraphqlQuery(
    {
      queryString: graphqlQuery,
      variables,
    },
    { skip: !graphqlQuery }
  );

  const getData = (): void => {
    const errors = validateHeaders(value as IValidatedHeaders);
    const convertedVariables = convertVariables();

    if (!errors.length) {
      setVariables(convertedVariables);
      setGraphqlQuery(query);
    } else {
      errors.forEach((error) => {
        dispatch(addError({ name: 'Headers Error', message: error }));
      });
    }
  };

  return (
    <Grid {...gridMainContainerStyle} className="main__container">
      <Explorer />
      <Grid {...gridMainContentStyle} className="main__content">
        {/* For testing error boundary */}
        <ErrorComponent />
        <Editor getData={getData} />
        <Response data={data} isError={isError} isFetching={isFetching} />
      </Grid>
    </Grid>
  );
};

export default Main;
