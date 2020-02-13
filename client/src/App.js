import React from 'react';
import './App.scss';

import CookieBanner from './components/cookie-banner';
import Header from './components/header';
import Footer from './components/footer';
import Grid from './components/grid';
import Hero from './components/hero';

function App() {
  return (
    <>
    {
      // <CookieBanner />
      // <Header />
    }
    <main id="main">
      <Hero />
      <>
        <Grid />
      </>
    </main>
    {
      // <Footer />
    }
    </>
  );
}

export default App;
