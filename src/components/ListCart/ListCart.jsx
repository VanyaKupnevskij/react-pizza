import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ListCart.module.scss';
import CartCard from '../CartCard/CartCard';

function ListCart() {
  return (
    <section className={styles.section}>
      <div className={styles.top_header}>
        <h1 className={styles.title}>Корзина</h1>
        <button className={styles.clear}>Очистить корзину</button>
      </div>
      <div className={styles.list}>
        <CartCard
          id={4}
          title="Сырный цыпленок"
          preview="images/products/img4.png"
          price={770}
          count={2}
        />
        <CartCard
          id={3}
          title="Креветки по-азиатски с очень длинным названием"
          preview="images/products/img3.png"
          price={290}
          count={1}
        />
        <CartCard
          id={1}
          title="Чизбургер-пицца"
          preview="images/products/img1.png"
          price={350}
          count={3}
        />
      </div>
      <div className={styles.info}>
        <span className={styles.total_count}>
          Всего пицц: <b>{3} шт.</b>
        </span>
        <span className={styles.total_price}>
          Сумма заказа: <b>{960} грн</b>
        </span>
      </div>
      <div className={styles.buttons}>
        <Link to={'/'}>
          <button className={styles.btn_back}>Вернуться назад</button>
        </Link>
        <button className={styles.btn_buy}>Оплатить сейчас</button>
      </div>
    </section>
  );
}

export default ListCart;
