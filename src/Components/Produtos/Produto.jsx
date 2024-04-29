import React from 'react';
import useFetch from '../../Hooks/useFetch';
import { useParams } from 'react-router-dom';
import styles from './Produto.module.css';
import Button from '../Helps/Button';
import Loading from '../Helps/Loading';
import ButtonAdd from '../AddCartBtn/ButtonAdd';

const Produto = () => {
  const { data, loading, request, error } = useFetch();
  const [imgAtual, setImgAtual] = React.useState(0);
  const { id } = useParams();

  React.useEffect(() => {
    async function fethData() {
      const { json } = await request(
        `https://api.mercadolibre.com/items/${id}`,
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
  if (loading) return <Loading />;
  if (data)
    return (
      <section className={`${styles.containerProduto}  container`}>
        <section className={styles.produto}>
          <div className={styles.Left}>
            {data.pictures.slice(0, 3).map((img, index) => (
              <img
                className={styles.imgLeft}
                onClick={() => handleImage(index)}
                key={img.id}
                src={img.url}
                alt=""
              />
            ))}
          </div>
          <div className={styles.imgRigth}>
            <img
              className={styles.imgBig}
              style={{ background: 'red' }}
              src={data.pictures[imgAtual].url}
              alt=""
            />
          </div>
          <div className={styles.infoProduto}>
            <h1 className="title">{data.title}</h1>
            <ButtonAdd item={data} />
          </div>
        </section>
      </section>
    );
};

export default Produto;
