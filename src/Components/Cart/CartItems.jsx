import React, { useContext } from 'react';
import styles from './CartItem.module.css';
import { UserContext } from '../../UserContext';

const CartItems = ({ data }) => {
  const { cart, setCart } = useContext(UserContext);
  const { title, price, id, quantity, images } = data;
  const handleCartRemove = () => {
    const updatedItems = cart.filter((item) => item.id != id);
    setCart(updatedItems);
  };

  return (
    <section className={styles.cartItem}>
      <img src={images} alt="" className={styles.cartImage} />
      <div className={styles.cartItemContent}>
        <h3>{title}</h3>
        <div className={styles.infoPrice}>
          <span>{price}</span>
          <span>Quantidade:{quantity}</span>
        </div>
        <button onClick={handleCartRemove} className={styles.buttonRemove}>
          x
        </button>
      </div>
    </section>
  );
};

export default CartItems;
