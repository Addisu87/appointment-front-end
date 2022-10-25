import React from 'react';

const Header = () => {
  const headerStyle = {
    padding: '20px 0',
    lineHeight: '1.5em'
  };
  return (
    <header style={headerStyle}>
      <h1
        style={{
          fontSize: '2rem',
          fontWeight: '200',
          marginBottom: '2rem',
          lineHeight: '1em',
          color: '#ececec',
          textTransform: 'uppercase',
          textAlign: 'center'
        }}
      >
        Motorcycle
      </h1>
      <a
        href="https://www.mototechindia.com/neiman-marcus-limited-edition-fighter/"
        className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
      >
        <img
          src="https://cdn.luxe.digital/media/20220130151643/best-electric-motorcycles-2022-sondors-metacycle-luxe-digital-1-780x520.jpg"
          className="mr-3 h-6 sm:h-9"
          alt="Motorcycle Logo"
        />
        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
          Motorcycle
        </span>
      </a>
    </header>
  );
};

export default Header;
