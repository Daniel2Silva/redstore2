import React from 'react';
import useFetch from '../../Hooks/useFetch';
import { useParams } from 'react-router-dom';
import styles from './Produto.module.css';
import Button from '../Helps/Button';
import Loading from '../Helps/Loading';
import ButtonAdd from '../AddCartBtn/ButtonAdd';
import FormatCurrency from '../Utilitarios/FormatCurrency';

const Produto = () => {
  const { data, loading, request, error } = useFetch();
  const [imgAtual, setImgAtual] = React.useState(0);
  const [quantity, setQuantity] = React.useState(1);
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

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  if (loading) return <Loading />;
  if (data)
    return (
      <section className={`${styles.containerProduto}  container`}>
        <section className={styles.produto}>
          <div className={styles.imgsLeft}>
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
          </div>
          <section className={styles.infoProduto}>
            <div>
              <h1 className={styles.tProduto}>{data.title}</h1>
              <span>{FormatCurrency(data.price, 'BRL')}</span>
              <h2>Infos sobre o produto</h2>
              {data.attributes.slice(10, 20).map((info) => (
                <ul>
                  <li>
                    {info.name}: {info.value_name}
                  </li>
                </ul>
              ))}
            </div>
            <div className={styles.addCart}>
              <div className={styles.btnIncrement}>
                <button className={styles.decre} onClick={decrementQuantity}>
                  -
                </button>
                <span className={styles.quantity}>{quantity}</span>
                <button className={styles.encre} onClick={incrementQuantity}>
                  +
                </button>
              </div>
              <ButtonAdd add={styles.add} item={data} quantity={quantity} />
            </div>
          </section>
        </section>
      </section>
    );
};

export default Produto;
