import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaMotorcycle, FaBookOpen, FaBars } from 'react-icons/fa';

const links = [
  {
    id: 1,
    title: 'Home',
    path: '/',
    icon: <FaHome />,
    cName: 'nav-text'
  },
  {
    id: 2,
    title: 'Motorcycles',
    path: '/motorcycles',
    icon: <FaMotorcycle />,
    cName: 'nav-text'
  },
  {
    id: 3,
    title: 'Reservations',
    path: '/reservations',
    icon: <FaBookOpen />,
    cName: 'nav-text'
  }
];

function Navbar() {
  return (
    <>
      <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <a
            href="https://www.mototechindia.com/neiman-marcus-limited-edition-fighter/"
            className="flex items-center"
          >
            <img
              src="https://cdn.luxe.digital/media/20220130151643/best-electric-motorcycles-2022-sondors-metacycle-luxe-digital-1-780x520.jpg"
              className="mr-3 h-6 sm:h-9"
              alt="Motorcycle Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Appointment
            </span>
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <FaBars />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              {links.map((link) => (
                <li key={link.id} className={link.cName}>
                  <Link
                    to={link.path}
                    className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    {link.icon}
                    <span>{link.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
