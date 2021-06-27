import React from 'react';
import {
  // NavLink,
  Link,
  withRouter,
  RouteComponentProps,
} from 'react-router-dom';

import './styles.scss';

export const Navbar: React.FC<RouteComponentProps> = () => {
  return (
    <section className="main-navbar width--100 background--spring-wood">
      <section className="container py-3">
        <nav
          className="flex flex--justify-space-between flex--align-center"
          style={{ minHeight: '76px' }}
        >
          <section className="flex__item flex flex--align-center">
            <Link to="/" className="text--black">
              <h3 className="my-0">PixellMovie</h3>
            </Link>
          </section>
        </nav>
      </section>
      {/* <hr className="my-0" /> */}
    </section>
  );
};

Navbar.defaultProps = {
  //
};

export default withRouter(Navbar);
