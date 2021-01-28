import React, { useState } from 'react';
import cookie from 'react-cookies';

import CookieBanner from './components/cookie-banner';
import Footer from './components/footer';
import Grid from './components/grid';
import Hero from './components/hero';

function App() {
  // handle cookies
  const cookieConsentName = 'gaydients__cookie-consent';
  const cookieConsent = cookie.load(cookieConsentName);
  const [hasCookieResponse, setCookieResponse] = useState(cookieConsent);

  const giveCookieConsentResponse = (gaveConsent) => {
    cookie.save(cookieConsentName, gaveConsent, { path: '/' });
    setCookieResponse(gaveConsent);
  };

  // handle scroll event
  const scrollClass = 'is-scrolled';
  const onScroll = () => {
    var top  = window.pageYOffset || document.documentElement.scrollTop;

    if (top) {
      document.body.classList.add(scrollClass);
    }
    else {
      document.body.classList.remove(scrollClass);
    }
  };

  window.addEventListener("scroll", onScroll);

  return (
    <>
    { hasCookieResponse === undefined &&
      <CookieBanner giveCookieConsentResponse={giveCookieConsentResponse} />
    }
    <main id="main">
      <Hero />
      <Grid hasCookieResponse={hasCookieResponse}/>
    </main>
    <Footer />
    </>
  );
}

export default App;
