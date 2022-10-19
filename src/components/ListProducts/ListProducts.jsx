import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ListProducts.module.scss';
import Card from '../Card/Card';

function ListProducts() {
  return (
    <section className={styles.section}>
      <h1 className={styles.title}>Все пиццы</h1>
      <div className={styles.list}>
        <Card
          id={1}
          title="Чизбургер-пицца"
          preview="images/products/img1.png"
          price={395}
          count={2}
          cartCount={4}
        />
        <Card
          id={2}
          title="Сырная"
          preview="images/products/img2.png"
          price={450}
          count={0}
          cartCount={2}
        />
        <Card
          id={3}
          title="Креветки по-азиатски"
          preview="images/products/img3.png"
          price={290}
          count={0}
        />
        <Card
          id={4}
          title="Сырный цыпленок"
          preview="images/products/img4.png"
          price={385}
          count={0}
        />
        <Card
          id={5}
          title="Чизбургер-пицца"
          preview="images/products/img1.png"
          price={395}
          count={2}
        />
        <Card id={6} title="Сырная" preview="images/products/img2.png" price={450} count={0} />
        <Card
          id={7}
          title="Креветки по-азиатски"
          preview="images/products/img3.png"
          price={290}
          count={0}
        />
        <Card
          id={8}
          title="Сырный цыпленок"
          preview="images/products/img4.png"
          price={385}
          count={0}
        />
      </div>
    </section>
  );
}

export default ListProducts;
