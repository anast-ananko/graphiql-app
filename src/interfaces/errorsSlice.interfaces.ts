// doesn`t extend from Error for serilization purporse
interface UserError {
  name: string;
  message: string;
  stack?: string;
}

interface ErrorsState {
  value: UserError[];
}

export type { ErrorsState, UserError };
