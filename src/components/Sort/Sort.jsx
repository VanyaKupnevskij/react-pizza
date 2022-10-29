import React from 'react';
import styles from './Sort.module.scss';
import cn from 'classnames';

import { useSelector, useDispatch } from 'react-redux';
import { setActiveSort } from '../../redux/slices/FilterSlice';

export const sortes = [
  { name: 'популярности', sort: 'rating' },
  { name: 'популярности (убыванию)', sort: '-rating' },
  { name: 'цене', sort: 'price' },
  { name: 'цене (убыванию)', sort: '-price' },
  { name: 'алфавиту', sort: 'title' },
  { name: 'алфавиту (убыванию)', sort: '-title' },
];

function Sort() {
  const [isOpenSort, setOpenSort] = React.useState(false);
  const activeSort = useSelector((state) => state.filter.activeSort);
  const dispatch = useDispatch();
  const refRoot = React.useRef(null);

  let selectedSort = activeSort.name;

  function onClickSort(item) {
    dispatch(setActiveSort(item));
    setOpenSort(false);
  }

  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.path.includes(refRoot.current)) {
        setOpenSort(false);
      }
    };

    document.body.addEventListener('click', handleClickOutside);

    return () => document.body.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <div ref={refRoot} className={styles.sort}>
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
