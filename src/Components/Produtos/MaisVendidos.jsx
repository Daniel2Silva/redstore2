import React, { useRef } from 'react';
import useFetch from '../../Hooks/useFetch';
import { PRODUCT_GET } from '../../api';
import { Link } from 'react-router-dom';
import styles from './ProdutosSlide.module.css';

const MaisVendidos = () => {
  const { data, loading, request, error } = useFetch();
  const carrosel = useRef(null);

  const prev = (e) => {
    e.preventDefault();
    carrosel.current.scrollLeft -= carrosel.current.offsetWidth;
  };

  const next = (e) => {
    e.preventDefault();
    carrosel.current.scrollLeft += carrosel.current.offsetWidth;
  };

  React.useEffect(() => {
    async function fethCategory() {
      const { url, options } = PRODUCT_GET(15, 10);
      const { response, json } = await request(url, options);
      console.log(json);
    }
    fethCategory();
  }, [request]);

  if (data)
    return (
      <div className={`${styles.containerP}  container`}>
        <h1>Mais Vendidos</h1>
        <section className={styles.produtos} ref={carrosel}>
          {data.map((item) => (
            <Link to={`/produto/${item.id}`} key={item.id}>
              <div className={styles.produtoItem}>
                <img src={item.images} alt="" />
                <div className={styles.priceName}>
                  <p>{item.title}</p>
                  <span>R${item.price},00</span>
                </div>
              </div>
            </Link>
          ))}
        </section>
        <div className={styles.btns}>
          <button onClick={prev} alt="Scroll Left" className={styles.prev}>
            p
          </button>
          <button onClick={next} alt="Scroll Rigth" className={styles.next}>
            n
          </button>
        </div>
      </div>
    );
};

export default MaisVendidos;
