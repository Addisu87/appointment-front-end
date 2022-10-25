import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  FaHome,
  FaMotorcycle,
  FaBookOpen,
  FaSignInAlt,
  FaKey
} from 'react-icons/fa';
import { GrClose, GrMenu } from 'react-icons/gr';
import Footer from './Footer';
import Header from './Home/Header';

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
  },
  {
    id: 4,
    title: 'Sign in',
    path: '/signin',
    icon: <FaSignInAlt />,
    cName: 'nav-text'
  },
  {
    id: 5,
    title: 'Sign up',
    path: '/signup',
    icon: <FaKey />,
    cName: 'nav-text'
  }
];

function Navigation() {
  // hamburger menu (menu button)
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };

  const closeMenu = () => {
    setNavbarOpen(false);
  };

  return (
    <aside className="w-64" aria-label="Sidebar">
      <div className="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800">
        <Header />
        <button type="button" onClick={handleToggle}>
          {navbarOpen ? (
            <GrClose
              style={{ color: '#7b7b7b', width: '40px', height: '40px' }}
            />
          ) : (
            <GrMenu
              style={{ color: '#7b7b7b', width: '40px', height: '40px' }}
            />
          )}
        </button>
        <div className={`menuNav ${navbarOpen ? ' showMenu' : 'hideMenu'}`}>
          <ul>
            {links.map((link) => (
              <li key={link.id} className={link.cName}>
                <NavLink
                  to={link.path}
                  onClick={() => closeMenu()}
                  exact="true"
                  className="block py-3 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent active-link"
                >
                  {link.icon}
                  <span>{link.title}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <Footer />
      </div>
    </aside>
  );
}

export default Navigation;
