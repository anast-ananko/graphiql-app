import { FC, useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { graphql } from 'cm6-graphql';
import { buildClientSchema } from 'graphql';

import { updateQuery, selectQuery } from '../../../store/features/editorSlice';
import { useAppDispatch, useAppSelector } from '../../../hooks/hook';
import { useGetGraphQLSchemaQuery } from '../../../store/services/graphQlApi';
import { codeMirrorTheme } from '../../app/app.style';

const CodeEditor: FC = () => {
  const [, setValue] = useState<string>('');
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
          width="100%"
          theme={codeMirrorTheme}
          onChange={onChangeValue}
          extensions={[graphql(schema)]}
          basicSetup={{
            autocompletion: true,
          }}
        />
      )}
    </>
  );
};

export default CodeEditor;
