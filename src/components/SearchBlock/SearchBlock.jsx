import React from 'react';
import AppContext from '../../context';
import { TiArrowLeftThick } from 'react-icons/ti';
import styles from './SearchBlock.module.scss';

function SearchBlock() {
  const { searchValue, setSearchValue } = React.useContext(AppContext);

  return (
    <div className={styles.root}>
      <input
        className={styles.input}
        type="text"
        value={searchValue}
        placeholder="Поиск пиццы..."
        onChange={(e) => setSearchValue(e.target.value)}
      />
      {searchValue !== '' && (
        <TiArrowLeftThick className={styles.clear} onClick={() => setSearchValue('')} />
      )}
    </div>
  );
}

export default SearchBlock;
