import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Filter.module.scss';

function Filter() {
  const [activeCategory, setActiveCategory] = React.useState(0);

  const [isOpenSort, setOpenSort] = React.useState(false);
  const [activeSort, setActiveSort] = React.useState(0);

  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
  const sortes = ['популярности', 'цене', 'алфавиту'];
  let selectedSort = sortes[activeSort];

  function onClickCategory(id) {
    setActiveCategory(id);
  }

  function onClickSort(id) {
    setActiveSort(id);
    setOpenSort(false);
  }

  return (
    <section className={styles.section}>
      <ul className={styles.types}>
        {categories.map((item, ind) => (
          <li
            key={ind}
            onClick={() => onClickCategory(ind)}
            className={activeCategory == ind ? styles.types_selected : ''}>
            {item}
          </li>
        ))}
      </ul>
      <div className={styles.characteristics}>
        <div>
          <img className={isOpenSort ? styles.img_opened : ''} src={'images/topdown.svg'} />
          <span>Сортировка по:</span>
          <span className={styles.charac} onClick={() => setOpenSort(!isOpenSort)}>
            {selectedSort}
          </span>
        </div>
        <ul className={[styles.sort_list, isOpenSort ? styles.popup_opened : ''].join(' ')}>
          {sortes.map((item, ind) => (
            <li
              key={ind}
              onClick={() => onClickSort(ind)}
              className={activeSort == ind ? styles.sort_selected : ''}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Filter;
