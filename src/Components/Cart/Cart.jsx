import React, { useContext, useEffect } from 'react';
import styles from './Cart.module.css';
import CartItems from './CartItems';
import { UserContext } from '../../UserContext';
import { Link } from 'react-router-dom';
import FormatCurrency from '../Utilitarios/FormatCurrency';

const Cart = () => {
  const { cart, isCartVisible, setCart, setTotalPrice } =
    useContext(UserContext);

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, [setCart]);

  const totalPrice = cart.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  setTotalPrice(totalPrice);

  return (
    <section
      className={`${styles.cart} ${isCartVisible ? styles.cartActive : ''}`}
    >
      <div className={styles.cartItems}>
        {cart.map((item) => (
          <CartItems key={item.id} data={item} />
        ))}
      </div>
      <div className={styles.resumo}>
        <h3>{FormatCurrency(totalPrice, 'BRL')}</h3>
        {totalPrice ? <Link to="/checkout">Finalizar compra</Link> : ''}
      </div>
    </section>
  );
};

export default Cart;
