import React from 'react';
import AppContext from '../../context';
import styles from './Sort.module.scss';
import cn from 'classnames';

function Sort() {
  const [isOpenSort, setOpenSort] = React.useState(false);
  const { activeSort, setActiveSort } = React.useContext(AppContext);

  const sortes = [
    { name: 'популярности', sort: 'rating' },
    { name: 'популярности (убыванию)', sort: '-rating' },
    { name: 'цене', sort: 'price' },
    { name: 'цене (убыванию)', sort: '-price' },
    { name: 'алфавиту', sort: 'title' },
    { name: 'алфавиту (убыванию)', sort: '-title' },
  ];
  let selectedSort = activeSort.name;

  function onClickSort(item) {
    setActiveSort(item);
    setOpenSort(false);
  }

  return (
    <div className={styles.sort}>
      <div>
        <img className={isOpenSort ? styles.img_opened : ''} src={'images/topdown.svg'} />
        <span>Сортировка по:</span>
        <span className={styles.charac} onClick={() => setOpenSort(!isOpenSort)}>
          {selectedSort}
        </span>
      </div>
      <ul className={cn(styles.sort_list, { [styles.popup_opened]: isOpenSort })}>
        {sortes.map((item, ind) => (
          <li
            key={ind}
            onClick={() => onClickSort(item)}
            className={activeSort.name === item.name ? styles.sort_selected : ''}>
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sort;
