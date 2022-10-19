import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../components/Header/Header';
import Filter from '../components/Filter/Filter';

function Home() {
  return (
    <>
      <Header />
      <Filter />
    </>
  );
}

export default Home;
