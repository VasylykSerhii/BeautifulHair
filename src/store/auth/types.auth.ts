export interface IUser {
  email: string;
  id: number | null;
  isAuth: boolean | null;
  birthday: string;
  followers: number;
  following: number;
  fullName: null;
  phone: number | null;
  registered_at: string;
  roles: string[];
  selling: number;
  status: string | null;
  userName: string;
}

export interface IToken {
  access_token: string;
  refresh_token: string;
}

export interface ITypeAuth {
  isLogin: boolean;
  loading: boolean;
  error: string;
  user: IUser | null;
}

export interface IAuthResponse {
  data: {
    user: IUser;
    accessToken: IToken;
  };
}

export interface IAuthProps {
  idToken: string;
}
