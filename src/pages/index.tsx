import React from 'react';

import Search from '@/components/molecules/Search';

const HomePage: React.FC = () => {
  return (
    <section className="width--100">
      <section className="width--100 background--spring-wood py-5">
        <section className="container display--md-invisible">
          <Search block />
        </section>
      </section>
    </section>
  );
};

export default HomePage;
