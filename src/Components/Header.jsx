import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import { UserContext } from '../UserContext';
import { useNavigate } from 'react-router-dom';
import useMedia from '../Hooks/useMedia';
import Cart from './Cart/Cart';

const Header = () => {
  const { data, userLogin, userLogout } = React.useContext(UserContext);
  const usenavigate = useNavigate();
  const mobile = useMedia('(max-width: 750px)');
  const [mobileMenu, setMobileMenu] = React.useState(false);

  const [searchTerm, setSearchTerm] = React.useState('');

  const handleLogout = () => {
    userLogout();
    usenavigate('/login');
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      usenavigate(`/search/${encodeURIComponent(searchTerm.trim())}`);
    }
  };

  return (
    <section className={styles.headerFixo}>
      <div className={`${styles.header} container`}>
        <Link to="/">
          <h1>
            RED<span>STORE</span>
          </h1>
        </Link>
        <form className={styles.searchArea} onSubmit={handleSearchSubmit}>
          <input
            className={styles.searchBar}
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Pesquisar produtos"
          />
          <button
            className={`${styles.btnSearch} material-symbols-outlined `}
            type="submit"
          ></button>
        </form>
        <div className={styles.loginCart}>
          <Cart />
          <div
            className={`${mobile ? styles.userMobile : styles.user} ${
              mobileMenu && styles.userMobileActive
            }`}
          >
            {data ? (
              <div className={styles.navMobile}>
                {mobile ? (
                  <div>
                    <h1>{data.name}</h1>
                    <Link to="/conta">Meu perfil</Link>
                  </div>
                ) : (
                  <div>
                    <Link to="/conta">{data.name}</Link>
                    <button onClick={handleLogout}>Sair</button>
                  </div>
                )}
              </div>
            ) : (
              <Link className={styles.entrar} to="/login">
                Entrar
              </Link>
            )}
            {mobile && (
              <nav className={styles.navHeaderMobile}>
                <Link to="/">Inicio</Link>
                <Link to="/checkout">Carinho</Link>
                <Link to="/produtos/smartphone">Categorias</Link>
                {data && <button onClick={handleLogout}>Sair</button>}
              </nav>
            )}
          </div>
          {mobile && (
            <button
              className={` material-symbols-outlined ${styles.menu}
             `}
              onClick={() => setMobileMenu(!mobileMenu)}
            >
              menu
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Header;
