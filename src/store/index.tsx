import { configureStore } from '@reduxjs/toolkit';
import graphqlApi from './services/graphQlApi';
import updateHeadersReducer from './features/headersSlice';

const appStore = configureStore({
  reducer: {
    [graphqlApi.reducerPath]: graphqlApi.reducer,
    userHeaders: updateHeadersReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(graphqlApi.middleware),
  devTools: process.env.NODE_ENV !== 'production',
});

export default appStore;

export type RootState = ReturnType<typeof appStore.getState>;
export type AppDispatch = typeof appStore.dispatch;
