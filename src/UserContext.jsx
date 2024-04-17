import React, { Children } from 'react';
import { TOKEN_POST } from './api';
import { useNavigate } from 'react-router-dom';

export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
  const [data, setData] = React.useState(null);
  const [login, setLogin] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const navigation = useNavigate();

  async function userLogin(email, password) {
    try {
      setLoading(true);
      const { url, options } = TOKEN_POST({ email, password });
      const tokenRes = await fetch(url, options);
      if (!tokenRes.ok) throw new Error(`Error: Usuario invalido`);
      const { access_token } = await tokenRes.json();
      console.log(access_token);
      navigation('/conta');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <UserContext.Provider value={{ userLogin, loading, error }}>
      {children}
    </UserContext.Provider>
  );
};
