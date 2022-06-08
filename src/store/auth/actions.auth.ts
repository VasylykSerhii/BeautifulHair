import { removeUser, setError, setUser } from '.';
import { api, URLS } from '../../../api';
import { AppDispatch } from '../store';
import { IAuthProps, IAuthResponse, IToken, IUser } from './types.auth';

export const login = (user: IUser, accessToken: IToken) => (dispatch: AppDispatch) => {
  localStorage.setItem('token', accessToken.access_token);
  localStorage.setItem('refresh_token', accessToken.refresh_token);
  localStorage.setItem('bh-user', JSON.stringify(user));
  dispatch(setUser({ ...user, isAuth: true }));
};

export const authAsync =
  ({ idToken }: IAuthProps) =>
  async (dispatch: AppDispatch) => {
    try {
      const { data }: IAuthResponse = await api.post(URLS.auth, { idToken });

      dispatch(login(data.user, data.accessToken));
    } catch (error: any) {
      dispatch(setError(error?.response?.data));
    }
  };

export const logout = () => async (dispath: AppDispatch) => {
  localStorage.removeItem('bh-user');
  localStorage.removeItem('token');
  localStorage.removeItem('refresh_token');
  dispath(removeUser());
};
