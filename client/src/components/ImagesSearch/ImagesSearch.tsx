import React, { useState } from 'react';

interface ImagesSearchProps {
  onSubmit: (searchValue: string) => void;
}

const ImagesSearch: React.FC<ImagesSearchProps> = ({ onSubmit }) => {
  const [searchValue, setSearchValue] = useState('');
  const [validationError, setValidationError] = useState<string>('');

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;
    setSearchValue(value);
  }

  function onSearch(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (searchValue) {
      setValidationError('');
      onSubmit(searchValue);
    } else {
      setValidationError('Field is required');
    }
  }

  return (
    <form onSubmit={onSearch} className="giphy-form">
      <div className="form-group">
        <input
          name="search"
          type="text"
          data-testid="searchInput"
          value={searchValue}
          placeholder="Search..."
          onChange={handleChange}
          className="form-group__input"
        ></input>
        <button
          className="form-group__button"
          data-testid="serachButton"
          type="submit"
        >
          Search
        </button>
        {validationError && (
          <div
            data-testid="validation-error"
            className="form-group__validation form-group__validation--error"
          >
            {validationError}
          </div>
        )}
      </div>
    </form>
  );
};

export default ImagesSearch;
