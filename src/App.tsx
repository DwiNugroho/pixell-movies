import React from 'react';
// import logo from './logo.svg';

const App = () => (
  <section className="container">
    <h1>Hello World</h1>
    <h2>Hello World</h2>
    <h3>Hello World</h3>
    <h4>Hello World</h4>
    <h5>Hello World</h5>
    <h6>Hello World</h6>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime deleniti
      beatae quisquam rem repellat laboriosam, incidunt totam, natus corrupti
      distinctio odit culpa, maiores illo eligendi unde dolore perferendis
      officiis illum.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque iure
      nostrum aperiam, minima architecto inventore cupiditate in, ratione sequi,
      exercitationem ea atque? Repellendus ratione consequatur fugiat nam dolore
      deserunt nisi?
    </p>

    <section className="flex flex--wrap">
      <div
        className="flex__item flex__item--12 flex__item--lg-6 background--red"
        style={{
          minHeight: '100px',
        }}
      />
      <div
        className="flex__item flex__item--12 flex__item--lg-6 background--red"
        style={{
          minHeight: '100px',
        }}
      />
    </section>
  </section>
);

export default App;
