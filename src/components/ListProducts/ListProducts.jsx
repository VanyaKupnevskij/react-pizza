import React from 'react';
import styles from './ListProducts.module.scss';
import Card from '../Card/Card';

function ListProducts() {
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    try {
      fetch('https://6352be6aa9f3f34c3747f338.mockapi.io/products')
        .then((resp) => resp.json())
        .then((res) => setProducts(res));
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <section className={styles.section}>
      <h1 className={styles.title}>Все пиццы</h1>
      <div className={styles.list}>
        {products.map((product) => {
          return <Card key={product.id} {...product} />;
        })}
      </div>
    </section>
  );
}

export default ListProducts;
