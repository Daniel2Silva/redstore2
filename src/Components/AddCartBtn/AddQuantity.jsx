import React from 'react';
import { UserContext } from '../../UserContext';

const AddQuantity = ({ quantity, setQuantity }) => {
  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  return <div></div>;
};

export default AddQuantity;
