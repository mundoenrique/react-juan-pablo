import { menuItems } from './data/db';

export default function App() {
  console.log(menuItems);
  return (
    <>
      <header className="bg-teal-400 py-5">
        <h1 className="text-center text-4xl font-black">Calculadora de Propinas y Consumo</h1>
      </header>
    </>
  );
}
