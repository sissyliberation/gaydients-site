import React from 'react';
import './style.scss';

export default function Card(props) {
  return (
    <>
    <section className="hero">
      <div className="hero__container">
        <h1 className="hero__title"><a href="/">gaydients</a></h1>
        <p className="hero__text">
          gaydients is a collection of lgbtqiap+ gradients made with css. they help make the web gay. free and always will be.
        </p>

        <pre>
          <code>
          yarn add gaydients
          </code>
        </pre>
      </div>
    </section>
    </>
   );
};
