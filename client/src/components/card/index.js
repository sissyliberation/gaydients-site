import React, { useState } from 'react';
import './style.scss';

import clipboard from '../../img/clipboard.svg';

export default function Card(props) {
  const backgroundStyle = {
    backgroundImage: props.value
  };

  const copyText = `background-image: ${props.value};`;

  const [className, setClassName] = useState('card');

  const handleCopy = (e, copyText) => {
    e.preventDefault();
    navigator.clipboard.writeText(copyText);
    setClassName('card card--with-bar');

    setTimeout(() => {
      setClassName('card');
    }, 275);
  };

  return (
    <>
      <div className={className}>
        <div className="card__container">
          <div className="card__content">
            <button className="card__copy" href="" onClick={e => handleCopy(e, copyText)}>
              <img src={clipboard} className="card__clipboard" alt={`copy ${props.name} flag`} />
            </button>
            <div className="card__flag" style={backgroundStyle}></div>
            <div className="card__title">
              {props.name} flag
            </div>
          </div>
        </div>
        <div class="card__bar"></div>
      </div>
    </>
   );
};
