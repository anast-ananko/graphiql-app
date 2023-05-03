/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useGetGraphqlQuery } from '../../store/services/graphQlApi';

import './testApi.style.scss';
import { updateHeaders } from '../../store/features/headersSlice';

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

const testHeaders = {
  Authorization: 'Bearer mytoken',
};

const TestApi: FC = () => {
  const dispatch = useDispatch();
  const [graphqlQuery, setGraphqlQuery] = useState('');
  const { data, isError, isFetching, refetch } = useGetGraphqlQuery(
    {
      queryString: graphqlQuery,
    },
    { skip: !graphqlQuery }
  );
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
            refetch();
          }}
        >
          Make query
        </button>
      </div>
      {isError && <h2>Error!!!</h2>}
      {!isError && isFetching && <h2>Loading...</h2>}
      <div className="response">
        <h2 className="response__title">Response:</h2>
        <pre className="response__code">{data}</pre>
      </div>
    </>
  );
};

export default TestApi;
