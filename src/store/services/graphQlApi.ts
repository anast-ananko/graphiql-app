/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApi } from '@reduxjs/toolkit/query/react';
import { gql } from 'graphql-request';
import { graphqlRequestBaseQuery } from '@rtk-query/graphql-request-base-query';
import { API_BASE_URL } from '../../constants/apiConstants';
import { RootState } from '..';
import { HeadersKeys, UserHeaders, QueryVariables } from '../../interfaces/headersSlice.interfaces';

export const graphqlApi = createApi({
  reducerPath: 'StarWars API',
  baseQuery: graphqlRequestBaseQuery({
    url: API_BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      const userHeaders: UserHeaders = (getState() as RootState)?.userHeaders.value;

      if (userHeaders) {
        const keys = Object.keys(userHeaders) as HeadersKeys[];
        keys.forEach((key) => {
          if (typeof userHeaders[key] === 'string') {
            headers.set(key, userHeaders[key] as string);
          }
        });
      }

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getGraphql: builder.query<string, { queryString: string; variables?: QueryVariables }>({
      query: ({ queryString, variables }) => ({
        document: gql`
          ${queryString}
        `,
        variables: { ...variables },
      }),
      transformResponse: (responseData: any): string => {
        const responseString = JSON.stringify(responseData, null, 2);
        return responseString;
      },
    }),
  }),
});

export const { useGetGraphqlQuery } = graphqlApi;

export default graphqlApi;
