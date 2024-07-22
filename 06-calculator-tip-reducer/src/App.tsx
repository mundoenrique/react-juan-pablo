import { useReducer } from 'react';
import MenuItem from './components/MenuItem';
import OrderContents from './components/OrderContents';
import OrderTotals from './components/OrderTotals';
import TipPercentageForm from './components/TipPercentageForm';
import { menuItems } from './data/db';
import useOrder from './hook/useOrder';
import orderReducer, { initOrderState } from './reducers/orderReducer';

export default function App() {
  const { tip, setTip, placeOrder } = useOrder();
  const [state, dispatch] = useReducer(orderReducer, initOrderState);
  const { order } = state;
  return (
    <>
      <header className="bg-teal-400 py-5">
        <h1 className="text-center text-4xl font-black">Calculadora de Propinas y Consumo</h1>
      </header>
      <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">
        <div className="p-5">
          <h2 className="text-4xl font-black">Menú</h2>
          <div className="space-y-3 mt-10">
            {menuItems.map((item) => (
              <MenuItem key={item.id} item={item} dispatch={dispatch} />
            ))}
          </div>
        </div>
        <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
          {order.length > 0 ? (
            <>
              <OrderContents order={order} dispatch={dispatch} />
              <TipPercentageForm tip={tip} setTip={setTip} />
              <OrderTotals order={order} tip={tip} placeOrder={placeOrder} />
            </>
          ) : (
            <p className="text-center">La orden está vacia</p>
          )}
        </div>
      </main>
    </>
  );
}
