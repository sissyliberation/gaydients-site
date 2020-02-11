import React from 'react';
import './style.scss';

import Card from '../card';

import gaydients from '../../gaydients.scss';
let gaydientItems = [];

Object.keys(gaydients).forEach(key=>{
   gaydientItems.push({
     'name': key,
     'value': gaydients[key]
   })
});

export default function Grid(props) {
  return (
    <>
      <div className="grid">
        <div className="grid__container">
          {
            gaydientItems.map((item, i) => {
              return(
                <Card name={item.name} value={item.value} key={i} />
              )
            })
          }
        </div>
      </div>
    </>
   );
};
