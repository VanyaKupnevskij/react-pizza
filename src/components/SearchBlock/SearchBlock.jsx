import React from 'react';
import { MdClear } from 'react-icons/md';
import styles from './SearchBlock.module.scss';

import debounce from 'lodash.debounce';
import { useSelector, useDispatch } from 'react-redux';
import { setSearchValue } from '../../redux/slices/SearchSlice';

function SearchBlock() {
  const [_value, setValue] = React.useState('');
  const searchValue = useSelector((state) => state.search.searchValue);
  const dispatch = useDispatch();
  const inputRef = React.useRef();

  const debounceSetValue = React.useCallback(
    debounce((str) => dispatch(setSearchValue(str)), 1000),
    [],
  );

  function onClear() {
    setValue('');
    dispatch(setSearchValue(''));
    inputRef.current.focus();
  }

  function onChange(val) {
    setValue(val);
    debounceSetValue(val);
  }

  return (
    <div className={styles.root}>
      <input
        ref={inputRef}
        className={styles.input}
        type="text"
        value={_value}
        placeholder="Поиск пиццы..."
        onChange={(e) => onChange(e.target.value)}
      />
      {_value !== '' && <MdClear className={styles.clear} onClick={onClear} />}
    </div>
  );
}

export default SearchBlock;
