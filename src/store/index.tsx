import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import graphqlApi from './services/graphQlApi';
import updateHeadersReducer from './features/headersSlice';
import errorsReducer from './features/errorsSlice';
import editorReducer from './features/editorSlice';
import { errorApiLogMiddleware } from './services/errorApiLogMiddleware';

const customAppMiddlewares = [graphqlApi.middleware, errorApiLogMiddleware];

const appStore = configureStore({
  reducer: {
    [graphqlApi.reducerPath]: graphqlApi.reducer,
    userHeaders: updateHeadersReducer,
    userErrors: errorsReducer,
    editorReducer: editorReducer,
  },
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), ...customAppMiddlewares],
  devTools: process.env.NODE_ENV !== 'production',
});

// Ensure that the hooks are set up correctly
setupListeners(appStore.dispatch);

export type RootState = ReturnType<typeof appStore.getState>;
export type AppDispatch = typeof appStore.dispatch;

export default appStore;
