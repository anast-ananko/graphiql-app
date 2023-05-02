import { useRef, useEffect, FC } from 'react';
import CodeMirror from 'codemirror';

import { ICodeMirror } from '../../interfaces/code-mirror';

import './code-mirror.scss';

const CodeMirrorGraphQL: FC<ICodeMirror> = ({ onChange }) => {
  const editorRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const editor = CodeMirror.fromTextArea(editorRef.current!, {
      mode: 'graphql',
      lineNumbers: true,
      // scrollbarStyle: 'simple',
      tabSize: 2,
      autofocus: true,
    });

    editor.on('change', (instance) => {
      onChange(instance.getValue());
    });

    return () => {
      editor.toTextArea();
    };
  }, []);

  return (
    <>
      <textarea ref={editorRef} />
    </>
  );
};

export default CodeMirrorGraphQL;
