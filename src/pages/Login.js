import { Link, useNavigate } from 'react-router-dom';
import logoImage from '../assets/images/lws-logo-light.svg';
import Error from '../components/ui/Error';
import { useEffect, useState } from 'react';
import { useLoginMutation } from '../redux/features/auth/authApi';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const [login, { isSuccess, isError, error: responseError, data }] =
    useLoginMutation();

  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();

    // console.log('email = ', email);
    // console.log('password = ', password);
    setError('');
    login({ email, password });
  };

  useEffect(() => {
    if (isError) {
      if (responseError?.data) {
        console.log('error get from server = ', responseError.data);
        setError(responseError.data.message);
      } else {
        setError('Login Failed');
      }
    }

    if (isSuccess) {
      // console.log('isSuccess = ', isSuccess);
      // console.log('data after Success = ', data);
      // হতেই পারে স্বাভাবিক, কেউ যদি url change করে  request  পাঠায়
      // sure হওয়ার জন্য যেসব dataগুলো অবশ্যই লাগবে, তা verify করে তারপর redirect করবো
      if (data?.accessToken && data?.name && data?.email) {
        // console.log('navigate to / route')
        navigate('/inbox');
      }
    }
  }, [isError, isSuccess, data, navigate]);

  return (
    <div className="grid place-items-center h-screen bg-[#F9FAFB">
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <Link to="/">
              <img
                className="mx-auto h-12 w-auto"
                src={logoImage}
                alt="Learn with sumit"
              />
            </Link>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Sign in to your account
            </h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={submitHandler}>
            <input type="hidden" name="remember" value="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-violet-500 focus:border-violet-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-violet-500 focus:border-violet-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="flex items-center justify-end">
              <div className="text-sm">
                <Link
                  to="/register"
                  className="font-medium text-violet-600 hover:text-violet-500"
                >
                  Register
                </Link>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-violet-600 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500"
              >
                Sign in
              </button>
            </div>

            {error && <Error message={error} />}
          </form>
        </div>
      </div>
    </div>
  );
}
