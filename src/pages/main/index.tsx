import { FC, useState } from 'react';
import { Grid } from '@mui/material';

import Editor from '../../components/editor';
import Explorer from '../../components/explorer';
import Response from '../../components/response';
import { useGetGraphqlQuery } from '../../store/services/graphQlApi';
import { useAppSelector, useAppDispatch } from '../../hooks/hook';
import { validateHeaders } from '../../utils/validateHeaders';
import { addError } from '../../store/features/errorsSlice';
import { IValidatedHeaders } from '../../interfaces/validatedHeaders';
import { UserHeaders } from '../../interfaces/headersSlice.interfaces';

import { gridMainContainerStyle, gridMainContentStyle } from './main.style';
import './main.scss';

const Main: FC = () => {
  const [graphqlQuery, setGraphqlQuery] = useState<string>('');
  const [variables, setVariables] = useState<UserHeaders>({});
  const { query, variablesString } = useAppSelector((state) => state.editorReducer);
  const { value } = useAppSelector((state) => state.userHeaders);

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
        <Editor getData={getData} />
        <Response data={data} isError={isError} isFetching={isFetching} />
      </Grid>
    </Grid>
  );
};

export default Main;
