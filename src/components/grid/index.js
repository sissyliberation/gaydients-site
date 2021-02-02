import React from 'react';
import './style.scss';

import Card from '../card';

import gaydients from 'gaydients';
let gaydientItems = {};

Object.keys(gaydients).forEach(key=>{
  let convertedName = key.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase();
  let name;
  let type;

  if (convertedName.includes('-flag')) {
    const strIndex = convertedName.indexOf('-flag');
    name = convertedName.substring(0, strIndex).replace('-', ' ');
    type = 'flag';
  }
  else {
    const strIndex = convertedName.indexOf('-gradient');
    name = convertedName.substring(0, strIndex).replace('-', ' ');
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
