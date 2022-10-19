import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../components/Header/Header';
import Filter from '../components/Filter/Filter';
import ListProducts from '../components/ListProducts/ListProducts';

function Home() {
  return (
    <>
      <Header />
      <Filter />
      <ListProducts />
    </>
  );
}

export default Home;
