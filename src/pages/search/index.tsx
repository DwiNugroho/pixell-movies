import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import Search from '@/components/molecules/Search';

const SearchPage: React.FC<RouteComponentProps> = ({ match, history }) => {
  return (
    <section className="width--100">
      <section className="width--100 background--spring-wood py-5">
        <section className="container">
          <section className="width--100 mx-auto" style={{ maxWidth: '600px' }}>
            <Search
              onSearch={(value) => {
                history.push(`/search/${value}`);
              }}
              block
            />
          </section>
          <h4 className="text--center text--light-black">
            search: {(match.params as any).keyword}
          </h4>
        </section>
      </section>
    </section>
  );
};

export default withRouter(SearchPage);
