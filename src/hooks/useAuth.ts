import { getAuth, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword } from 'firebase/auth';
import { useRedux } from 'hooks';
import { authAsync, setUser } from 'store';

const useAuth = () => {
  const { dispatch } = useRedux();

  const authEmail = async ({ login, password }: { [key: string]: string }) => {
    try {
      const auth = getAuth();
      await signInWithEmailAndPassword(auth, login, password);
      const currentUserToken = await auth.currentUser?.getIdTokenResult();
      if (!currentUserToken) return;
      console.log(currentUserToken, currentUserToken.token);

      // dispatch(authAsync({ ...user, isAuth: true }));
    } catch (error: any) {
      // dispatch(setError(error?.code));
    }
  };

  const authGoogle = async () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/userinfo.email');

    try {
      await signInWithPopup(auth, provider);
      const currentUserToken = await auth.currentUser?.getIdTokenResult();

      if (!currentUserToken) return;

      dispatch(
        authAsync({
          idToken: currentUserToken.token,
        }),
      );
    } catch (error: any) {
      // dispatch(setError(error.code));
    }
  };

  return { authGoogle, authEmail };
};

export default useAuth;
