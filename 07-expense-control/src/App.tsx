import BudgetForm from './components/BudgetForm';

export default function App() {
  return (
    <>
      <header className="bg-blue-600 py-8 maxh-72">
        <h1 className="uppercase text-center font-black tex-4xl text-white">PLanificador de gastos</h1>
      </header>
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lgmt-10 p-10">
        <BudgetForm />
      </div>
    </>
  );
}
