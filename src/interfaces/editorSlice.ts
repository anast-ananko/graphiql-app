import { UserHeaders } from './headersSlice.interfaces';

export interface IEditorInitialState {
  query: string;
  variablesString: string;
  headersObject: UserHeaders;
}
