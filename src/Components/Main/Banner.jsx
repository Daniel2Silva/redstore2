import React from 'react';
import styles from './Banner.module.css';
import ImgBanner from '../../assets/msi-not.png';
import ImgAcer from '../../assets/acer.svg';
import ImgApple from '../../assets/apple2.svg';
import ImgNike from '../../assets/nike.svg';

const Banner = () => {
  return (
    <>
      <section className={styles.bannerContainer}>
        <div className={`${styles.banner} container`}>
          <section className={styles.bannerInfo}>
            <h1>
              Aqui Na RED<span>STORE</span> Você Encontra de Tudo!
            </h1>
            <p>
              Navegue por nossa diversificada linha de roupas meticulosamente
              elaboradas, projetadas para realçar sua individualidade e atender
              ao seu senso de estilo.
            </p>
            <button>Ver loja</button>
          </section>
          <img src={ImgBanner} alt="" />
        </div>
      </section>
      <section className={styles.containerMarcas}>
        <div className={styles.marcas}>
          <img src={ImgAcer} alt="" className={styles.marca} />
          <img src={ImgNike} alt="" className={styles.marca} />
          <img src={ImgApple} alt="" className={styles.marca} />
        </div>
      </section>
    </>
  );
};

export default Banner;
