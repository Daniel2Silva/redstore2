import React from 'react';
import Produtos from './Produtos/Produtos';
import Banner from './Main/Banner';
import MaisVendidos from './Produtos/MaisVendidos';

const Main = () => {
  return (
    <section>
      <Banner />
      <MaisVendidos />
    </section>
  );
};

export default Main;
