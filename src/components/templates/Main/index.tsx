import * as React from 'react';

import Navbar from '@/components/organism/Navbar';

import './styles.scss';

export interface Props {
  children: React.ReactNode;
}

export const Search: React.FC<Props> = ({ children }) => {
  return (
    <section className="width--100">
      <Navbar />
      <main style={{ minHeight: '380vh', marginTop: '76px' }}>{children}</main>
    </section>
  );
};

Search.defaultProps = {
  //
};

export default Search;
