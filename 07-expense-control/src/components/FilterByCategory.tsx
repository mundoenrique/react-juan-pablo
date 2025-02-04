import { ChangeEvent } from 'react';
import { categories } from '../data';
import { useBudget } from '../hooks/useBudget';

export default function FilterByCategory() {
  const { state, dispatch } = useBudget();

  const handleChangeCat = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch({ type: 'add-filter-category', payload: { id: e.target.value } });
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-10">
      <form>
        <div className="flex flex-col md:flex-row md:items-center gap-5">
          <label htmlFor="category">Filtrar gastos</label>
          <select
            name="category"
            id="category"
            className="bg-slate-100 p-3 flex-1 rounded"
            value={state.currenCategory}
            onChange={handleChangeCat}
          >
            <option value="">-- Todas las categorias</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
      </form>
    </div>
  );
}
