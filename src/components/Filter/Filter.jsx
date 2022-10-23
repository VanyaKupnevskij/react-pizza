import React from 'react';
import styles from './Filter.module.scss';

function Filter() {
  const [activeCategory, setActiveCategory] = React.useState(0);

  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  function onClickCategory(id) {
    setActiveCategory(id);
  }

  return (
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
  );
}

export default Filter;
