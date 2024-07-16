// Objetos

const producto = {
  nombre: 'Tablet',
  precio: 300,
  disponible: false,
};

console.log(producto);
console.table(producto);
console.log(producto.nombre);

// Destructuring
const { nombre, precio, disponible } = producto;
console.log(nombre);
console.log(precio);
console.log(disponible);

const nombre1 = producto.nombre;
const precio2 = producto.precio;
const disponible2 = producto.disponible;
console.log(nombre1);
console.log(precio2);
console.log(disponible2);

// Object Literal Enhacement
const autenticado = true;
const usuario = 'Juan';
const nuevoObjeto = {
  autenticado,
  usuario,
};
console.log(nuevoObjeto);
