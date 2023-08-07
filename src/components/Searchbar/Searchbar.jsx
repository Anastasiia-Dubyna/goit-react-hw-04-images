import PropTypes from 'prop-types';
import css from './Searchbar.module.css';
import { useState } from 'react';

export const Searchbar = ({ setAppState, searchValue }) => {
  const [inputValue, setInputValue] = useState('');

  const onSubmitForm = evt => {
    evt.preventDefault();
    if (inputValue === '' || inputValue === searchValue) {
      return;
    }
    setAppState(inputValue.trim().toLowerCase());
  };

  const onChangeInput = evt => setInputValue(evt.target.value);

  return (
    <header className={css.Searchbar}>
      <form className={css.SearchForm} onSubmit={onSubmitForm}>
        <button type="submit" className={css.SearchForm_button}>
          <span className={css.SearchForm_button_label}>Search</span>
        </button>

        <input
          className={css.SearchForm_input}
          type="text"
          name="search"
          value={inputValue}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={onChangeInput}
        />
      </form>
    </header>
  );
};

Searchbar.propTypes = {
  setAppState: PropTypes.func.isRequired,
  searchValue: PropTypes.string.isRequired,
};
