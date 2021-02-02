import React from 'react';
import './style.scss';

export default function Header(props) {
  return (
    <>
      <header className="header">
        <div className="header__container">
          <nav className="header__nav">
          <a href="https://github.com/anarchotechqueer/gaydients" target="_blank" rel="noopener noreferrer" className="header__link">
            GitHub
          </a>
          </nav>
        </div>
      </header>
    </>
   );
};
