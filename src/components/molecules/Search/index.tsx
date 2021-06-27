import * as React from 'react';

import Input from '@/components/atoms/Input';
import Button from '@/components/atoms/Button';

import './styles.scss';

export interface Props {
  className?: string;
  onSearch?: (value?: string) => void;
  onChange?: (value?: string) => void;
  label?: string;
  block?: boolean;
  value?: string;
}

export const Search: React.FC<Props> = ({
  onSearch,
  onChange,
  label,
  block,
  value,
}) => {
  const [search, setSearch] = React.useState(value);

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
    >
      {label ? (
        <>
          <label htmlFor="search" className="cursor--pointer">
            <h5>{{ label }}</h5>
          </label>
          <br />
        </>
      ) : (
        <></>
      )}
      <section className="flex">
        <Input
          id="search"
          className={`flex__item${block ? ' width--100' : ''}`}
          placeholder="search.."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            onChange && onChange(e.target.value);
          }}
        ></Input>
        <Button
          type="submit"
          className="flex__item"
          color="red"
          style={{ margin: '32px 0 0 16px', minWidth: '92px' }}
        >
          Search
        </Button>
      </section>
    </form>
  );
};

Search.defaultProps = {
  label: '',
  value: '',
};

export default Search;
