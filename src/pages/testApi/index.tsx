/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC, useState } from 'react';
import { useGetResponseQuery } from '../../store/services/graphQlApi';

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

const TestApi: FC = () => {
  const [headers, setHeaders] = useState<Record<string, string>>({
    Authorization: 'Bearer mytoken',
  });

  const { data, isError, isLoading, isFetching } = useGetResponseQuery({ queryString: testQuery });
  return (
    <>
      <h1>Test Api</h1>
      {isError && <h2>Error!!!</h2>}
      {!isError && isFetching && <h2>Loading...</h2>}
      <p className="response">
        <pre className="response__code">{data}</pre>
      </p>
    </>
  );
};

export default TestApi;
