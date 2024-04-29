import React from 'react';
import { UserContext } from '../../UserContext';
import styles from './User.module.css';
import Loading from '../Helps/Loading';

const User = () => {
  const { data, loading, error } = React.useContext(UserContext);

  if (data)
    return (
      <section className="container animeLeft">
        <div className={styles.perfil}>
          <img src={data.avatar} alt="" />
          <h1>{data.name}</h1>
        </div>
      </section>
    );
};

export default User;
