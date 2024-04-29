import React, { Children } from 'react';
import { TOKEN_POST, TOKEN_REFRESH_POST, USER_GET } from './api';
import { useNavigate } from 'react-router-dom';

export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
  const [cart, setCart] = React.useState([]);
  const [data, setData] = React.useState(null);
  const [login, setLogin] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [isCartVisible, setIsCartVisible] = React.useState(false);
  const navigation = useNavigate();

  const userLogout = React.useCallback(async function () {
    setData(null);
    setError(null);
    setLoading(false);
    setLogin(false);
    window.localStorage.removeItem('token');
    window.localStorage.removeItem('refreshToken');
    window.localStorage.removeItem('cart');
  }, []);

  async function getUser(access_token) {
    const { url, options } = USER_GET(access_token);
    const response = await fetch(url, options);
    const json = await response.json();
    setData(json);
    setLogin(true);
    console.log(json);
  }

  async function userLogin(email, password) {
    try {
      setLoading(true);
      const { url, options } = TOKEN_POST({ email, password });
      const tokenRes = await fetch(url, options);
      if (!tokenRes.ok) throw new Error(`Error: Usuario invalido`);
      const { access_token, refresh_token } = await tokenRes.json();
      window.localStorage.setItem('token', access_token);
      window.localStorage.setItem('refreshToken', refresh_token);
      console.log(access_token, refresh_token);
      getUser(access_token);
      navigation('/');
    } catch (err) {
      setError(err.message);
      setLogin(false);
    } finally {
      setLoading(false);
    }
  }

  async function tokenRefresh() {
    const refresh_token = window.localStorage.getItem('refreshToken');
    const { url, options } = TOKEN_REFRESH_POST(refresh_token);
    const response = await fetch(url, options);
    const json = await response.json();
    if (!response.ok) {
      window.localStorage.removeItem('token');
      window.localStorage.removeItem('refreshToken');
      setLogin(false);
      navigation('/login');
      throw new Error('token de acessos invalido ou experiado');
    }
    window.localStorage.setItem('token', json.access_token);
    getUser(json.access_token);
  }

  React.useEffect(() => {
    async function autoLogin() {
      const access_token = window.localStorage.getItem('token');
      if (access_token) {
        try {
          setError(null);
          setLoading(true);
          await getUser(access_token);
        } catch (error) {
          setLoading(false);
          tokenRefresh();
        }
      } else {
        setLogin(false);
      }
    }
    autoLogin();
  }, [userLogout]);

  return (
    <UserContext.Provider
      value={{
        userLogin,
        loading,
        error,
        data,
        cart,
        setCart,
        isCartVisible,
        setIsCartVisible,
        userLogout,
        login,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
