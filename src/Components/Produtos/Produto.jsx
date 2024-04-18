import React from 'react';
import useFetch from '../../Hooks/useFetch';
import { useParams } from 'react-router-dom';

const Produto = () => {
  const { data, loading, request, error } = useFetch();
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

  if (data)
    return (
      <section className="container">
        <h1>{data.title}</h1>
        <p>{data.description}</p>
        {data.images.map((img) => (
          <img key={id.image} src={img} alt="" />
        ))}
      </section>
    );
};

export default Produto;
