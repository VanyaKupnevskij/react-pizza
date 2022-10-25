import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { setActiveCategory } from '../../redux/slices/FilterSlice';

import styles from './Filter.module.scss';

function Filter() {
  const activeCategory = useSelector((state) => state.filter.activeCategory);
  const dispatch = useDispatch();

  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  return (
    <ul className={styles.types}>
      {categories.map((item, ind) => (
        <li
          key={ind}
          onClick={() => dispatch(setActiveCategory(ind))}
          className={activeCategory == ind ? styles.types_selected : ''}>
          {item}
        </li>
      ))}
    </ul>
  );
}

export default Filter;
