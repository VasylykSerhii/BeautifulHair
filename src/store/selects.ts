import { RootState } from './store';

export const selectHooks = (state: RootState) => state?.hooks;
export const selectAuth = (state: RootState) => state?.auth;
