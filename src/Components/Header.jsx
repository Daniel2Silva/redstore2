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

        <div className={styles.loginCart}>
          <span className="material-symbols-outlined">shopping_cart</span>
          <div className={styles.user}>
            <Link to="/login">Entrar</Link>
            <span className="material-symbols-outlined">person</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
