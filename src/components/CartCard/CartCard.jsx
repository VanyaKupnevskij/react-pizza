import React from 'react';
import { Link } from 'react-router-dom';
import styles from './CartCard.module.scss';

function CartCard({ id, title, preview, price, count }) {
  return (
    <section className={styles.card}>
      <Link to={'/prduct/' + id}>
        <img className={styles.preview} src={preview} alt="pizza" />
        <div className={styles.info}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.charac}>тонкое тесто, 26 см.</p>
        </div>
      </Link>
      <div className={styles.counter}>
        <button>
          <img src="images/minus.svg" />
        </button>
        <span className={styles.count}>{count}</span>
        <button>
          <img src="images/plus.svg" />
        </button>
      </div>
      <span className={styles.price}>
        <span>{price}</span> грн
      </span>
      <button className={styles.delete}>
        <svg
          width="10"
          height="9"
          viewBox="0 0 10 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M8.74791 6.95572L6.49931 4.70712L8.74791 2.45852C9.16184 2.04459 9.16184 1.37339 8.74791 0.959458C8.33398 0.545528 7.66277 0.545528 7.24884 0.959458L5.00024 3.20806L2.75164 0.959458C2.33771 0.545528 1.66651 0.545528 1.25258 0.959458C0.838648 1.37339 0.838648 2.04459 1.25258 2.45852L3.50118 4.70712L1.25258 6.95572C0.838649 7.36965 0.838649 8.04086 1.25258 8.45479C1.66651 8.86872 2.33772 8.86872 2.75164 8.45479L5.00024 6.20619L7.24884 8.45479C7.66277 8.86872 8.33398 8.86872 8.74791 8.45479C9.16184 8.04086 9.16184 7.36965 8.74791 6.95572Z"
            fill="#D0D0D0"
          />
        </svg>
      </button>
    </section>
  );
}

export default CartCard;
