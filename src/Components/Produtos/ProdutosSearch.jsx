import React, { useState, useEffect } from 'react';
import CategoriasItem from './CategoriasItem';
import { useParams } from 'react-router-dom';

const ProdutosSearch = () => {
  const { searchTerm } = useParams();

  return (
    <div className="container">
      <h2>Resultados da Pesquisa para: {decodeURIComponent(searchTerm)}</h2>
      <CategoriasItem category={searchTerm} />
    </div>
  );
};

export default ProdutosSearch;
