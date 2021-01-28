import React from 'react';
import './style.scss';
import githubImg from '../../img/github.svg';

export default function Footer(props) {
  return (
    <>
      <footer className="footer">
        <div className="footer__container">
          <div className="footer__left">
          <a
            className="footer__link" target="_blank" rel="noopener noreferrer"
            href="https://github.com/novacourtois/gaydients">
            <img src={githubImg} alt={'github link'} />
          </a>
          </div>
          <div className="footer__right">
            <div className="footer__made-by">
              // made by <a
                className="footer__link" target="_blank" rel="noopener noreferrer"
                href="https://novacourtois.github.io/">
                nova skye</a>
            </div>
          </div>
        </div>
      </footer>
    </>
   );
};
