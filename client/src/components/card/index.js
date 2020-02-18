import React, { useState } from 'react';
import ReactGA from 'react-ga';
import './style.scss';
import copyImg from '../../img/copy.svg';
import variables from '../../_variables.scss';

export default function Card(props) {
  const transitionDuration = parseInt(variables.transitionDuration);
  const backgroundStyle = { backgroundImage: props.value };
  const copyText = `background-image: ${props.value};`;
  const [className, setClassName] = useState('card');

  const handleCopy = (e, copyText) => {
    e.preventDefault();

    navigator.clipboard.writeText(copyText);
    setClassName('card card--with-bar');

    if (props.hasCookieResponse) {
      var action = e.currentTarget.attributes.getNamedItem('data-description').value;

      ReactGA.event({
        category: 'Copy Item',
        action: action
      })
    }

    setTimeout(() => {
      setClassName('card');
    }, transitionDuration);
  };

  return (
    <>
      <div className={className}>
        <div className="card__container">
          <div className="card__content">
            <button className="card__copy" onClick={(e) => handleCopy(e, copyText)} data-description={`${props.name} ${props.type}`}>
              <img src={copyImg} className="card__clipboard" alt={`copy ${props.name} ${props.type}`} />
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
