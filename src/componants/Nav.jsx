import { Link } from "react-router-dom";
import { useAuth } from "../protectRoutes/authContext";
import { Logout } from "../API/auth";

export default function Nav() {
  const { isAuthenticated, logout } = useAuth();
  // const navigate = useNavigate()

  const handleLogout = () => {
    Logout();
    logout();
    // navigate('/')
  };

  return (
    <>
      <nav className="bg-blue-50 mb-2 shadow-md w-full h-auto flex justify-around items-center py-5 px-4">
        <div className="w-5/12">
          <h1 className="font-bold flex">
            <Link
               to={isAuthenticated ? "/todos" : '/'}
              className="font-thin flex text-xl text-blue-400"
            >
              TO
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="rgb(96 165 250)"
                className="w-7 h-7 mx-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75"
                />
              </svg>
              DO
            </Link>
          </h1>
        </div>
        <div className="lg:w-5/12 w-7/12 flex justify-around">
          <Link to={'/'} className="bg-blue-50 hover:bg-blue-400 border border-blue-500 lg:w-3/12 w-5/12 p-2 text-center text-blue-500 hover:text-white font-bold">
             Register
          </Link>
          {isAuthenticated ? (
            <button
              onClick={handleLogout}
              className="bg-blue-50 border hover:bg-blue-400 transition-all border-blue-500 lg:w-3/12 w-5/12  p-2 text-center text-blue-500 hover:text-white font-bold"
            >
              logout
            </button>
          ) : (
            <Link to={'/login'} className="bg-blue-400 hover:bg-blue-50   lg:w-3/12 w-5/12 p-2 text-center text-white hover:text-blue-500 border border-blue-500 transition-all font-bold">
              login
            </Link>
          )}
        </div>
      </nav>
    </>
  );
}
