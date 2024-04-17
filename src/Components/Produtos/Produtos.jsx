import React from 'react';
import useFetch from '../../Hooks/useFetch';
import { Link } from 'react-router-dom';

const Produtos = () => {
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    async function fethaData() {
      const { json } = await request(
        'https://api.escuelajs.co/api/v1/categories?limit=5',
      );
      console.log(json);
    }
    fethaData();
  }, [request]);
  if (error) return <p>erro ao carrega produtos</p>;
  if (loading) return <p>loading</p>;
  if (data)
    return (
      <div className="containerItens">
        <section className="produtos">
          {data.map((item) => (
            <Link
              to={`/produto/${item.id}`}
              key={item.id}
              className="produtoItem"
            >
              <img src={item.image} alt="" />
              <p>{item.title}</p>
            </Link>
          ))}
        </section>
      </div>
    );
};

export default Produtos;
