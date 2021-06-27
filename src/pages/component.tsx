import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router';
import Search from '@/components/molecules/Search';

const HomePage: React.FC<RouteComponentProps> = ({ history }) => {
  return (
    <section className="width--100 background--spring-wood">
      <section className="container">
        <section
          className="flex flex--column flex--align-center flex--justify-center"
          style={{ minHeight: '100vh' }}
        >
          <section
            className="flex__item width--100 px-3"
            style={{ marginTop: '-360px' }}
          >
            <Search
              onSearch={(value) => {
                history.push(`/search?keyword=${value}`);
              }}
              block
            />
          </section>
        </section>
      </section>
    </section>
  );
};

export default withRouter(HomePage);
