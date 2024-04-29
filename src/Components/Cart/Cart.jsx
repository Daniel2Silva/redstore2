import React, { useContext, useEffect } from 'react';
import styles from './Cart.module.css';
import CartItems from './CartItems';
import { UserContext } from '../../UserContext';

const Cart = () => {
  const { cart, isCartVisible, setCart } = useContext(UserContext);

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, [setCart]);

  const totalPrice = cart.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

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
        <h1>{totalPrice}</h1>
      </div>
    </section>
  );
};

export default Cart;
