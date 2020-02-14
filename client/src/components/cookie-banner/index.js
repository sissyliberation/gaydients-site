import React from 'react';

import './style.scss';

export default function CookieBanner(props) {
  return (
    <>
      {
        props.displayCookieExplanation &&
        <div className="cookie-explanation">
          we use cookies to save your settings, for basic Google Analytics, and for no other reason.
        </div>
      }

      <div className="cookie-banner">
        <div className="cookie-banner__container">
          <div class="cookie-banner__text">
            can we use cookies?
          </div>
          <div className="cookie-banner__ctas">
            <button className="cookie-banner__cta" onClick={props.onCookieBannerSelection}>no</button>
            <button className="cookie-banner__cta" onClick={props.onCookieBannerSelection}>yes</button>
            {
              !props.displayCookieExplanation &&
              <button className="cookie-banner__cta" onClick={props.onCookieExplanation}>what for?</button>
            }
          </div>
        </div>
      </div>
    </>
   );
};
