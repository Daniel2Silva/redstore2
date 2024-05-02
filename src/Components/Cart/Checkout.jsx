import React from 'react';
import { UserContext } from '../../UserContext';
import useFetch from '../../Hooks/useFetch';
import CartItems from './CartItems';
import styles from './Checkout.module.css';
import FormatCurrency from '../Utilitarios/FormatCurrency';

const Checkout = () => {
  const { cart, totalPrice, data } = React.useContext(UserContext);
  const [cep, setCep] = React.useState('');
  const [cepValue, setCepValue] = React.useState();
  const { request, error, loading } = useFetch();

  async function handleBuscarCep(event) {
    event.preventDefault();
    {
      const { json } = await request(
        `https://viacep.com.br/ws/${cepValue}/json/`,
      );
      setCep(json);
      console.log(json);
    }
  }
  return (
    <section className={styles.checkoutC}>
      <div className={styles.check}>
        <section>
          <h1>Produtos:</h1>
          <div className={styles.checkInfo}>
            {cart.map((item) => (
              <CartItems data={item} />
            ))}
          </div>
          <span>{FormatCurrency(totalPrice, 'BRL')}</span>
        </section>
        <form className={styles.checkPay}>
          {data ? (
            <span>{data.email}</span>
          ) : (
            <input type="email" placeholder="Digite seu email" />
          )}
          <h2>Forma de pagamento</h2>
          <div className={styles.cardCheck}>
            <label>
              Informações do Cartão
              <input
                className={styles.cardNumber}
                type="number"
                placeholder="1234 1234 1234 1234"
              />
              <input type="number" placeholder="MM/YY" />
              <input type="number" placeholder="CVC" />
            </label>
            <label>
              Nome no cartão
              <input type="text" />
            </label>
            <label>
              Endereço
              <input
                value={cepValue}
                type="number"
                placeholder="CEP"
                onChange={(event) => setCepValue(event.target.value)}
              />
            </label>
            <button className={styles.btnCep} onClick={handleBuscarCep}>
              Buscar Cep
            </button>
            {cep ? (
              <div>
                <p>Rua:{cep.logradouro}</p>
                <p>Bairro:{cep.bairro}</p>
                <p>Estado:{cep.localidade}</p>
              </div>
            ) : (
              ''
            )}
          </div>
          <span className={styles.btnP}>Comprar</span>
        </form>
      </div>
    </section>
  );
};

export default Checkout;
