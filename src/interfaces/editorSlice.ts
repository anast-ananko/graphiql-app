import { QueryVariables } from './headersSlice.interfaces';

export interface IEditorInitialState {
  query: string;
  variables: QueryVariables | undefined;
}
