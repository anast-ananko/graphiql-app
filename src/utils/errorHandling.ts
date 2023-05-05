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

export { getUserErrorFromAction };
