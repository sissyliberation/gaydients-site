import React from 'react';
import './style.scss';

export default function Card(props) {
  const backgroundStyle = {
    backgroundImage: props.value
  };

  return (
    <>
      <div class="card" style={backgroundStyle}>
        <div class="card__container">
          {props.name}
        </div>
      </div>
    </>
   );
};
