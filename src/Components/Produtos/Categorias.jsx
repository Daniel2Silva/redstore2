import React from 'react';

import { NavLink } from 'react-router-dom';

import styles from './CategoriasNav.module.css';

const Categorias = () => {
  return (
    <section className="container">
      <div className={styles.nav}>
        <NavLink to="/produtos/smartphone" end>
          <h1>Smarphone</h1>
        </NavLink>
        <NavLink to="/produtos/tablets" end>
          <h1>Tablet</h1>
        </NavLink>
      </div>
    </section>
  );
};

export default Categorias;
