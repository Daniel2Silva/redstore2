import React, { useContext } from 'react';
import { UserContext } from '../../UserContext';
import styles from './CartButton.module.css';

const CartButton = () => {
  const { cart, isCartVisible, setIsCartVisible } = useContext(UserContext);

  return (
    <button
      type="button"
      onClick={() => setIsCartVisible(!isCartVisible)}
      className={`material-symbols-outlined ${styles.cartButton}`}
    >
      shopping_cart
      {cart.length > 0 && (
        <span className={styles.cartItemN}>{cart.length}</span>
      )}
    </button>
  );
};

export default CartButton;
