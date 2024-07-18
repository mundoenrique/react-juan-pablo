import { categories } from '../data';

export default function Form() {
  return (
    <form className="space-y-5 bg-white shadow p-10 rounded-lg">
      <div className="grid grid-cols-1 gap-3">
        <label className="font-bold" htmlFor="category">
          Categorias:
        </label>
        <select className="border border-slate-300 p-2 rounded-lg w-full bg-white" id="category">
          <option disabled selected>
            Selecciona una opción
          </option>
          {categories.map(({ id, name }) => (
            <option key={id} value={id}>
              {name}
            </option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-1 gap-3">
        <label className="font-bold" htmlFor="activity">
          Actividad:
        </label>
        <input
          className="border border-slate-300 p-2 rounded-lg"
          type="text"
          id="activity"
          placeholder="Ej. Comida, Jugo de Naranja, Ensalada, Ejercicio, Pesas, Bicicleta"
        />
      </div>
      <div className="grid grid-cols-1 gap-3">
        <label className="font-bold" htmlFor="calories">
          Calorias:
        </label>
        <input
          className="border border-slate-300 p-2 rounded-lg"
          type="number"
          id="calories"
          placeholder="Calorias Ej. 300 o 500"
        />
      </div>
      <input
        className="bg-gray-800 hover:bg-gray-900 w-full p-2 uppercase text-white cursor-pointer"
        type="submit"
        value="Guardar Comida o Guardar Ejercicio"
      />
    </form>
  );
}
