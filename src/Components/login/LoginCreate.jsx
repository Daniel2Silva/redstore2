import React from 'react';
import { USER_POST } from '../../api';
import useFetch from '../../Hooks/useFetch';

const LoginCreate = () => {
  const [name, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [avatar, setAvatar] = React.useState('');

  const { request } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = USER_POST({
      name: name,
      email: email,
      password: password,
      avatar: avatar,
    });
    const { json } = await request(url, options);
    console.log(json);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Username"
        value={name}
        onChange={({ target }) => setUsername(target.value)}
      />
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={({ target }) => setEmail(target.value)}
      />
      <input
        type="text"
        placeholder="Password"
        value={password}
        onChange={({ target }) => setPassword(target.value)}
      />
      <input
        type="text"
        placeholder="avatar"
        value={avatar}
        onChange={({ target }) => setAvatar(target.value)}
      />
      <button>Enviar</button>
    </form>
  );
};

export default LoginCreate;
