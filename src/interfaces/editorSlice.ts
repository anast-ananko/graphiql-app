import { UserHeaders } from './headersSlice.interfaces';

interface IEditorInitialState {
  query: string;
  variablesString: string;
  headersObject: UserHeaders;
}

export type { IEditorInitialState };
