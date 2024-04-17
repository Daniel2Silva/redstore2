import React from 'react';
import useFetch from '../../Hooks/useFetch';
import { useParams } from 'react-router-dom';

const Produto = () => {
  const { data, loading, request, error } = useFetch();
  const { id } = useParams();

  React.useEffect(() => {
    async function fethData() {
      const { json } = await request(
        `https://api.escuelajs.co/api/v1/categories/${id}/products`,
      );
      console.log(json);
    }
    fethData();
  }, [id, request]);

  if (data)
    return (
      <section style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        {data.map((item) => (
          <div key={item.id} style={{ width: '200px' }}>
            <img src={item.images} alt="" />
            <h1 style={{ fontSize: '1rem' }}>{item.title}</h1>
            <span>R${item.price},00</span>
          </div>
        ))}
      </section>
    );
};

export default Produto;
