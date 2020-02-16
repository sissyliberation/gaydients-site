import React, {useState} from 'react';

import './style.scss';

export default function CookieBanner(props) {
  console.log(props);
  const [shouldDisplayCookieExplanation, setShouldDisplayCookieExplanation] = useState(false);

  const displayCookieExplanation = (val) => {
    setShouldDisplayCookieExplanation(val);
  };

  return (
    <>
      {
        shouldDisplayCookieExplanation &&
        <div className="cookie-explanation">
          we use cookies for basic Google Analytics, and for no other reason. ever.
        </div>
      }

      <div className="cookie-banner">
        <div className="cookie-banner__container">
          <div className="cookie-banner__text">
            can we use cookies?
          </div>
          <div className="cookie-banner__ctas">
            <button className="cookie-banner__cta" onClick={props.onCookieBannerSelection} onClick={props.giveCookieConsentResponse(false)}>no</button>
            <button className="cookie-banner__cta" onClick={props.onCookieBannerSelection} onClick={props.giveCookieConsentResponse(true)}>yes</button>
            {
              !shouldDisplayCookieExplanation &&
              <button className="cookie-banner__cta" onClick={setShouldDisplayCookieExplanation}>what for?</button>
            }
          </div>
        </div>
      </div>
    </>
   );
};
