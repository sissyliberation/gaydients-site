import React from 'react';
import './style.scss';

import Card from '../card';

import gaydients from 'gaydients';
let gaydientItems = {};

Object.keys(gaydients).forEach(key=>{
  let name;
  let type;

  if (key.includes('Flag')) {
    const strIndex = key.indexOf('Flag');
    name = key.substring(0, strIndex);
    type = 'flag';
  }
  else {
    const strIndex = key.indexOf('Gradient');
    name = key.substring(0, strIndex);
    type = 'gradient';
  }

  const value = gaydients[key];

  let instance = {
    'name': type,
    'value': value,
    'key': `${name}__${type}`
  };

  if (!(name in gaydientItems)) {
    gaydientItems[name] = [];
  }

  gaydientItems[name].push(instance);
});

export default function Grid(props) {
  return (
    <>
      <div className="grid">
        <div className="grid__container">
        {
          Object.keys(gaydientItems).map((item, i) => {
            return(
              <>
              {
                gaydientItems[item].map((iitem, ii) => {
                  return (<Card name={item} type={iitem.name} value={iitem.value} key={iitem.key} />);
                })
              }
              </>
            );
          })
        }
        </div>
      </div>
    </>
   );
};
