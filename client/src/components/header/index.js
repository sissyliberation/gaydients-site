import React from 'react';
import './style.scss';

import logo from '../../logo.svg';

export default function Header(props) {
  return (
    <>
      <header class="header">
        <div class="header__container">
          <div class="header__left">
            <a href="/" className="header__logo-link">
              <img src={logo} className="header__logo" alt="gradients logo" />
            </a>
          </div>
          <div class="header__right">
          </div>
        </div>
      </header>
    </>
   );
};
