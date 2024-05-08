import React, { useContext, useEffect, useRef, useState } from 'react';
import styles from './Cart.module.css';
import CartItems from './CartItems';
import { UserContext } from '../../UserContext';
import { Link } from 'react-router-dom';
import FormatCurrency from '../Utilitarios/FormatCurrency';

const Cart = () => {
  const { cart, setCart, setTotalPrice } = useContext(UserContext);
  const [isCartVisible, setIsCartVisible] = useState(false);
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, [setCart]);

  const totalPrice = cart.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  useEffect(() => {
    setTotalPrice(totalPrice);
  }, [totalPrice, setTotalPrice]);

  let cartRef = useRef();

  useEffect(() => {
    let handle = (e) => {
      if (!cartRef.current.contains(e.target) && isCartVisible) {
        setIsCartVisible(false);
      }
    };
    document.addEventListener('mousedown', handle);

    return () => {
      document.removeEventListener('mousedown', handle);
    };
  }, [isCartVisible]);

  return (
    <div ref={cartRef}>
      <button
        onClick={() => setIsCartVisible(!isCartVisible)}
        type="button"
        className={`material-symbols-outlined ${styles.cartButton}`}
      >
        shopping_cart
        {cart.length > 0 && (
          <span className={styles.cartItemN}>{cart.length}</span>
        )}
      </button>
      <div
        className={`${styles.cart} ${
          isCartVisible ? styles.cartActive : styles.cartInactive
        }`}
      >
        <div className={styles.cartItems}>
          {cart.map((item) => (
            <CartItems key={item.id} data={item} />
          ))}
        </div>
        <div className={styles.resumo}>
          <h3>{FormatCurrency(totalPrice, 'BRL')}</h3>
          {totalPrice ? (
            <Link to="/checkout">
              <button>Finalizar compra</button>
            </Link>
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
