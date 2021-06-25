import * as React from 'react';

import Input from '@/components/atoms/Input';
import Button from '@/components/atoms/Button';

import './styles.scss';

export interface Props {
  className?: string;
  onSearch?: (value?: string) => void;
  onChange?: (value?: string) => void;
}

export const Search: React.FC<Props> = ({ onSearch, onChange }) => {
  const [search, setSearch] = React.useState('');

  const searchHandler = () => {
    if (!search) {
      return false;
    }
    if (onSearch) {
      onSearch(search);
    }
    return true;
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        searchHandler();
      }}
      className="width--100"
    >
      <label htmlFor="search" className="cursor--pointer">
        <h5>Search</h5>
      </label>
      <br />
      <section className="flex">
        <Input
          id="search"
          className="flex__item width--100"
          placeholder="search.."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            onChange && onChange(e.target.value);
          }}
        ></Input>
        <Button type="submit" className="flex__item" color="red">
          Search
        </Button>
      </section>
    </form>
  );
};

Search.defaultProps = {
  // onPressEnter: undefined,
};

export default Search;
