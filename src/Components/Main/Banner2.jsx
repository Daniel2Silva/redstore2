import React from 'react';
import styles from './Banner2.module.css';
import ImgBanner from '../../assets/exclusive.png';
import { Link } from 'react-router-dom';

const Banner2 = () => {
  return (
    <>
      <section className={styles.bannerContainer}>
        <div className={`${styles.banner} container  animeLeft`}>
          <section className={styles.bannerInfo}>
            <h1>
              Aqui Na <span>RED</span>STORE Você Encontra de Tudo!
            </h1>
            <p>
              Navegue por nossa diversificada linha de roupas meticulosamente
              elaboradas, projetadas para realçar sua individualidade e atender
              ao seu senso de estilo.
            </p>
            <Link to="/produtos/smartphone">
              <button>Ver Produtos</button>
            </Link>
          </section>
          <img src={ImgBanner} alt="" />
        </div>
      </section>
    </>
  );
};

export default Banner2;
