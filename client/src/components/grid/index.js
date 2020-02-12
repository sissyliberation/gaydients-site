import React from 'react';
import './style.scss';

import Card from '../card';

import gaydients from '../../gaydients.scss';
let gaydientItems = {};

Object.keys(gaydients).forEach(key=>{
  const item = key.split('--');
  const name = item[0];
  const type = item[1];
  const value = gaydients[key];

  let instance = {};
  instance[type] = value;

  if !((name in gaydientItems)) {
    gaydientItems[name] = [];
  }
  
  gaydientItems[name].push(instance);
});

export default function Grid(props) {
  return (
    <>
      <div className="grid">
        <div className="grid__container">

        </div>
      </div>
    </>
   );
};
