import React, { useRef } from 'react';
import useFetch from '../../Hooks/useFetch';
import { PRODUCT_GET } from '../../api';
import { Link } from 'react-router-dom';
import styles from './ProdutosSlide.module.css';
import { UserContext } from '../../UserContext';
import ButtonAdd from '../AddCartBtn/ButtonAdd';
import Loading from '../Helps/Loading';
import FormatCurrency from '../Utilitarios/FormatCurrency';
const MaisVendidos = ({ tittle, category }) => {
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
      const { url, options } = PRODUCT_GET(category);
      const { response, json } = await request(url, options);
      console.log(json);
    }
    fethCategory();
  }, [request, category]);

  if (loading) return <Loading />;
  if (data)
    return (
      <div className={`${styles.containerP}  container`}>
        <h2>{tittle}</h2>
        <section className={styles.produtos} ref={carrosel}>
          {data.results.map((item) => (
            <div key={item.id} className={styles.produtoItem}>
              <Link to={`/produto/${item.id}`}>
                <div>
                  <img src={item.thumbnail.replace(/\w\.jpg/gi, 'W.jpg')} />
                  <div className={styles.priceName}>
                    <h3>{item.title}</h3>
                  </div>
                </div>
              </Link>
              <div className={styles.btnCard}>
                <span>{FormatCurrency(item.price, 'BRL')}</span>
                <ButtonAdd item={item} quantity={1} />
              </div>
            </div>
          ))}
        </section>
        <div className={styles.btns}>
          <button onClick={prev} alt="Scroll Left" className={styles.prev}>
            ⭠
          </button>
          <button onClick={next} alt="Scroll Rigth" className={styles.next}>
            ⭢
          </button>
        </div>
      </div>
    );
};

export default MaisVendidos;
