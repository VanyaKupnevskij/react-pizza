import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NotFoundBlock.module.scss';

function NotFoundBlock() {
  return (
    <section className={styles.section}>
      <div className={styles.top_header}>
        <h1 className={styles.title}>
          <b>404</b>
          <br />
          страница не найдена
        </h1>
      </div>
      <p className={styles.desrc}>
        Вы перешли на не сущестующую или в процессе разработки страницу. Просим извинить за
        неудобства.
      </p>
      <img src="images/smileSad.png" />
      <button className={styles.btn_back}>
        <Link to={'/'}>Вернуться на главную</Link>
      </button>
    </section>
  );
}

export default NotFoundBlock;
