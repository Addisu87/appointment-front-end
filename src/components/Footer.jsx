import React from 'react';
import {
  FaAngellist,
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaMotorcycle
} from 'react-icons/fa';

function Footer() {
  return (
    <footer className="p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-4 dark:bg-gray-800">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
        <a href="https://github.com/Addisu87" className="hover:underline">
          <FaMotorcycle />
        </a>
        © 2022, All Rights Reserved.
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
          <a
            href="https://www.facebook.com/addisuhaile87/"
            className="mr-4 hover:underline md:mr-6"
          >
            <FaFacebookF />
            <span className="sr-only">Facebook page</span>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/Addisu87"
            className="mr-4 hover:underline md:mr-6"
          >
            <FaGithub />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/addisu-tedla/"
            className="mr-4 hover:underline md:mr-6"
          >
            <FaLinkedinIn />
          </a>
        </li>
        <li>
          <a
            href="https://angel.co/u/addisu-haile-tedla"
            className="hover:underline md:mr-6"
          >
            <FaAngellist />
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
