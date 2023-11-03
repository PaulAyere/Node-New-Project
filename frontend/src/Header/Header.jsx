
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCookies } from "react-cookie";

function Header() {
  const [cookies, setCookies] = useCookies(["access_token"]);
  const navigate = useNavigate();

  const logout = () => {
    setCookies("access_token", "");
    window.localStorage.clear();
    navigate("/Login");
  };

  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="space-x-4">
          <Link to="/list" className="text-white hover:text-blue-200">
            Home
          </Link>
          <Link to="/create" className="text-white hover:text-blue-200">
            Post a Job Vacancy
          </Link>
        </div>
        <div className="space-x-4">
          {!cookies.access_token ? (
            <>
              <Link to="/register" className="text-white hover:text-blue-200">
                <i className="fas fa-user mr-2"></i> Register
              </Link>
              <Link to="/login" className="text-white hover:text-blue-200">
                Login <i className="fas fa-arrow-right ml-2"></i>
              </Link>
            </>
          ) : (
            <button onClick={logout}>Logout</button>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Header;
