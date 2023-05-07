import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import graphqlApi from './services/graphQlApi';
import updateHeadersReducer from './features/headersSlice';
import editorReducer from './features/editorSlice';
import langReducer from './features/langSlice';

const appStore = configureStore({
  reducer: {
    [graphqlApi.reducerPath]: graphqlApi.reducer,
    userHeaders: updateHeadersReducer,
    editorReducer,
    langReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(graphqlApi.middleware),
  devTools: process.env.NODE_ENV !== 'production',
});

// Ensure that the hooks are set up correctly
setupListeners(appStore.dispatch);

export default appStore;

export type RootState = ReturnType<typeof appStore.getState>;
export type AppDispatch = typeof appStore.dispatch;
