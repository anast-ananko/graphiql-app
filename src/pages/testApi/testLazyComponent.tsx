import { FC } from 'react';
import { SchemaIntrospectionResponse } from '../../interfaces/graphqlApi.interfaces';

const TestComponent: FC<{ documentationData: SchemaIntrospectionResponse }> = (props) => {
  return (
    <>
      <pre className="panel__code">{JSON.stringify(props.documentationData, null, 2)}</pre>
    </>
  );
};

export default TestComponent;
