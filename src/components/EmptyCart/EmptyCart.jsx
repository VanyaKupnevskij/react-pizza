import React from 'react';
import { Link } from 'react-router-dom';
import styles from './EmptyCart.module.scss';

function EmptyCart() {
  return (
    <section className={styles.section}>
      <div className={styles.top_header}>
        <h1 className={styles.title}>Корзина пустая</h1>
        <img src="images/smileSad.png" />
      </div>
      <p className={styles.desrc}>
        Вероятней всего, вы не заказывали ещё пиццу. <br />
        Для того, чтобы заказать пиццу, перейди на главную страницу.
      </p>
      <img src="images/emptyImage.jpg" />
      <Link to={'/'}>
        <button className={styles.btn_back}>Вернуться назад</button>
      </Link>
    </section>
  );
}

export default EmptyCart;
