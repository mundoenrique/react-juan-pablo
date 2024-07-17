import Header from './components/Header';
import Guitar from './components/Guitar';
import Footer from './components/Footer';
import { db } from './data/db';

export default function App() {
  return (
    <>
      <Header />
      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
          {db.map((guitar) => (
            <Guitar key={guitar.id} guitar={guitar} />
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}
