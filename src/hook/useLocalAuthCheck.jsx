import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { userLoggedIn } from '../redux/features/auth/authSlice';

function useLocalAuthCheck() {
  const [authChecked, setAuthChecked] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const localAuth = localStorage.getItem('auth');
    // console.log(localAuth);
    if (localAuth) {
      const auth = JSON.parse(localAuth);
      if (auth?.accessToken && auth?.user && auth?.email) {
        // console.log(auth);
        dispatch(
          userLoggedIn({
            accessToken: auth.accessToken,
            user: auth.user,
            email: auth.email
          })
        );
      }
    }

    setAuthChecked(true);
  }, [dispatch, setAuthChecked]);

  return authChecked;
}

export default useLocalAuthCheck;
