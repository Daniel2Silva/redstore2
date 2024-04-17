import React from 'react';
import { UserContext } from '../../UserContext';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const { userLogin, error, loading } = React.useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();
    userLogin(email, password);
  }

  return (
    <div className="container">
      <Link to="criar">criar</Link>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">
          <p>Digite seu nick</p>
          <input
            type="text"
            placeholder="usuarario"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
          />
        </label>
        <label htmlFor="">
          <p>Digite sua senha</p>
          <input
            type="text"
            placeholder="senha"
            value={password}
            onChange={({ target }) => setPassword(target.value)}
          />
        </label>
        <button>Entrar</button>
        {error && <p>Usuario nao encontrado</p>}
      </form>
    </div>
  );
};

export default LoginForm;
