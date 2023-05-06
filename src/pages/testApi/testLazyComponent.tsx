import { FC } from 'react';
import { IntrospectionQuery } from 'graphql';

const TestComponent: FC<{ documentationData: IntrospectionQuery }> = (props) => {
  return (
    <>
      <pre className="panel__code">{JSON.stringify(props.documentationData, null, 2)}</pre>
    </>
  );
};

export default TestComponent;
