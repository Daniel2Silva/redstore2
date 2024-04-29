import React, { useContext } from 'react';
import { UserContext } from '../../UserContext';

const ButtonAdd = ({ item }) => {
  const { cart, setCart } = useContext(UserContext);

  const handleAddCart = () => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      const updatedCart = cart.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem,
      );
      setCart(updatedCart);
    } else {
      setCart((prevCart) => [...prevCart, { ...item, quantity: 1 }]);
    }

    localStorage.setItem('cart', JSON.stringify(cart));
  };

  return <button onClick={() => handleAddCart(item)}>Adicionar</button>;
};

export default ButtonAdd;
