import React, { useEffect } from 'react';
import useFetch from '../../Hooks/useFetch';
import { PRODUCT_GET, PRODUCT_SEARCH } from '../../api';
import { Link } from 'react-router-dom';
import styles from './CategoriasItem.module.css';
import ButtonAdd from '../AddCartBtn/ButtonAdd';
import Loading from '../Helps/Loading';
import FormatCurrency from '../Utilitarios/FormatCurrency';
const CategoriasItem = ({ title, category }) => {
  const { data, loading, request, error } = useFetch();
  const [offset, setOffset] = React.useState(0);

  const handleNextPage = () => {
    setOffset((prevOffset) => prevOffset + 12);
  };
  const handlePrevPage = () => {
    if (offset > 0) {
      setOffset((prevOffset) => prevOffset - 12);
    }
  };

  useEffect(() => {
    async function fetchCategory() {
      const { url, options } = PRODUCT_SEARCH(category, offset);
      const { response, json } = await request(url, options);
      console.log(json);
    }
    fetchCategory();
  }, [request, category, offset]);

  if (loading) return <Loading />;
  if (data) {
    return (
      <div className={`${styles.containerP} container`}>
        <h2>{title}</h2>
        <section className={styles.produtos}>
          {data.results.map((item) => (
            <div key={item.id} className={styles.produtoItem}>
              <Link to={`/produto/${item.id}`}>
                <div>
                  <img src={item.thumbnail} alt="" />
                  <div className={styles.priceName}>
                    <h3>{item.title}</h3>
                  </div>
                </div>
              </Link>
              <div className={styles.btnCard}>
                <span>{FormatCurrency(item.price, 'BRL')}</span>
                <ButtonAdd item={item} />
              </div>
            </div>
          ))}
        </section>
        <div className={styles.btnNP}>
          <button onClick={handlePrevPage} disabled={offset === 0}>
            Pagina Anterior
          </button>
          <button onClick={handleNextPage}>Próxima Página</button>
        </div>
      </div>
    );
  } else {
    return <p>Loading...</p>;
  }
};

export default CategoriasItem;
