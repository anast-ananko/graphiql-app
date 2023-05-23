import { AnyAction } from '@reduxjs/toolkit';
import { UserError, BracketFormater } from '../interfaces/errorsSlice.interfaces';

function getUserErrorFromAction(action: AnyAction): UserError {
  const payload = action.payload;
  const error: UserError = { name: 'App Error', message: 'Unknown App Error' };
  if (typeof payload === 'object') {
    if (typeof payload.message === 'string') {
      error.message = payload.message;
    }
    if (typeof payload.name === 'string') {
      error.name = payload.name;
    }
    if (typeof payload.stack === 'string') {
      error.stack = payload.stack;
    }
  }
  return error;
}

function convertMessageToReadableString(inputString: string, spacer = '   '): string {
  const formattedStr = inputString.split('').map(getBracketsFormater('{', '}', spacer)).join('');

  return formattedStr;
}

function getBracketsFormater(
  leftBracket: string,
  rightBracket: string,
  spacer = ' '
): BracketFormater {
  let bracketLevel = 0;

  return (char: string, index: number, arr: string[]) => {
    if (char === leftBracket) {
      bracketLevel++;
      return `${leftBracket}\n${spacer.repeat(bracketLevel)}`;
    }

    if (char === rightBracket) {
      const nextChar = arr?.[index + 1];
      const charStart = bracketLevel ? '\n' : '';
      const charEnd = nextChar === rightBracket || nextChar === ']' ? '' : '\n';
      const formatedChar = `${charStart}${spacer.repeat(bracketLevel)}${rightBracket}${charEnd}`;

      if (bracketLevel) {
        bracketLevel--;
      }

      return formatedChar;
    }

    return char;
  };
}

export { getUserErrorFromAction, convertMessageToReadableString };
