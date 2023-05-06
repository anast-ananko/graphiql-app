// doesn`t extend from Error for serilization purporse
interface UserError {
  name: string;
  message: string;
  stack?: string;
}

interface ErrorsState {
  value: UserError[];
}

interface AddErrorAction {
  payload: UserError;
  type: string;
}

export type { ErrorsState, AddErrorAction, UserError };
