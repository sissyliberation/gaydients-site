import React, {useState} from 'react';

import './style.scss';

export default function CookieBanner(props) {
  const [shouldDisplayCookieExplanation, setShouldDisplayCookieExplanation] = useState(false);

  const displayCookieExplanation = () => {
    setShouldDisplayCookieExplanation(true);
  }
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
          <div class="cookie-banner__text">
            can we use cookies?
          </div>
          <div className="cookie-banner__ctas">
            <button className="cookie-banner__cta" onClick={props.onCookieBannerSelection}>no</button>
            <button className="cookie-banner__cta" onClick={props.onCookieBannerSelection}>yes</button>
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
