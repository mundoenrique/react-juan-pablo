import Guitar from './components/Guitar';
import Header from './components/Header';
import Footer from './components/Footer';
import { useCart } from './hooks/useCart';
import { useReducer } from 'react';
import { cartReducer, initGuitarList } from './reducers/cartReducers';

export default function App() {
  const { clearCart } = useCart();

  const [state, dispatch] = useReducer(cartReducer, initGuitarList);
  const { data, cart } = state;

  return (
    <>
      <Header cart={cart} clearCart={clearCart} dispatch={dispatch} />

      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
          {data.map((guitar) => (
            <Guitar key={guitar.id} guitar={guitar} dispatch={dispatch} />
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}
