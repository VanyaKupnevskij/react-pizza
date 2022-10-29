import React from 'react';

import styles from './ListProducts.module.scss';
import Card from '../Card/Card';
import Skeleton from '../Card/Skeleton';
import Paginator from '../Paginator/Paginator';
import { sortes } from '../Sort/Sort';

import API from '../../apiAxios';
import qs from 'qs';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setActivePage } from '../../redux/slices/PaginatorSlice';
import { setActiveCategory, setActiveSort } from '../../redux/slices/FilterSlice';

function ListProducts() {
  const [products, setProducts] = React.useState([]);
  const [isLoaded, setIsLoaded] = React.useState(false);
  const navigate = useNavigate();

  const refRoot = React.useRef(null);
  const isSearch = React.useRef(false);
  const isMounted = React.useRef(false);

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
    const category = activeCategory != 0 ? '&category=' + activeCategory : '';
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
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));

      const sort = sortes.find((obj) => obj.sort === params.activeSort);

      dispatch(setActiveCategory(params.activeCategory));
      dispatch(setActiveSort(sort));
      dispatch(setActivePage(params.activePage));

      isSearch.current = true;
    }
  }, []);

  React.useEffect(() => {
    if (!isSearch.current) {
      loadData();
    }
    isSearch.current = false;
  }, [activeCategory, searchValue, activeSort, activePage]);

  React.useEffect(() => {
    if (isMounted.current) {
      const queryStr = qs.stringify({
        activeCategory: activeCategory,
        activeSort: activeSort.sort,
        activePage: activePage,
      });
      navigate('?' + queryStr);
    }

    isMounted.current = true;
  }, [activeCategory, activePage, activeSort]);

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
