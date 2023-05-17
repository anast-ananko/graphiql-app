import { FC, useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';

import { ICodeMirror } from '../../../interfaces/code-mirror';
import { updateQuery, selectQuery } from '../../../store/features/editorSlice';
import { useAppDispatch, useAppSelector } from '../../../hooks/hook';

const CodeMirrorGraphQL: FC<ICodeMirror> = ({ height }) => {
  const [value, setValue] = useState<string>('');
  const query = useAppSelector(selectQuery);

  const dispatch = useAppDispatch();

  const onChangeValue = (value: string) => {
    setValue(value);
    dispatch(updateQuery(value));
  };
  return <CodeMirror value={query} height={`${height}px`} width="100%" onChange={onChangeValue} />;
};

export default CodeMirrorGraphQL;
