import React from 'react';
import './style.scss';

import clipboard from '../../img/clipboard.svg';

export default function Card(props) {
  const backgroundStyle = {
    backgroundImage: props.value
  };
  const copyText = `background-image: ${props.value};`;

  return (
    <>
      <div class="card" style={backgroundStyle}>
        <div class="card__container">
          <div class="card__content">
            <a className="card__copy" href="" onClick={(e) => {e.preventDefault();navigator.clipboard.writeText(copyText)}}>
              <img src={clipboard} className="card__clipboard" alt={`copy ${props.name} flag`} />
            </a>
            <div className="card__flag-name">
              {props.name} flag
            </div>
          </div>
        </div>
      </div>
    </>
   );
};
