import { AnyAction } from '@reduxjs/toolkit';
import { UserError } from '../interfaces/errorsSlice.interfaces';

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

function convertMessageToReadableString(inputString: string, indentLevel = 2): string {
  const indent = indentLevel >= 0 ? '\t'.repeat(indentLevel) : '';
  let openBraces = 0;

  const formattedLines = inputString
    .split('{')
    .map((line) => {
      const trimedLine = line.trim();
      switch (true) {
        case trimedLine.includes('}'):
          openBraces--;
          return `${indent}\t`.repeat(Math.max(openBraces, 0)) + '{' + trimedLine;
        default:
          const formattedLine = `${indent}\t`.repeat(Math.max(openBraces, 0)) + '{' + trimedLine;
          openBraces++;
          return formattedLine;
      }
    })
    .join('\n')
    .trim();

  return formattedLines;
}

export { getUserErrorFromAction, convertMessageToReadableString };
