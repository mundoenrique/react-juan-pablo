import Header from './components/Header';
import Guitar from './components/Guitar';
import Footer from './components/Footer';
import { db } from './data/db';
import { useEffect, useState } from 'react';

/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
export default function App() {
  const initialCart = () => {
    const localStorageCart = localStorage.getItem('cart');

    return localStorageCart ? JSON.parse(localStorageCart) : [];
  };
  const [data] = useState(db);
  const [cart, setCart] = useState(initialCart);
  const MIN_ITEMS = 1;
  const MAX_ITEMS = 5;

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addTocart = (item) => {
    const ItemExists = cart.findIndex((guitar) => item.id === guitar.id);
    if (ItemExists === -1) {
      item.quantity = 1;
      setCart([...cart, item]);
    } else {
      const updatedCart = [...cart];
      updatedCart[ItemExists].quantity < MAX_ITEMS && updatedCart[ItemExists].quantity++;
      setCart(updatedCart);
    }
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((guitar) => guitar.id !== id));
  };

  const increaseQuantity = (id) => {
    const updatedCart = cart.map((item) => {
      if (item.id === id && item.quantity < MAX_ITEMS) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }

      return item;
    });

    setCart(updatedCart);
  };

  const decreaseQuantity = (id) => {
    const updatedCart = cart.map((item) => {
      if (item.id === id && item.quantity > MIN_ITEMS) {
        return {
          ...item,
          quantity: item.quantity - 1,
        };
      }

      return item;
    });

    setCart(updatedCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <>
      <Header
        cart={cart}
        removeFromCart={removeFromCart}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
        clearCart={clearCart}
      />
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
