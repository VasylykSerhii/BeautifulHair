import { RootState } from '../store';

export const selectUser = (state: RootState) => state?.auth?.user;
export const selectAuthError = (state: RootState) => state?.auth?.error;
