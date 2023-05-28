import { FC } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { json } from '@codemirror/lang-json';

import { useAppDispatch, useAppSelector } from '../../../hooks/hook';
import { updateVariablesString, selectVariablesString } from '../../../store/features/editorSlice';
import { codeMirrorTheme } from '../../app/app.style';

const Variables: FC = () => {
  const variablesString = useAppSelector(selectVariablesString);
  const dispatch = useAppDispatch();

  const handleChange = (value: string): void => {
    dispatch(updateVariablesString(value));
  };

  return (
    <CodeMirror
      value={variablesString}
      height="120px"
      width="100%"
      theme={codeMirrorTheme}
      extensions={[json()]}
      onChange={handleChange}
    />
  );
};

export default Variables;
