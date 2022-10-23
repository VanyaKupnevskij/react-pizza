import React from 'react';
import styles from './ListProducts.module.scss';
import Card from '../Card/Card';
import Skeleton from '../Card/Skeleton';
import Paginator from '../Paginator/Paginator';

import AppContext from '../../context';

function ListProducts() {
  const [products, setProducts] = React.useState([]);
  const [isLoaded, setIsLoaded] = React.useState(false);

  const refRoot = React.useRef(null);

  const { activeSort } = React.useContext(AppContext);
  const { activeCategory } = React.useContext(AppContext);
  const { activePage, setActivePage } = React.useContext(AppContext);

  function countGetProductByWidth(width) {
    if (width <= 808) return 4;
    else if (width <= 1063) return 6;
    else if (width <= 1343) return 8;
    else return 10;
  }

  function loadData() {
    setIsLoaded(false);
    const sortBy = activeSort.sort.replace('-', '');
    const order = activeSort.sort.includes('-') ? 'desc' : 'asc';
    const category = activeCategory !== 0 ? '&category=' + activeCategory : '';
    const limit = countGetProductByWidth(refRoot.current.offsetWidth);
    const curPage = activePage;
    try {
      fetch(
        'https://6352be6aa9f3f34c3747f338.mockapi.io/products?' +
          '&page=' +
          curPage +
          '&limit=' +
          limit +
          category +
          '&sortBy=' +
          sortBy +
          '&order=' +
          order,
      )
        .then((resp) => resp.json())
        .then((res) => {
          setIsLoaded(true);
          setProducts(res);
          window.scrollTo(0, 0);
        });
    } catch (err) {
      console.log(err);
    }
  }

  React.useEffect(() => {
    setActivePage(1);
    loadData();
  }, [activeCategory]);
  React.useEffect(() => {
    loadData();
  }, [activeSort, activePage]);

  return (
    <section className={styles.section} ref={refRoot}>
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
      <Paginator countTotalPages={3} />
    </section>
  );
}

export default ListProducts;

function Block() {
  const ref = React.useRef(null);

  const [width, setWidth] = React.useState(0);

  React.useLayoutEffect(() => {
    setWidth(ref.current.offsetWidth);
  }, []);

  return (
    <span ref={ref}>
      <p>Width: {width}</p>
    </span>
  );
}
