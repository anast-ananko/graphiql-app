import { useRef, useEffect, FC } from 'react';
import CodeMirror from 'codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror-graphql/mode';
import 'codemirror/addon/hint/show-hint.css';
import 'codemirror/addon/hint/show-hint';
import 'codemirror-graphql/hint';
import 'codemirror/theme/dracula.css';
import 'codemirror-graphql/lint';

import { ICodeMirror } from '../../../interfaces/code-mirror';
import { updateQuery } from '../../../store/features/editorSlice';
import { useAppDispatch } from '../../../hooks/hook';
import { useGetSchemaQuery } from '../../../store/services/graphQlApi';

// import { makeExecutableSchema } from '@graphql-tools/schema';
// import { buildClientSchema, buildSchema, buildASTSchema } from 'graphql';
// import { SchemaIntrospectionResponse } from '../../../interfaces/graphqlApi.interfaces';

const CodeMirrorGraphQL: FC<ICodeMirror> = ({ onChange }) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const dispatch = useAppDispatch();

  const doc = useGetSchemaQuery();
  // console.log(doc);
  //const myGraphQLSchema: GraphQLSchema = buildSchema(JSON.stringify(doc?.data));

  // const t = doc.data?.__schema?.types[0];
  // const queryType = doc.data && doc.data.__schema.types.find((type) => type.name === 'Root');
  // console.log(t);

  useEffect(() => {
    const editor = CodeMirror.fromTextArea(textareaRef.current!, {
      mode: 'graphql',
      hintOptions: {
        //schema: myGraphQLSchema,
      },
      lineNumbers: true,
      extraKeys: {
        'Ctrl-Space': 'autocomplete',
        // lint: (instance: Editor) => ({
        //   schema: myGraphQLSchema,
        // }),
        // hintOptions: {
        //   schema: myGraphQLSchema,
        // },
      },
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
