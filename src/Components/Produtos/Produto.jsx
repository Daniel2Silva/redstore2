import React from 'react';
import useFetch from '../../Hooks/useFetch';
import { useParams } from 'react-router-dom';
import styles from './Produto.module.css';
import { func } from 'prop-types';

const Produto = () => {
  const { data, loading, request, error } = useFetch();
  const [imgAtual, setImgAtual] = React.useState(0);
  const { id } = useParams();

  React.useEffect(() => {
    async function fethData() {
      const { json } = await request(
        `https://api.escuelajs.co/api/v1/products/${id}`,
      );
      console.log(json);
    }
    fethData();
  }, [id, request]);

  function handleImage(index) {
    if (index !== imgAtual) {
      setImgAtual(index);
    }
  }
  if (data)
    return (
      <section className={`${styles.containerProduto}  container`}>
        <section className={styles.produto}>
          <div className={styles.Left}>
            {data.images.map((img, index) => (
              <img
                className={styles.imgLeft}
                onClick={() => handleImage(index)}
                key={id.image}
                src={img}
                alt=""
              />
            ))}
          </div>
          <div className={styles.imgRigth}>
            <img
              className={styles.imgBig}
              style={{ background: 'red' }}
              src={data.images[imgAtual]}
              alt=""
            />
          </div>
          <div className={styles.infoProduto}>
            <h1>{data.title}</h1>
            <p>{data.description}</p>
            <span>{data.price}</span>
            <button>Adicionar ao Carrinho</button>
          </div>
        </section>
      </section>
    );
};

export default Produto;
