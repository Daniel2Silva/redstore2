import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  return (
    <section className={styles.headerFixo}>
      <div className={`${styles.header} container`}>
        <Link to="/">
          <h1>
            RED<span>STORE</span>
          </h1>
        </Link>
        <ul>
          <li>
            <Link to="#promocao">Em Promoção</Link>
          </li>
          <li>
            <Link to="#vendidos">+Vendidos</Link>
          </li>
          <li>
            <Link to="#categorias">Categorias</Link>
          </li>
        </ul>
        <div>
          <span>Cart</span>
          <Link to="/login">Login</Link>
        </div>
      </div>
    </section>
  );
};

export default Header;
