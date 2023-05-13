import { FC, Suspense, lazy, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useGetGraphqlQuery, useGetSchemaQuery } from '../../store/services/graphQlApi';
import { updateHeaders } from '../../store/features/headersSlice';

import './testApi.style.scss';
import { selectErrorsArray } from '../../store/features/errorsSlice';

const testQuery = `query AllFilms($first: Int) {
  allFilms(first: $first) {
    films {
      id
      title
    }
  }
}`;

const testIntrospectionQuery = `
  query IntrospectionQuery {
    __schema {
      types {
        name
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
      variables: { first: 5 },
    },
    { skip: !graphqlQuery }
  );

  // Lasy component
  const TestLazyComponent = lazy(() => import('./testLazyComponent'));
  const [introspectionQuery, setIntrospectionQuery]: [string | void, (arg: string) => void] =
    useState();
  const doc = useGetSchemaQuery(introspectionQuery);

  // app Errors
  const appErrors = useSelector(selectErrorsArray);

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
            setGraphqlQuery('invalid');
          }}
        >
          Make invalid query
        </button>
        <button
          className="control-panel__make-query-button"
          onClick={() => {
            setIntrospectionQuery(testIntrospectionQuery);
          }}
        >
          Make custom IntrospectionQuery
        </button>
        <button
          className="control-panel__make-query-button"
          onClick={() => {
            setIntrospectionQuery('');
          }}
        >
          Make invalid custom IntrospectionQuery
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

          <div className="panel panel--errors">
            <h2 className="panel__title">Errors panel</h2>
            <div>
              {appErrors &&
                appErrors.map((error) => (
                  <div key={error.message + error.stack}>
                    <h4>Error!!!</h4>
                    {error.message}
                  </div>
                ))}
            </div>
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
