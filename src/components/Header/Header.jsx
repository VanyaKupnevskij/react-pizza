import React from 'react';
import { Link } from 'react-router-dom';
import SearchBlock from '../SearchBlock/SearchBlock';
import styles from './Header.module.scss';

function Header() {
  return (
    <header>
      <div className={styles.info}>
        <Link to="/">
          <img className={styles.logo} src="images/logo.svg" alt="logo" />
          <div>
            <h2 className={styles.title}>REACT PIZZA</h2>
            <p className={styles.subtitle}>самая вкусная пицца во вселенной</p>
          </div>
        </Link>
      </div>
      <SearchBlock />
      <Link to="/cart">
        <div className={styles.cart}>
          <span className={styles.price}>{520} грн</span>
          <div className={styles.cart_count}>
            <img src="images/cart.svg" alt="cart" />
            <span>3</span>
          </div>
        </div>
      </Link>
    </header>
  );
}

export default Header;
