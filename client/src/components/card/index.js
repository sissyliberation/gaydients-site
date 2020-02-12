import React, { useState } from 'react';
import './style.scss';

import copy from '../../img/copy.svg';

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
            <button className="card__copy" onClick={e => handleCopy(e, copyText)}>
              <img src={copy} className="card__clipboard" alt={`copy ${props.name} ${props.type}`} />
            </button>
            <div className="card__flag" style={backgroundStyle}></div>
            <div className="card__title">
              {props.name} {props.type}
            </div>
          </div>
        </div>
        <div className="card__bar"></div>
      </div>
    </>
   );
};
