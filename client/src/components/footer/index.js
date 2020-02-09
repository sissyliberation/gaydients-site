import React from 'react';
import './style.scss';

export default function Footer(props) {
  return (
    <>
      <footer class="footer">
        <div class="footer__container">
          <div class="footer__left">
          <a
            className="footer__link" target="_blank" rel="noopener noreferrer"
            href="https://github.com/novacourtois/gaydients">
            GitHub
          </a>
          </div>
          <div class="footer__right">
            <div class="footer__made-by">
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
