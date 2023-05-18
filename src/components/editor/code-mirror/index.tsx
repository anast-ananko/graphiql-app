import { FC, useState, memo } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { graphql } from 'cm6-graphql';
import { buildClientSchema } from 'graphql';

import { ICodeMirror } from '../../../interfaces/code-mirror';
import { updateQuery, selectQuery } from '../../../store/features/editorSlice';
import { useAppDispatch, useAppSelector } from '../../../hooks/hook';
import { useGetGraphQLSchemaQuery } from '../../../store/services/graphQlApi';

const CodeMirrorGraphQL: FC<ICodeMirror> = memo(({ height }) => {
  const [value, setValue] = useState<string>('');
  const query = useAppSelector(selectQuery);

  const dispatch = useAppDispatch();

  const { data, isFetching } = useGetGraphQLSchemaQuery();
  const schema = data && buildClientSchema(data);

  const onChangeValue = (value: string): void => {
    setValue(value);
    dispatch(updateQuery(value));
  };

  return (
    <>
      {isFetching && <div className="codemirror__loading">Loading...</div>}
      {!isFetching && (
        <CodeMirror
          value={query}
          height={`${height}px`}
          width="100%"
          onChange={onChangeValue}
          extensions={[graphql(schema)]}
          basicSetup={{
            autocompletion: true,
            lintKeymap: false,
          }}
        />
      )}
    </>
  );
});

export default CodeMirrorGraphQL;
