import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

function Home() {
  if (JSON.parse(localStorage.getItem('user'))) {
    return (
      <div className="container">
        <Header />
        <div
          className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1 lg:flex"
          id="mobile-menu"
        >
          <ul className="flex">
            <li className="text-slate-100">
              <Link
                to="/Logout"
                className="font-medium px-3 py-2 text-slate-100 border-1 rounded-lg hover:bg-slate-100 hover:text-slate-900"
              >
                Log out
              </Link>
            </li>
          </ul>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="container">
      <Header />
      <div
        className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1 lg:flex"
        id="mobile-menu"
      >
        <ul className="flex">
          <li className="text-slate-100">
            <Link
              to="/Signup"
              className="font-medium px-3 py-2 text-slate-100 border-1 rounded-lg hover:bg-slate-100 hover:text-slate-900"
            >
              Sign up
            </Link>
            |
            <Link
              to="/Login"
              className="font-medium px-3 py-2 text-slate-100 border-1 rounded-lg hover:bg-slate-100 hover:text-slate-900"
            >
              Log in
            </Link>
          </li>
        </ul>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
