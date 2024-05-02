import React from 'react';
import Produtos from './Produtos/Produtos';
import Banner from './Main/Banner';
import MaisVendidos from './Produtos/MaisVendidos';
import Banner2 from './Main/Banner2';

const Main = () => {
  return (
    <section>
      <Banner />
      <MaisVendidos tittle="iPhone" category="iphone" />
      <MaisVendidos tittle="Notebook" category="notebook" />
      <Banner2 />
    </section>
  );
};

export default Main;
