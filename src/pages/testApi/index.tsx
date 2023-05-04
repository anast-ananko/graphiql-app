/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC, Suspense, lazy, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useGetGraphqlQuery, useGetSchemaQuery } from '../../store/services/graphQlApi';
import { updateHeaders } from '../../store/features/headersSlice';

import './testApi.style.scss';

const testQuery = `query Query {
  allFilms {
    films {
      title
      director
      releaseDate
      speciesConnection {
        species {
          name
          classification
          homeworld {
            name
          }
        }
      }
    }
  }
}`;

const testIntrospectionQuery = `
  query IntrospectionQuery {
    __schema {
      types {
        kind
      }
    }
  }
`;

const testHeaders = {
  Authorization: 'Bearer mytoken',
};

const TestApi: FC = () => {
  const dispatch = useDispatch();

  // GraphQL API
  const [graphqlQuery, setGraphqlQuery] = useState('');
  const { data, isError, isFetching } = useGetGraphqlQuery(
    {
      queryString: graphqlQuery,
    },
    { skip: !graphqlQuery }
  );

  // Lasy component
  const TestLazyComponent = lazy(() => import('./testLazyComponent'));
  const [introspectionQuery, setIntrospectionQuery]: [string | void, (arg: string) => void] =
    useState();
  const doc = useGetSchemaQuery(introspectionQuery);

  return (
    <>
      <h1>Test Api</h1>
      <div className="control-panel">
        <button
          className="control-panel__add-header-button"
          onClick={() => dispatch(updateHeaders(testHeaders))}
        >
          Add test headers
        </button>
        <button
          className="control-panel__reset-header-button"
          onClick={() => dispatch(updateHeaders({}))}
        >
          Reset test headers
        </button>
        <button
          className="control-panel__make-query-button"
          onClick={() => {
            setGraphqlQuery(testQuery);
          }}
        >
          Make query
        </button>
        <button
          className="control-panel__make-query-button"
          onClick={() => {
            setIntrospectionQuery(testIntrospectionQuery);
          }}
        >
          Make custom IntrospectionQuery
        </button>
        <div className="panel-container">
          <div className="panel panel--documentation">
            <h2 className="panel__title">Documentation panel</h2>
            <Suspense fallback={<h2>---------- Suspense ----------- </h2>}>
              {!doc.isError && !doc.isFetching && doc.data && (
                <TestLazyComponent documentationData={doc.data} />
              )}
              ;
            </Suspense>
          </div>

          <div className="panel panel--response">
            <h2 className="panel__title">Response panel</h2>
            {isError && <h2>Error!!!</h2>}
            {!isError && isFetching && <h2>Loading...</h2>}
            {!isError && data && <pre className="panel__code">{data}</pre>}
          </div>
        </div>
      </div>
    </>
  );
};

export default TestApi;
