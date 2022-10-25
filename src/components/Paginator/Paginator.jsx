import React from 'react';
import cn from 'classnames';
import styles from './Paginator.module.scss';
import { TiArrowLeftThick, TiArrowRightThick } from 'react-icons/ti';

import { useSelector, useDispatch } from 'react-redux';
import { setActivePage } from '../../redux/slices/PaginatorSlice';

function Paginator({ countTotalPages = 1 }) {
  const activePage = useSelector((state) => state.paginator.activePage);
  const dispatch = useDispatch();

  function onClickPage(id) {
    activePage !== id && id >= 1 && id <= countTotalPages && dispatch(setActivePage(id));
  }

  return (
    <ul className={styles.items}>
      <li
        className={cn(styles.navigation, { [styles.unalialable]: activePage == 1 })}
        onClick={() => onClickPage(activePage - 1)}>
        <TiArrowLeftThick />
      </li>
      {[...Array(countTotalPages)].map((_, ind) => {
        ind += 1;
        return (
          <li
            key={ind}
            onClick={() => onClickPage(ind)}
            className={activePage == ind ? styles.selected : ''}>
            {ind}
          </li>
        );
      })}
      <li
        className={cn(styles.navigation, { [styles.unalialable]: activePage == countTotalPages })}
        onClick={() => onClickPage(activePage + 1)}>
        <TiArrowRightThick />
      </li>
    </ul>
  );
}

export default Paginator;
