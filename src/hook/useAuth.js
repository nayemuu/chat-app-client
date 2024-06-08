import { useSelector } from 'react-redux';

function useAuth() {
  const auth = useSelector((store) => store.auth);
  if (auth?.accessToken && auth?.user && auth?.email) {
    return true;
  }
  return false;
}

export default useAuth;
