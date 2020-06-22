import React, { useState } from 'react';

interface ImagesSearchProps {
  onSubmit: (searchValue: string) => void;
}

const ImagesSearch: React.FC<ImagesSearchProps> = ({ onSubmit }) => {
  const [searchValue, setSearchValue] = useState('');

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;
    setSearchValue(value);
  }

  function onSearch(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    onSubmit(searchValue);
  }

  return (
    <form onSubmit={onSearch}>
      <input
        name="search"
        type="text"
        data-testid="searchInput"
        value={searchValue}
        onChange={handleChange}
      ></input>
      <button data-testid="serachButton" type="submit">
        Search
      </button>
    </form>
  );
};

export default ImagesSearch;
