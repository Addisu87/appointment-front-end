import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  FaHome,
  FaMotorcycle,
  FaBookOpen,
  FaSignInAlt,
  FaKey,
  FaChevronCircleLeft
} from 'react-icons/fa';

function Navigation() {
  const [open, setOpen] = useState(true);

  const Menus = [
    {
      id: 1,
      title: 'Home',
      path: '/',
      icon: <FaHome />,
      gap: true
    },
    {
      id: 2,
      title: 'Motorcycles',
      path: '/motorcycles',
      icon: <FaMotorcycle />
    },
    {
      id: 3,
      title: 'Reservations',
      path: '/reservations',
      icon: <FaBookOpen />,
      gap: true
    },
    {
      id: 4,
      title: 'Sign in',
      path: '/signin',
      icon: <FaSignInAlt />
    },
    {
      id: 5,
      title: 'Sign up',
      path: '/signup',
      icon: <FaKey />
    }
  ];

  return (
    <div className="flex">
      <div
        className={`${
          open ? 'w-72' : 'w-20'
        } bg-dark-purple h-screen p-5 pt-8 relative duration-300`}
      >
        <FaChevronCircleLeft
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple border-2 rounded-full ${
            !open && 'rotate-180'
          }`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <FaMotorcycle
            className={`cursor-pointer duration-500 ${
              open && 'rotate-[360deg]'
            }`}
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 dark:text-white ${
              !open && 'scale-0'
            }`}
          >
            Motorcycle
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((link, id) => (
            <li
              key={link.id}
              className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-400 text-sm items-center gap-x-4 ${
                link.gap ? 'mt-9' : 'mt-2'
              } ${id === 0 && 'bg-light-white'}`}
            >
              <NavLink to={link.path}>
                {link.icon}
                <span
                  className={`${!open && 'hidden'} origin-left duration-200`}
                >
                  {link.title}
                </span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="h-screen flex-1 p-7">
        <h1 className="text-2xl font-semibold">Home page</h1>
      </div>
    </div>
  );
}

export default Navigation;
