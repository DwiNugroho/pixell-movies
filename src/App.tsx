import React from 'react';

import Search from '@/components/molecules/Search';

import Input from '@/components/atoms/Input';
import Button from '@/components/atoms/Button';

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
      deserunt nisi? learn react
    </p>

    <section className="width--100">
      <Search />
    </section>

    <section className="flex mt-1">
      <section className="flex__item">
        <Input />
      </section>
      <section className="flex__item">
        <Button size="small" appearance="outline">
          Text
        </Button>
      </section>
      <section className="flex__item">
        <Button size="medium" color="blue">
          Text
        </Button>
      </section>
      <section className="flex__item">
        <Button size="large">Text</Button>
      </section>
    </section>
  </section>
);

export default App;
