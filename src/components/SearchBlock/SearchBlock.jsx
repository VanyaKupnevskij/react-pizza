import React from 'react';
import { MdClear } from 'react-icons/md';
import styles from './SearchBlock.module.scss';

import { useSelector, useDispatch } from 'react-redux';
import { setSearchValue } from '../../redux/slices/SearchSlice';

function SearchBlock() {
  const searchValue = useSelector((state) => state.search.searchValue);
  const dispatch = useDispatch();

  return (
    <div className={styles.root}>
      <input
        className={styles.input}
        type="text"
        value={searchValue}
        placeholder="Поиск пиццы..."
        onChange={(e) => dispatch(setSearchValue(e.target.value))}
      />
      {searchValue !== '' && (
        <MdClear className={styles.clear} onClick={() => dispatch(setSearchValue(''))} />
      )}
    </div>
  );
}

export default SearchBlock;
