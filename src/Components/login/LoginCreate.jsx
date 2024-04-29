import React from 'react';
import { USER_POST } from '../../api';
import useFetch from '../../Hooks/useFetch';
import styles from './LoginCreate.module.css';
import { Link, Navigate } from 'react-router-dom';

const LoginCreate = () => {
  const [name, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [avatar, setAvatar] = React.useState(
    'https://plus.unsplash.com/premium_photo-1677094310893-0d6594c211ea?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  );

  const { request, error, loading, data } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = USER_POST({
      name: name,
      email: email,
      password: password,
      avatar: avatar,
    });
    const { response, json } = await request(url, options);
    console.log(json, response);
  }

  return (
    <section className="container animeLeft">
      <div className={styles.form}>
        <form onSubmit={handleSubmit}>
          <div className={styles.input}>
            <h1>Criar conta</h1>
            <input
              type="text"
              placeholder="Username"
              value={name}
              onChange={({ target }) => setUsername(target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={({ target }) => setEmail(target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />
          </div>
          <Link to="/login">
            Ja tem uma conta? <span style={{ color: 'blue' }}>Entre.</span>
          </Link>
          {data && <p>usuario criado</p>}
          <button>Enviar</button>
        </form>
      </div>
    </section>
  );
};

export default LoginCreate;
