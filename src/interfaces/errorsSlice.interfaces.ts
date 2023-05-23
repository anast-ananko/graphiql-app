// doesn`t extend from Error for serilization purporse
interface UserError {
  name: string;
  message: string;
  stack?: string;
}

interface ErrorsState {
  value: UserError[];
}

type BracketFormater = (char: string, index: number, arr: string[]) => string;

export type { ErrorsState, UserError, BracketFormater };
