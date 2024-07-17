/* eslint-disable no-unused-vars */
import Header from './components/Header';
import Guitar from './components/Guitar';
import Footer from './components/Footer';
import { db } from './data/db';
import { useState } from 'react';

export default function App() {
  const [data, setData] = useState(db);
  const [cart, setCart] = useState([]);

  const addTocart = (item) => {
    const ItemExists = cart.findIndex((guitar) => item.id === guitar.id);
    if (ItemExists === -1) {
      item.quantity = 1;
      setCart([...cart, item]);
    } else {
      const updatedCart = [...cart];
      updatedCart[ItemExists].quantity++;
      setCart(updatedCart);
    }
  };

  return (
    <>
      <Header cart={cart} />
      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
          {data.map((guitar) => (
            <Guitar key={guitar.id} guitar={guitar} addTocart={addTocart} setCart={setCart} />
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}
