import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../components/Header/Header';
import Filter from '../components/Filter/Filter';
import Sort from '../components/Sort/Sort';
import ListProducts from '../components/ListProducts/ListProducts';
import AppContext from '../context';

import styles from './Home.module.scss';

function Home() {
  const [activeSort, setActiveSort] = React.useState({ name: 'популярности', sort: 'rating' });

  return (
    <>
      <AppContext.Provider value={{ activeSort, setActiveSort }}>
        <Header />
        <section className={styles.section}>
          <Filter />
          <Sort />
        </section>
        <ListProducts />
      </AppContext.Provider>
    </>
  );
}

export default Home;
