import { AnyAction, configureStore, ThunkDispatch } from '@reduxjs/toolkit';
import rootReducer from './reducers';
import { IHooksState } from './hooks/reducers.hooks';

export interface IStore {
  hooks: IHooksState;
}
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware()],
  devTools: process.env.NEXT_PUBLIC_VARIABLE !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = ThunkDispatch<RootState, any, AnyAction>;

export default store;
