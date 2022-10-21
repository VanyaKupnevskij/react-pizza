import React from 'react';
import styles from './ListProducts.module.scss';
import Card from '../Card/Card';

import Skeleton from '../Card/Skeleton';

function ListProducts() {
  const [products, setProducts] = React.useState([]);
  const [isLoaded, setIsLoaded] = React.useState(false);

  React.useEffect(() => {
    setIsLoaded(false);
    try {
      fetch('https://6352be6aa9f3f34c3747f338.mockapi.io/products')
        .then((resp) => resp.json())
        .then((res) => {
          setIsLoaded(true);
          setProducts(res);
        });
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <section className={styles.section}>
      <h1 className={styles.title}>Все пиццы</h1>
      <div className={styles.list}>
        {isLoaded
          ? products.map((product) => {
              return <Card key={product.id} {...product} />;
            })
          : [...new Array(8)].map((_, i) => {
              return <Skeleton key={i} />;
            })}
      </div>
    </section>
  );
}

export default ListProducts;
