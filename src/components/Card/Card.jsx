import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Card.module.scss';

function Card({ id, title, imageUrl, price, types, sizes }) {
  const [cartCount, setCartCount] = React.useState(0);
  const [selectedType, setSelectedType] = React.useState(0);
  const [selectedSize, setSelectedSize] = React.useState(0);
  const exsistTypes = ['тонкое', 'традиционное'];

  return (
    <section className={styles.card}>
      <Link to={'/product/' + id}>
        <img className={styles.preview} src={imageUrl} alt="pizza" />
        <h2 className={styles.title}>{title}</h2>
      </Link>
      <div className={styles.charac}>
        <div className={styles.charac_block}>
          {types.map((type, i) => (
            <span
              key={i}
              onClick={() => setSelectedType(i)}
              className={selectedType == i ? styles.charac_selected : ''}>
              {exsistTypes[type]}
            </span>
          ))}
        </div>
        <div className={styles.charac_block}>
          {sizes.map((size, i) => (
            <span
              key={i}
              onClick={() => setSelectedSize(i)}
              className={selectedSize == i ? styles.charac_selected : ''}>
              {size} см.
            </span>
          ))}
        </div>
      </div>
      <div className={styles.bottom_block}>
        <span className={styles.price}>
          от <span>{price}</span> грн
        </span>
        <button className={styles.toCart} onClick={() => setCartCount(cartCount + 1)}>
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="#EB5A1E"
            />
          </svg>
          <span>Добавить</span>
          {cartCount > 0 && <span className={styles.cartCount}>{cartCount}</span>}
        </button>
      </div>
    </section>
  );
}

export default Card;
