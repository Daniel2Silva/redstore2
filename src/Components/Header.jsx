import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import CartButton from './Cart/CartButton';
import { UserContext } from '../UserContext';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const { data, userLogin, userLogout } = React.useContext(UserContext);
  const usenavigate = useNavigate();

  const handleLogout = () => {
    userLogout();
    usenavigate('/login');
  };
  return (
    <section className={styles.headerFixo}>
      <div className={`${styles.header} container`}>
        <Link to="/">
          <h1>
            RED<span>STORE</span>
          </h1>
        </Link>
        <div className={styles.loginCart}>
          <CartButton />
          <div className={styles.user}>
            {data ? (
              <div>
                <Link to="/conta">{data.name}</Link>
                <button onClick={handleLogout}>Sair</button>
              </div>
            ) : (
              <Link to="/login">Entrar</Link>
            )}
            <span className="material-symbols-outlined">person</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
