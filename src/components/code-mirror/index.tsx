import { useRef, useEffect, FC } from 'react';
import CodeMirror from 'codemirror';

import './code-mirror.scss';

import 'codemirror-graphql/mode';

interface Props {
  onChange: (value: string) => void;
}

const CodeMirrorGraphQL: FC<Props> = ({ onChange }) => {
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
