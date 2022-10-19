import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Filter.module.scss';

function Filter() {
  return (
    <section className={styles.section}>
      <div className={styles.types}>
        <span className={[styles.types_item, styles.types_selected].join(' ')}>Все</span>
        <span className={styles.types_item}>Мясные</span>
        <span className={styles.types_item}>Вегетарианская</span>
        <span className={styles.types_item}>Гриль</span>
        <span className={styles.types_item}>Острые</span>
        <span className={styles.types_item}>Закрытые</span>
      </div>
      <div className={styles.characteristics}>
        <span>Сортировка по:</span>
        <span className={styles.charac}>популярности</span>
      </div>
    </section>
  );
}

export default Filter;
