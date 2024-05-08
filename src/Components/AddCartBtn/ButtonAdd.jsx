import React, { useContext } from 'react';
import { UserContext } from '../../UserContext';

const ButtonAdd = ({ item, quantity, add }) => {
  const { cart, setCart } = useContext(UserContext);

  const handleAddCart = () => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      const updatedCart = cart.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + quantity }
          : cartItem,
      );
      setCart(updatedCart);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
    } else {
      setCart((prevCart) => [...prevCart, { ...item, quantity: quantity }]);
      localStorage.setItem(
        'cart',
        JSON.stringify([...cart, { ...item, quantity: quantity }]),
      );
    }
  };

  return (
    <button className={add} onClick={() => handleAddCart(item)}>
      Adicionar
    </button>
  );
};

export default ButtonAdd;
