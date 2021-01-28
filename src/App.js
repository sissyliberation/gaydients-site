import React from 'react';

import Header from './components/header';
import Footer from './components/footer';
import Grid from './components/grid';
import Hero from './components/hero';

function App() {
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
    <Header />
    <main id="main">
      <Hero />
      <Grid />
    </main>
    <Footer />
    </>
  );
}

export default App;
