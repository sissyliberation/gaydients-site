import React from 'react';
import './style.scss';

export default function Header(props) {
  return (
    <>
      <header class="header">
        <div class="header__container">
          <nav class="header__nav">
          <a href="https://github.com/anarchotechqueer/gaydients" target="_blank" rel="noopener noreferrer" className="header__link">
            GitHub
          </a>
          </nav>
        </div>
      </header>
    </>
   );
};
