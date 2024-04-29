import React from 'react';
import { UserContext } from '../../UserContext';
import { Link } from 'react-router-dom';
import styles from './LoginForm.module.css';

const LoginForm = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const { userLogin, error, loading } = React.useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();
    userLogin(email, password);
  }

  return (
    <div className="container animeLeft">
      <div className={styles.form}>
        <form onSubmit={handleSubmit}>
          <div className={styles.input}>
            <h1>Entrar</h1>
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
          </div>
          <Link to="criar" style={{ textAlign: 'center' }}>
            Novo aqui?{' '}
            <span style={{ color: 'blue' }}>Crie uma agora mesmo!</span>
          </Link>
          <div>
            <button>Entrar</button>
            {error && <p>Usuario nao encontrado</p>}
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
