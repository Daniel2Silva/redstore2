import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Categorias from './Categorias';
import CategoriasItem from './CategoriasItem';

const Produtos = () => {
  return (
    <div>
      <Categorias />
      <Routes>
        <Route
          path="/smartphone"
          element={
            <CategoriasItem
              tittle={'smartphone'}
              category={'smartphone'}
              offset={0}
            />
          }
        ></Route>
        <Route
          path="/tablets"
          element={
            <CategoriasItem tittle={'tablet'} category={'tablet'} offset={0} />
          }
        ></Route>
      </Routes>
    </div>
  );
};

export default Produtos;
