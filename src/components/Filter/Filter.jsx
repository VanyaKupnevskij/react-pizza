import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Filter.module.scss';

function Filter() {
  return (
    <section className={styles.section}>
      <div className={styles.types}>
        <button className={[styles.types_item, styles.types_selected].join(' ')}>Все</button>
        <button className={styles.types_item}>Мясные</button>
        <button className={styles.types_item}>Вегетарианская</button>
        <button className={styles.types_item}>Гриль</button>
        <button className={styles.types_item}>Острые</button>
        <button className={styles.types_item}>Закрытые</button>
      </div>
      <div className={styles.characteristics}>
        <span>Сортировка по:</span>
        <span className={styles.charac}>популярности</span>
      </div>
    </section>
  );
}

export default Filter;
