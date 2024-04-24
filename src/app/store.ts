import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { authApi } from '../services/AuthApi';
import { setupListeners } from '@reduxjs/toolkit/query/react';



export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
setupListeners(store.dispatch);



