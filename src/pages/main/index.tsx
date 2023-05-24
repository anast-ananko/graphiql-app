import { FC, useState } from 'react';
import Grid from '@mui/material/Grid';
import { useTranslation } from 'react-i18next';

import Editor from '../../components/editor';
import Explorer from '../../components/explorer';
import Response from '../../components/response';
import { useGetGraphqlQuery } from '../../store/services/graphQlApi';
import { useAppSelector, useAppDispatch } from '../../hooks/hook';
import { validateHeaders } from '../../utils/validateHeaders';
import { addError } from '../../store/features/errorsSlice';
import {
  selectQuery,
  selectVariablesString,
  selectHeadersObject,
  updateHeadersObject,
} from '../../store/features/editorSlice';
import { selectHeaders } from '../../store/features/headersSlice';
import { UserHeaders } from '../../interfaces/headersSlice.interfaces';
import { IValidatedHeaders } from '../../interfaces/validatedHeaders';
import { deepCompare } from '../../utils/deepCompare';

import { gridMainContainerStyle, gridMainContentStyle } from './main.style';
import './main.scss';

const Main: FC = () => {
  const [graphqlQuery, setGraphqlQuery] = useState<string>('');
  const [variables, setVariables] = useState<UserHeaders>({});
  const query = useAppSelector(selectQuery);
  const variablesString = useAppSelector(selectVariablesString);
  const value = useAppSelector(selectHeaders);
  const headersObject = useAppSelector(selectHeadersObject);

  const { t: localize } = useTranslation();

  const dispatch = useAppDispatch();

  const convertVariables = (): UserHeaders => {
    let variables = '';

    if (variablesString) {
      try {
        variables = JSON.parse(variablesString);
      } catch {
        dispatch(
          addError({
            name: `${localize('error.variablesError')}`,
            message: `${localize('error.wrongObjectOfVariables')}`,
          })
        );
      }
    }

    return variables as UserHeaders;
  };

  const { data, isError, isFetching, refetch } = useGetGraphqlQuery(
    {
      queryString: graphqlQuery,
      variables,
    },
    { skip: !graphqlQuery }
  );

  const getData = (): void => {
    const errors = validateHeaders(value as IValidatedHeaders, localize);
    if (errors) {
      errors.forEach((error) => {
        dispatch(addError({ name: `${localize('error.headersError')}`, message: error }));
      });
    }
    const convertedVariables = convertVariables();
    dispatch(updateHeadersObject(value));

    if (!errors.length) {
      if (
        !deepCompare(value as { [key: string]: string }, headersObject as { [key: string]: string })
      ) {
        refetch();
      } else {
        setVariables(convertedVariables);
        setGraphqlQuery(query);
      }
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
