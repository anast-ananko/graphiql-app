import { isRejectedWithValue } from '@reduxjs/toolkit';
import type { MiddlewareAPI, Middleware, AnyAction } from '@reduxjs/toolkit';
import { addError } from '../features/errorsSlice';
import { getUserErrorFromAction } from '../../utils/errorHandling';

const errorApiLogMiddleware: Middleware = (api: MiddlewareAPI) => (next) => (action: AnyAction) => {
  if (isRejectedWithValue(action)) {
    const error = getUserErrorFromAction(action);
    api.dispatch(addError(error));
  }

  return next(action);
};

export { errorApiLogMiddleware };
