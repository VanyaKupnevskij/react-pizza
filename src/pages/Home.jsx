import React from 'react';

import Header from '../components/Header/Header';
import Filter from '../components/Filter/Filter';
import Sort from '../components/Sort/Sort';
import ListProducts from '../components/ListProducts/ListProducts';

import styles from './Home.module.scss';

function Home() {
  return (
    <main>
      <Header />
      <section className={styles.section}>
        <Filter />
        <Sort />
      </section>
      <ListProducts />
    </main>
  );
}

export default Home;
