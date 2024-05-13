import React from 'react';
import Storage from './bebidas';

const Factory: React.FC = () => {
  const { products, produce, distribute } = Storage();

  const produceProduct = (product: keyof typeof products, quantity: number) => {
    produce(product, quantity);
  };

  const distributeProduct = (product: keyof typeof products, quantity: number) => {
    if (products[product] >= quantity) {
      distribute(product, quantity);
    } else {
      console.log('Not enough stock!');
    }
  };

  return (
    <div>
      <h2>Factory Dashboard</h2>
      <p>Juice Stock: {products.juice}</p>
      <p>Soda Stock: {products.soda}</p>
      <button onClick={() => produceProduct('juice', 10)}>Produce Juice</button>
      <button onClick={() => distributeProduct('juice', 5)}>Distribute Juice</button>
      <button onClick={() => produceProduct('soda', 10)}>Produce Soda</button>
      <button onClick={() => distributeProduct('soda', 5)}>Distribute Soda</button>
    </div>
  );
};

export default Factory;
