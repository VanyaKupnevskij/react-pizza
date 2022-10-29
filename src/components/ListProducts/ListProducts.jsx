import React from 'react';

import styles from './ListProducts.module.scss';
import Card from '../Card/Card';
import Skeleton from '../Card/Skeleton';
import Paginator from '../Paginator/Paginator';

import API from '../../apiAxios';
import { useSelector, useDispatch } from 'react-redux';
import { setActivePage } from '../../redux/slices/PaginatorSlice';

function ListProducts() {
  const [products, setProducts] = React.useState([]);
  const [isLoaded, setIsLoaded] = React.useState(false);

  const refRoot = React.useRef(null);

  const dispatch = useDispatch();
  const activePage = useSelector((state) => state.paginator.activePage);
  const searchValue = useSelector((state) => state.search.searchValue);
  const activeSort = useSelector((state) => state.filter.activeSort);
  const activeCategory = useSelector((state) => state.filter.activeCategory);

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
    const search = searchValue !== '' ? '&title=' + searchValue : '';

    try {
      API.get(
        'products?' +
          '&page=' +
          curPage +
          '&limit=' +
          limit +
          category +
          '&sortBy=' +
          sortBy +
          '&order=' +
          order +
          search,
      ).then((res) => {
        setIsLoaded(true);
        setProducts(res.data);
        window.scrollTo(0, 0);
      });
    } catch (err) {
      console.log(err);
    }
  }

  React.useEffect(() => {
    dispatch(setActivePage(1));
    loadData();
  }, [activeCategory, searchValue]);
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
