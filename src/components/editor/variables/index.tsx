import { FC } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { json } from '@codemirror/lang-json';
import { createTheme } from '@uiw/codemirror-themes';
import { tags as t } from '@lezer/highlight';

import { useAppDispatch, useAppSelector } from '../../../hooks/hook';
import { updateVariablesString, selectVariablesString } from '../../../store/features/editorSlice';

const Variables: FC = () => {
  const variablesString = useAppSelector(selectVariablesString);

  const dispatch = useAppDispatch();

  const handleChange = (value: string): void => {
    dispatch(updateVariablesString(value));
  };

  const myTheme = createTheme({
    theme: 'dark',
    settings: {
      background: '#000000',
      caret: '#ffffff',
    },
    styles: [{ tag: t.keyword, color: 'red' }],
  });

  return (
    <CodeMirror
      value={variablesString}
      height="120px"
      width="100%"
      extensions={[json()]}
      theme={myTheme}
      onChange={handleChange}
    />
  );
};

export default Variables;
