declare module 'codemirror-graphql' {
  import { EditorConfiguration } from 'codemirror';

  interface GraphQLModeOptions {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    schema?: any;
    types?: string;
    keywords?: string;
    autoCompleteLeafs?: boolean;
    autoCompleteObjects?: boolean;
    autoCompleteFieldsOnArguments?: boolean;
    autoCompleteArguments?: boolean;
  }

  const mode: {
    (config: EditorConfiguration, options?: GraphQLModeOptions): void;
  };

  export default mode;
}
