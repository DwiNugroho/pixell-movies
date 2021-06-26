import React from 'react';
import {
  // NavLink,
  Link,
  withRouter,
  RouteComponentProps,
} from 'react-router-dom';

import Search from '@/components/molecules/Search';

import './styles.scss';

export const Navbar: React.FC<RouteComponentProps> = ({ history }) => {
  return (
    <section className="main-navbar width--100 background--white">
      <section className="container py-3">
        <nav
          className="flex flex--justify-space-between flex--align-center"
          style={{ minHeight: '76px' }}
        >
          <section className="flex__item flex flex--align-center">
            <Link to="/" className="text--black">
              <h3 className="my-0">PixellMovie</h3>
            </Link>
            {/* <section className="ml-5">
              <NavLink
                to="/movies"
                className="text--light-black"
                activeClassName="text--dark-yellow"
              >
                <p className="my-0">Movie List</p>
              </NavLink>
            </section> */}
          </section>
          <section className="flex__item display--invisible display--md-visible">
            <Search
              onSearch={(value) => {
                history.push(`/search/${value}`);
              }}
            />
          </section>
        </nav>
      </section>
      <hr className="my-0" />
    </section>
  );
};

Navbar.defaultProps = {
  //
};

export default withRouter(Navbar);
