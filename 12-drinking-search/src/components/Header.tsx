import { ChangeEvent, FormEvent, useEffect, useMemo, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useAppStore } from '../stores/useStore';
import { TSearchFilter } from '../types';

export default function Header() {
  const [searcFilters, setSearcFilters] = useState<TSearchFilter>({
    ingredient: '',
    category: '',
  });
  const fetchCategories = useAppStore((state) => state.fetchCategories);
  const categories = useAppStore((state) => state.categories);
  const searchRecipes = useAppStore((state) => state.searchRecipes);
  const showNotification = useAppStore((state) => state.showNotification);

  const { pathname } = useLocation();
  const isHome = useMemo(() => pathname === '/', [pathname]);

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  const handleChangeForm = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setSearcFilters({
      ...searcFilters,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (Object.values(searcFilters).includes('')) {
      showNotification({ text: 'Todos los campos son oligatorios', error: true });
      return;
    }

    searchRecipes(searcFilters);
  };

  return (
    <header className={isHome ? 'bg-header bg-center bg-cover' : 'bg-slate-800'}>
      <div className="mx-auto container px-5 py-16">
        <div className="flex justify-between items-center">
          <div>
            <img src="/logo.svg" alt="Logotipo" className="w-32" />
          </div>
          <nav className="flex gap-4">
            <Link to="/" className="text-white uppercase font-bold">
              Inicio
            </Link>
            <NavLink
              to="/favorites"
              className={({ isActive }) =>
                isActive ? 'text-orange-500 uppercase font-bold' : 'text-white uppercase font-bold'
              }
            >
              Favoritos
            </NavLink>
          </nav>
        </div>
        {isHome && (
          <form
            className="md:w-1/2 2xl:w-1/3 bg-orange-400 my-32 p-10 rounded-lg shadow space-y-6"
            onSubmit={handleSubmitForm}
          >
            <div className="space-y-4">
              <label htmlFor="ingredient" className="block text-white uppercase font-extrabold text-lg">
                Nombre o ingredientes
              </label>
              <input
                id="ingredient"
                name="ingredient"
                type="text"
                className="p-3 w-full rounded-lg focus:outline-none"
                placeholder="Nombre o ingrediente"
                onChange={handleChangeForm}
                value={searcFilters.ingredient}
              />
            </div>
            <div className="space-y-4">
              <label htmlFor="category" className="block text-white uppercase font-extrabold text-lg">
                Categoría
              </label>
              <select
                id="category"
                name="category"
                className="p-3 w-full rounded-lg focus:outline-none"
                onChange={handleChangeForm}
                value={searcFilters.category}
              >
                <option value="" disabled>
                  -- Seleccione
                </option>
                {categories.drinks.map((drink) => (
                  <option key={drink.strCategory} value={drink.strCategory}>
                    {drink.strCategory}{' '}
                  </option>
                ))}
              </select>
            </div>
            <input
              type="submit"
              value="Buscar recetas"
              className="cursor-pointer bg-orange-800 hover:orange-900 text-white font-extrabold w-full p-2 rounded-lg uppercase"
            />
          </form>
        )}
      </div>
    </header>
  );
}
