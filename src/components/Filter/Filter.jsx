import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Filter.module.scss';

function Filter() {
  return (
    <section className={styles.section}>
      <ul className={styles.types}>
        <li className={styles.types_selected}>Все</li>
        <li>Мясные</li>
        <li>Вегетарианская</li>
        <li>Гриль</li>
        <li>Острые</li>
        <li>Закрытые</li>
      </ul>
      <div className={styles.characteristics}>
        <span>Сортировка по:</span>
        <span className={styles.charac}>популярности</span>
      </div>
    </section>
  );
}

export default Filter;
