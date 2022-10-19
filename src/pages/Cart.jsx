import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../components/Header/Header';
import ListCart from '../components/ListCart/ListCart';
import EmptyCart from '../components/EmptyCart/EmptyCart';

function Cart() {
  let isEmpty = true;

  return (
    <>
      <Header />
      {isEmpty ? <EmptyCart /> : <ListCart />}
    </>
  );
}

export default Cart;
