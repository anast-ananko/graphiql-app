import { useRef, useEffect, FC } from 'react';
import CodeMirror from 'codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror-graphql/mode';
import 'codemirror/addon/hint/show-hint.css';
import 'codemirror/addon/hint/show-hint';
import 'codemirror-graphql/hint';
import 'codemirror/theme/dracula.css';

import { ICodeMirror } from '../../../interfaces/code-mirror';
import { updateQuery } from '../../../store/features/editorSlice';
import { useAppDispatch } from '../../../hooks/hook';

const CodeMirrorGraphQL: FC<ICodeMirror> = ({ onChange }) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const editor = CodeMirror.fromTextArea(textareaRef.current!, {
      mode: 'graphql',
      lineNumbers: true,
      // scrollbarStyle: 'simple',
      tabSize: 2,
      autofocus: true,
    });

    editor.on('change', (instance) => {
      onChange(instance.getValue());
      dispatch(updateQuery(instance.getValue()));
    });

    return () => {
      if (editor) {
        editor.toTextArea();
      }
    };
  }, []);

  return <textarea ref={textareaRef} />;
};

export default CodeMirrorGraphQL;
